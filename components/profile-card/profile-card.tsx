import React, { useMemo, useState } from 'react';
import { Button, Container, Row, Col, Card, Text } from '@nextui-org/react';
import { Icon } from 'components/icon';
import { getDaysUntilDate, pluralize } from 'utils';
import { useLikeAnimation } from 'components/animations/like-animation/like-animation';
import {
	EMPTY_ICON_HEART_TEST_ID,
	ICON_HEART_TEST_ID,
	ADD_TO_FAVORITES_TEST_ID,
} from 'constants/test-ids';
import { PressEvent } from '@react-types/shared';

type Props = {
	profile: Profile;
};

/**
 * ProfileCard Component
 */
export const ProfileCard: React.FC<Props> = ({ profile }) => {
	const { Animation, animate } = useLikeAnimation();
	const isItAddedToFavorites = useMemo(() => {
		const favoriteProfiles =
			JSON.parse(window.localStorage.getItem('favorite-profiles')) || {};

		return Boolean(favoriteProfiles[profile.login.uuid]);
	}, []);

	const [isInFavorites, setIsInFavorites] = useState(isItAddedToFavorites);

	const addToFavorites = (event: PressEvent) => {
		const id = (event.target as HTMLButtonElement).value;
		const favoriteProfiles =
			JSON.parse(window.localStorage.getItem('favorite-profiles')) || {};

		if (!favoriteProfiles[id]) {
			animate();
			window.requestAnimationFrame(() => {
				setIsInFavorites(true);
			});
			favoriteProfiles[id] = profile;
		} else {
			favoriteProfiles[id] = undefined;
			setIsInFavorites(false);
		}

		window.localStorage.setItem(
			'favorite-profiles',
			JSON.stringify(favoriteProfiles)
		);
	};

	const daysUntilDate = getDaysUntilDate(new Date(profile.dob.date));

	return (
		<Card
			css={{
				w: '200px',
				h: '300px',
				filter: 'unset',
				transitionProperty: 'none'
			}}
		>
			<Card.Header
				css={{
					position: 'absolute',
					zIndex: 1,
					top: 0,
					background:
						'linear-gradient(0deg, rgba(17,24,28,0) 30%, rgba(17,24,28,0.3) 100%);',
				}}
			>
				<Row justify="flex-end">
					<Animation>
						<Button
							data-testid={`${ADD_TO_FAVORITES_TEST_ID}-${profile.login.uuid}`}
							onPress={addToFavorites}
							flat
							auto
							ripple={false}
							rounded
							value={profile.login.uuid}
							css={{
								color: '$red600',
								bg: '$white',
								padding: 0,
								w: '50px',
								h: '50px',
								overflow: 'unset',
							}}
						>
							{isInFavorites ? (
								<Icon
									data-testid={ICON_HEART_TEST_ID}
									name="Heart"
									css={{ color: '$red600' }}
								/>
							) : (
								<Icon
									data-testid={EMPTY_ICON_HEART_TEST_ID}
									name="EmptyHeart"
								/>
							)}
						</Button>
					</Animation>
				</Row>
			</Card.Header>
			<Card.Body css={{ p: 0 }}>
				<Card.Image
					src={profile.picture.large}
					objectFit="cover"
					width="100%"
					height="100%"
				/>
			</Card.Body>
			<Card.Footer
				isBlurred
				css={{
					position: 'absolute',
					bgBlur: '#0f111466',
					borderTop: '$borderWeights$light solid $gray800',
					bottom: 0,
					zIndex: 1,
				}}
			>
				<Container direction="column" gap={0}>
					<Row justify="flex-start" gap={0}>
						<Col>
							<Text color="$white" size="$lg" weight="extrabold">
								{profile.name.title
									? `${profile.name.title}. `
									: ''}
								{`${profile.name.first}`}
							</Text>
						</Col>
					</Row>
					<Row justify="flex-start">
						<Text color="$blue50">
							{daysUntilDate} {pluralize('day', daysUntilDate)}{' '}
							until 🎂
						</Text>
					</Row>
				</Container>
			</Card.Footer>
		</Card>
	);
};

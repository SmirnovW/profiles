import React from 'react';
import { Button, Container, Spacer, Text } from '@nextui-org/react';
import { Header } from 'components/header';

type Props = {};

/**
 * Error Component
 */
export const Error: React.FC<Props> = () => {
	const tryAgain = () => {
		window.location.reload();
	};

	return (
		<>
			<Header />
			<Spacer y={3} />
			<Container
				display="flex"
				justify="center"
				alignItems="center"
				direction="column"
				gap={2}
			>
				<Text h2>Oops, something went wrong!</Text>
				<Button onClick={tryAgain}>Try again?</Button>
			</Container>
		</>
	);
};

import React, { useEffect, useState } from 'react';
import { Header } from 'components/header';
import { Container, Grid, Spacer } from '@nextui-org/react';
import { ProfileCard } from 'components/profile-card/profile-card';

export default function Favorites() {
	const [profiles, setProfiles] = useState<Profile[]>([]);

	useEffect(() => {
		const profiles = Object.values(
			JSON.parse(window.localStorage.getItem('favorite-profiles')) || {}
		) as Profile[];
		setProfiles(profiles);
	}, []);

	return (
		<div>
			<Header />
			<Container direction="row" display="flex" gap={1}>
				<Spacer y={2} />
				<Grid.Container gap={2} justify="center">
					{profiles.map((profile) => {
						return (
							<Grid key={profile.login.uuid}>
								<ProfileCard profile={profile} />
							</Grid>
						);
					})}
				</Grid.Container>
			</Container>
		</div>
	);
}

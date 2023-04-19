import React, { useState } from 'react';
import { useStore } from 'store';
import { fetchProfiles } from 'services/profiles';
import {
	Button,
	Container,
	Grid,
	Spacer,
	Dropdown,
	Loading,
	Text,
} from '@nextui-org/react';
import { ProfileCard } from 'components/profile-card/profile-card';
import { Header } from 'components/header';
import { HttpStatusCode } from 'constants/http-status-codes';
import {
	COUNTER_ITEM_TEST_ID,
	COUNTERS_DROPDOWN_TEST_ID,
} from 'constants/test-ids';

const RESULTS_OPTIONS = [5, 10, 15, 20];

export default function Profiles() {
	const [resultsAmount, setResultsAmount] = useState<number>(5);
	const { profiles, setProfiles, setError, error } = useStore();
	const [isLoading, setLoading] = useState(false);

	const changeResultsAmount = (option) => {
		setResultsAmount(Number(option));
	};

	const generateProfiles = async () => {
		if (!isLoading) {
			setError('');
			setLoading(true);
			const data = await fetchProfiles(resultsAmount);

			setLoading(false);
			if (data.status === HttpStatusCode.OK) {
				setProfiles(data.data);
			} else {
				setError(data?.error);
			}
		}
	};

	return (
		<>
			<Header />
			<Container direction="row" display="flex" gap={1}>
				<Spacer y={1} />
				<Container
					direction="column"
					alignItems="center"
					display="flex"
					gap={1}
				>
					<Dropdown>
						<Dropdown.Button
							flat
							data-testid={COUNTERS_DROPDOWN_TEST_ID}
						>
							How many profiles should be fetched?
						</Dropdown.Button>
						<Dropdown.Menu onAction={changeResultsAmount}>
							{RESULTS_OPTIONS.map((option) => {
								return (
									<Dropdown.Item key={option}>
										<span
											data-testid={`${COUNTER_ITEM_TEST_ID}-${option}`}
										>
											{option}
										</span>
									</Dropdown.Item>
								);
							})}
						</Dropdown.Menu>
					</Dropdown>
					<Spacer y={1} />
					<Button onClick={generateProfiles}>
						{isLoading ? (
							<Loading type="points" color="white" size="sm" />
						) : (
							`Fetch ${resultsAmount} profiles`
						)}
					</Button>
				</Container>
				<Spacer y={2} />
				{error && (
					<Container
						justify="center"
						alignItems="center"
						direction="row"
						display="flex"
						gap={1}
					>
						<Text size="$xl" color="error">
							{error}
						</Text>
					</Container>
				)}
				{isLoading ? (
					<Container
						justify="center"
						alignItems="center"
						display="flex"
						direction="column"
					>
						<Loading />
					</Container>
				) : (
					<Grid.Container gap={2} justify="center">
						{profiles.map((profile) => {
							return (
								<Grid key={profile.login.uuid}>
									<ProfileCard profile={profile} />
								</Grid>
							);
						})}
					</Grid.Container>
				)}
			</Container>
		</>
	);
}

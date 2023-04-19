import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { profileMock } from 'mocks/profile';
import { ProfileCard } from './profile-card';
import {
	ADD_TO_FAVORITES_TEST_ID,
	ICON_HEART_TEST_ID,
} from 'constants/test-ids';

const setItemSpy = jest.spyOn(window.localStorage.__proto__, 'setItem');

describe('<ProfileCard />', () => {
	it('should change icon', async () => {
		render(<ProfileCard profile={profileMock} />);
		const button = screen.getByTestId(
			`${ADD_TO_FAVORITES_TEST_ID}-${profileMock.login.uuid}`
		);

		await userEvent.click(button);

		waitFor(() => {
			expect(screen.getByTestId(ICON_HEART_TEST_ID)).toBeInTheDocument();
		});
	});

	it('should change store profile to the local storage', async () => {
		render(<ProfileCard profile={profileMock} />);
		const button = screen.getByTestId(
			`${ADD_TO_FAVORITES_TEST_ID}-${profileMock.login.uuid}`
		);

		await userEvent.click(button);

		expect(setItemSpy).toHaveBeenCalledWith(
			'favorite-profiles',
			JSON.stringify({ [profileMock.login.uuid]: profileMock })
		);
	});
});

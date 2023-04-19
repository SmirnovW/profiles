import React from 'react';
import { Navbar } from '@nextui-org/react';
import { useRouter } from 'next/router';
import { ROUTES } from 'constants/routes';

type Props = {};

/**
 * Header Component
 */
export const Header: React.FC<Props> = () => {
	const router = useRouter();

	return (
		<Navbar isBordered>
			<Navbar.Content hideIn="xs">
				<Navbar.Link
					isActive={router.pathname === ROUTES.HOME}
					href="/"
				>
					Profiles
				</Navbar.Link>
				<Navbar.Link
					isActive={router.pathname === ROUTES.FAVORITES}
					href="/favorites"
				>
					Favorites
				</Navbar.Link>
			</Navbar.Content>
		</Navbar>
	);
};

import * as React from 'react';
import { Text } from '@nextui-org/react';
import * as icons from './svg';
import { CSS } from '@nextui-org/react/types/theme/stitches.config';

type Props = {
	name: string;
	css?: CSS;
};

/**
 * Icon component
 */
export const Icon: React.FC<Props> = ({ name = '', css, ...restProps }) => {
	const IconComponent = icons[`${name}Icon`];

	if (typeof IconComponent === 'undefined') {
		console.error('Requested icon does not exist');
		return null;
	}

	return (
		<Text
			span
			css={{
				display: 'flex',
				alignItems: 'center',
				color: 'inherit',
				...css,
			}}
			{...restProps}
		>
			<IconComponent />
		</Text>
	);
};

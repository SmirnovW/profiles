import React, { useState, PropsWithChildren } from 'react';

import styles from './like-animation.module.css';

type Props = {};

const palette = [
	'#7642F0',
	'#AFD27F',
	'#DE8F4F',
	'#D0516B',
	'#5686F2',
	'#D53EF3',
];

export function useLikeAnimation() {
	const [isAnimated, setIsAnimated] = useState(false);

	const animate = () => {
		setIsAnimated(true);
		setTimeout(() => {
			setIsAnimated(false);
		}, 1000);
	};

	const Animation: React.FC<PropsWithChildren<Props>> = ({ children }) => {
		return (
			<div className={styles.wrapper}>
				<div
					className={`${styles.ripple} ${
						isAnimated ? styles.animationRipple : ''
					}`}
				/>
				{children}
				<div
					className={styles.particles}
					style={{ '--total-particles': 6 }}
				>
					{palette.map((color, index) => (
						<div
							key={color}
							className={`${styles.particle} ${
								isAnimated ? styles.animationParticle : ''
							}`}
							style={{ '--i': index + 1, '--color': color }}
						/>
					))}
				</div>
			</div>
		);
	};

	return {
		Animation,
		animate,
	};
}

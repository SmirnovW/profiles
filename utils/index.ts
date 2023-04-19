export function isServer() {
	return typeof window === 'undefined';
}

export function getDaysUntilDate(date: Date) {
	const currentDate = new Date();
	const nextDate = new Date(
		`${date.getMonth() + 1}/${date.getDate()}/${currentDate.getFullYear()}`
	);

	return Math.ceil(
		Math.abs(currentDate.getTime() - nextDate.getTime()) /
			(1000 * 60 * 60 * 24)
	);
}

export function pluralize(word: string, count: number) {
	return count > 1 ? `${word}s` : word;
}

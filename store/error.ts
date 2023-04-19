interface GlobalErrorStore {
	error: string;
	setError: (error: string) => void;
}

export const createGlobalErrorStore = (set): GlobalErrorStore => ({
	error: '',
	setError: (error) => set(() => ({ error })),
});

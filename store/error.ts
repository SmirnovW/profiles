import { StateCreator } from 'zustand';
import { ProfilesStore } from './profiles';

export interface GlobalErrorStore {
	error: string;
	setError: (error: string) => void;
}

export const createGlobalErrorStore: StateCreator<
	GlobalErrorStore & ProfilesStore,
	[],
	[],
	GlobalErrorStore
> = (set): GlobalErrorStore => ({
	error: '',
	setError: (error) => set(() => ({ error })),
});

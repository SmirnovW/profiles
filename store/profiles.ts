import { StateCreator } from 'zustand';
import { GlobalErrorStore } from './error';

export interface ProfilesStore {
	profiles: Profile[];
	setProfiles: (profiles: Profile[]) => void;
}

export const createProfilesStore: StateCreator<
	ProfilesStore & GlobalErrorStore,
	[],
	[],
	ProfilesStore
> = (set): ProfilesStore => ({
	profiles: [],
	setProfiles: (profiles) => set(() => ({ profiles })),
});

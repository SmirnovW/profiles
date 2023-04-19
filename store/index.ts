import { create } from 'zustand';
import { createProfilesStore, ProfilesStore } from 'store/profiles';
import { createGlobalErrorStore, GlobalErrorStore } from 'store/error';

export const useStore = create<ProfilesStore & GlobalErrorStore>((...a) => ({
	...createProfilesStore(...a),
	...createGlobalErrorStore(...a),
}));

import { create } from 'zustand';
import { createProfilesStore } from 'store/profiles';
import { createGlobalErrorStore } from 'store/error';

export const useStore = create((...a) => ({
	...createProfilesStore(...a),
	...createGlobalErrorStore(...a),
}));

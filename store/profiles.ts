interface ProfilesStore {
	profiles: Profile[];
	setProfiles: (profiles: Profile[]) => void;
}

export const createProfilesStore = (set): ProfilesStore => ({
	profiles: [],
	setProfiles: (profiles) => set(() => ({ profiles })),
});

import { PROFILES_URL } from 'constants/api';
import { HttpStatusCode } from 'constants/http-status-codes';

export async function fetchProfiles(results: number = 5): Promise<{
	data: Profile[];
	error?: string;
	status: HttpStatusCode;
}> {
	const response = await fetch(`${PROFILES_URL}?results=${results}`);
	return await response.json();
}

import {
	COUNTERS_DROPDOWN_TEST_ID,
	COUNTER_ITEM_TEST_ID,
	ADD_TO_FAVORITES_TEST_ID,
} from 'constants/test-ids';
import { PROFILES_URL } from 'constants/api';

describe('adding profile to the favorite list flow', () => {
	it('passes', () => {
		cy.intercept({
			pathname: PROFILES_URL,
			query: {
				results: '10',
			},
		}).as('getProfiles');
		cy.visit('http://localhost:3000/');
		cy.get(`[data-testid="${COUNTERS_DROPDOWN_TEST_ID}"]`).click();
		cy.get(`[data-testid="${COUNTER_ITEM_TEST_ID}-10"]`).click();
		cy.get('button').contains('Fetch 10 profiles').click();
		cy.wait('@getProfiles');
		cy.get(`[data-testid^="${ADD_TO_FAVORITES_TEST_ID}"]`).eq(0).click();
		cy.get('a').contains('Favorites').click();
		cy.wait(2000);
		cy.get(`[data-testid^="${ADD_TO_FAVORITES_TEST_ID}"]`)
			.eq(0)
			.should('be.visible');
	});
});

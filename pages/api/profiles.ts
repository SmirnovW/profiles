import { API_URL } from 'constants/randomuser';

export default async function handler(req, res) {
	try {
		const { results } = req.query;
		const response = await fetch(`${API_URL}?results=${results}`, {
			method: 'GET',
		});

		const data = await response.json();

		if (data.error) {
			res.status(400).json({ status: 400, error: data.error });
		}
		res.status(200).json({ status: 200, data: data.results });
	} catch (error) {
		res.status(500).json({ status: 500, error: JSON.stringify(error) });
	}
}

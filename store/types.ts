interface Profile {
	cell: string;
	dob: {
		date: string;
		age: number;
	};
	email: string;
	gender: string;
	id: {
		name: string;
		value: string
	};
	location: {
		street: {};
		city: string;
		state: string;
		country: string;
		postcode: number
	}
	login: {
		uuid: string;
		username: string;
		password: string;
		salt: string;
		md5: string;
	}
	name: {title: string; first: string; last: string;}
	nat: string;
	phone: string;
	picture: {
		large: string; medium: string; thumbnail: string;
	};
	registered: { date: string; age: number; };
}

export default (state = [], action) => {
	switch (action.type) {
		case 'FETCH_USER':
			return [...state, action.payload];
		default:
			return state;
	}
};

// wenn action FETCH_USER, dann add the payload property on that action Z. 1 to the state array; 

// Z. 4: new record that we want to add in


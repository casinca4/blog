import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPosts = () => async dispatch => {
	const response = await jsonPlaceholder.get("/posts");

	dispatch({ type: "FETCH_POSTS", payload: response.data }); 
};


/* Z. 6 war vorher so:

return {
	type: 'FETCH_POSTS',
	payload: response
};

- when we are making use of Redux Thunk we are not going to return any actions from the inner function any more

- with Redux Thunk we just get the ability to return a function as well, so we don't need the action creator 

- if we ever want to dispatch an action, we will instead call the dispatch function manually with the action that we are trying to dispatch

- statt return: call dispatch and pass action object


*/

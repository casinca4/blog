import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPostsAndUser = () => async (dispatch, getState) => {
	// console.log('about to fetch posts');
	await dispatch(fetchPosts());
	// getState().posts
	// console.log(getState().posts)
	// console.log('fetched posts');
	const userIds = _.uniq(_.map(getState().posts, 'userId'));
	// console.log(userIds);
	userIds.forEach(id => dispatch(fetchUser(id)));
};

export const fetchPosts = () => async dispatch => {
	const response = await jsonPlaceholder.get('/posts');

	dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

// export const fetchUser = (id) => (dispatch) => {
// 	_fetchUser(id, dispatch); 			// call memoized version of fetch user
// };

// const _fetchUser = _.memoize(async (id, dispatch) => {
// 	const response = await jsonPlaceholder.get(`/users/${id}`);

// 	dispatch({ type: 'FETCH_USER', payload: response.data });
// });

export const fetchUser = id => async dispatch => {
	const response = await jsonPlaceholder.get(`/users/${id}`);

	dispatch({ type: 'FETCH_USER', payload: response.data });
};

/* Z. 7 war vorher so:

return {
	type: 'FETCH_POSTS',
	payload: response
};

- when we are making use of Redux Thunk we are not going to return any actions from the inner function anymore

- with Redux Thunk we just get the ability to return a function as well, so we don't need the action creator 

- if we ever want to dispatch an action, we will instead call the dispatch function manually with the action that we are trying to dispatch

- statt return: call dispatch and pass action object

- _ to indicate that this is a private function so to speak and that other engineers should not attempt to call this function unless they really know what they are doing

- clg Z. 5 und 9 funktioniert nur, wenn fetchPostsAndUser auch in PostList; die zweite erscheint mit Zeitverzögerung

- getState().posts: call getState and reference the posts property; should have all of the posts that we just loaded up and caught inside of the reducer
*/

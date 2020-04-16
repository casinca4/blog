import React from 'react';
import { connect } from 'react-redux';
import { fetchPostsAndUser } from '../actions';
import UserHeader from './UserHeader';

class PostList extends React.Component {
	componentDidMount() {
		this.props.fetchPostsAndUser();
	}

	renderList() {
		return this.props.posts.map(post => {
			return (
				<div className="item" key={post.id}>
					<i className="large middle aligned icon user" />
					<div className="content">
						<div className="description">
							<h2>{post.title}</h2>
							<p>{post.body}</p>
						</div>
						<UserHeader userId={post.userId} />
					</div>
				</div>
			);
		});
	}

	render() {
		// console.log(this.props.posts); // zum Testen
		return <div className="ui relaxed divided list">{this.renderList()}</div>;
	}
}

const mapStateToProps = state => {
	return { posts: state.posts };
};

export default connect(mapStateToProps, { fetchPostsAndUser })(PostList);

// Z. 38 stand erst 0 anstatt mapStateToProps; null, da wir kein mapStateToProps haben und to indicate that we don't have a state that we want to get into this component

// state hat property called 'posts' von reducers index.js; that property holds all the data that the reducer has returned

// userId, weil in jsonplaceholder/posts so 

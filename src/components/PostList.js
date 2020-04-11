import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostList extends React.Component {
	componentDidMount() {
		this.props.fetchPosts();
	}

	renderList() {
		return this.props.posts.map((post) => {
			return (
				<div className="item" key={post.id}>
					<i className="large middle aligned icon user" />
					<div className="content">
						<div className="description">
							<h2>{post.title}</h2>
							<p>{post.body}</p>
						</div>
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

const mapStateToProps = (state) => {
	return { posts: state.posts };
};

export default connect(mapStateToProps, { fetchPosts })(PostList);

// null, da wir kein mapStateToProps haben und to indicate that we don't have a state that we want to get into this component

// state hat property called 'posts' von reducers index.js; that property holds all the data that the reducer has returned

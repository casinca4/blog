import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  
	render() {
		return <div>Post List</div>;
	}
}

export default connect(null, { fetchPosts })(PostList);

// null, da wir kein mapStateToProps haben und to indicate that we don't have a state that we want to get into this component

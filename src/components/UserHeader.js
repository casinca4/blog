import React from 'react';
import { connect } from 'react-redux';
// import { fetchUser } from '../actions';	

class UserHeader extends React.Component {
	// componentDidMount() {
	// 	this.props.fetchUser(this.props.userId);       
	// }

	render() {
    // const user = this.props.users.find(user => user.id === this.props.userId);  
    // geht zu mapStateToProps

    const { user } = this.props;                    // ist hinzugekommen

		if (!user) {	
			return null;
		}

		return <div className="header">{user.name}</div>;
	}
}

const mapStateToProps = (state, ownProps) => {
	return { user: state.users.find(user => user.id === ownProps.userId) };
};

export default connect(mapStateToProps)(UserHeader);

// we need to look at state.users and we need to find the very particular user that we care about

// mit return { users: state.users } our component will have access to a prop called this.props.users that will be the array of all the users that we care about

// loop through the array and find the user that we want to display

// find: as soon as it returns true, the find function will stop and return whatever element we had returned true for

// when the app is first rendered onto the screen, we will not have a list of users, sondern empty array; the user we care about will not be available --> if there is no user found, return nothing

// ownProps: we want to find a user ID that is equal to this component's prop of user ID, but that prop is only available inside the component; ownProps is reference to the props that are about to be sent into the component

// users in Z. 25 wird zu user

// this.props.fetchUser(this.props.userId)	--> userId ist prop von PostList

// fetchUser brauchen wir nicht mehr, also in import, component und connect weg, da component was still attempting to fetch its own data whenever it gets rendered on the screen; jetzt nur noch einmal
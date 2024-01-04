function Profile(props){
    const {fName, lName} = props;
    return (
        <h1>{props.children} Name: {fName} {lName}</h1>
    );
}

export default Profile;
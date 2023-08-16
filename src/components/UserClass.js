import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        company: "Unknown",
      },
    };
    console.log("Child Constructor");
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Dinesh442000");
    const json = await data.json();
    console.log(json);
    this.setState({ userInfo: json });
  }

  componentDidUpdate() {
    console.log("Yes Comp updated");
  }

  componentWillUnmount() {
    console.log("Component unmounted");
  }

  render() {
    const { name, location, company, avatar_url } = this.state.userInfo;

    return (
      <div className="user-info">
        <img src={avatar_url}></img>
        <h1>{name}</h1>

        <h2>{location}</h2>
        <h2>{company}</h2>
      </div>
    );
  }
}

export default UserClass;

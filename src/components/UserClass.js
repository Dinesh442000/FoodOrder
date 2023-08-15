import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      count: 0,
    };
    console.log("Child Constructor");
  }

  componentDidMount() {
    console.log("Child Mount");
  }

  render() {
    console.log("Child Render");
    const { name, location } = this.props;
    return (
      <div className="user-info">
        <h1>{name}</h1>
        <h2>Count:{this.state.count}</h2>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Increase
        </button>
        <h2>{location}</h2>
        <h2>dchoudhary442</h2>
      </div>
    );
  }
}

export default UserClass;

import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom"


class Groups extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div>
        <div>Hi from groups</div>
        <Link to={`/dashboard/groups/group`} >Go to group</Link>
      </div>
    );
  }
}


export default Groups;

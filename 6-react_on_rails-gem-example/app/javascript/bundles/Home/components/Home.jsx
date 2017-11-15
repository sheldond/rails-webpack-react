import React from "react"
import PropTypes from "prop-types"
import Inventory from "./Inventory"

class Home extends React.Component {
  render () {
    return (
      <div>
        The home page component has rendered.
        <Inventory fishes={this.props.fishes} />
      </div>
    );
  }
}

Home.propTypes = {
  fishes: PropTypes.object
};
export default Home

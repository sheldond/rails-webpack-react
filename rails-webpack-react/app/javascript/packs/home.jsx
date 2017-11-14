import React from 'react';
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Inventory from '../inventory'

class Home extends React.Component {
  render() {
    return (
      <div>
        The home page component has rendered.
        <Inventory fishes={this.props.fishes} />
      </div>
    )
  }
}

Home.propTypes = {
  fishes: PropTypes.object.isRequired
}

document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('inventory')
  const data = JSON.parse(node.getAttribute('data'))
  ReactDOM.render(<Home {...data} />, node)
})

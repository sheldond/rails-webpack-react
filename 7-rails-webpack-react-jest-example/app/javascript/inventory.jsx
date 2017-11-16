import React from 'react'
import PropTypes from 'prop-types'
// import AddFishForm from './AddFishForm';

class Inventory extends React.Component {
  constructor() {
    super();
    this.renderInventory = this.renderInventory.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, key) {
    // const fish = this.props.fishes[key];
    // const updatedFish = {
    //   ...fish,
    //   [event.target.name]: event.target.value
    // };
    // this.props.updateFish(key, updatedFish);
  }

  renderInventory(key) {
    const fish = this.props.fishes[key];
    return (
      <div className="fish-edit" key={key}>
        <input type="text" value={fish.name} name="name" placeholder="Fish Name" onChange={(event) => this.handleChange(event, key)}/>
        <input type="text" value={fish.price} name="price" placeholder="Fish Price" onChange={(event) => this.handleChange(event, key)} />
        <select type="text" value={fish.status} name="status" placeholder="Fish Status" onChange={(event) => this.handleChange(event, key)}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea type="text" value={fish.desc} name="desc" placeholder="Fish Desc" onChange={(event) => this.handleChange(event, key)}></textarea>
        <input type="text" value={fish.image} name="image" placeholder="Fish Image" onChange={(event) => this.handleChange(event, key)} />
      </div>
    )
  }

  render() {
    return (
      <div>
        <h2>Fish Inventory</h2>
        { Object.keys(this.props.fishes).map(this.renderInventory) }
      </div>
    )
  }
}

Inventory.propTypes = {
  fishes: PropTypes.object.isRequired
}

export default Inventory;

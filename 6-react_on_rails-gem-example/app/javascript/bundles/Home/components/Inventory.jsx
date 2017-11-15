import React from "react"
import PropTypes from "prop-types"

class Inventory extends React.Component {
  constructor() {
    super();
    this.renderInventory = this.renderInventory.bind(this);
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
        <button onClick={() => this.props.removeFish(key)}>Remove Fish</button>
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
  fishes: PropTypes.object
};
export default Inventory

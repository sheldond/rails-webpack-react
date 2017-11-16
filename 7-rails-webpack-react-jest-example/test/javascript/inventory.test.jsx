import React from 'react';
import ReactDOM from 'react-dom';
import Inventory from '../../app/javascript/inventory';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

const fishes = {
  fish1: {
    name: 'Pacific Halibut',
    image: 'https://i.istockimg.com/file_thumbview_approve/36248396/5/stock-photo-36248396-blackened-cajun-sea-bass.jpg',
    desc: 'Everyones favorite white fish. We will cut it to the size you need and ship it.',
    price: 1724,
    status: 'available'
  }
}

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Inventory fishes={fishes} />, div);
});

test('matches the rendered snapshot', () => {
  const component = renderer.create(
    <Inventory fishes={fishes} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('fish name is correct', () => {
  const inventory = Enzyme.shallow(
    <Inventory fishes={fishes} />
  );
  expect(inventory.find("input[name='name']")
    .prop('value')).toEqual('Pacific Halibut')
});

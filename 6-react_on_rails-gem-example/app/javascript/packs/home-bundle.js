import ReactOnRails from 'react-on-rails';

import Home from '../bundles/Home/components/Home';
import Inventory from '../bundles/Home/components/Inventory';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  Home,
  Inventory
});

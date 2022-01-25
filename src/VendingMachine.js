import { BrowserRouter, Route } from 'react-router-dom';
import './VendingMachine.css';

import NavBar from './NavBar';
import Soda from './Soda';
import Chips from './Chips';
import Sardines from './Sardines';

function VendingMachine() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Route exact path='/soda'>
          <Soda />
        </Route>
        <Route exact path='/chips'>
          <Chips />
        </Route>
        <Route exact path='/sardines'>
          <Sardines />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default VendingMachine;

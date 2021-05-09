import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DashBoard from './DashBoard';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import Header from './Header';
import Product from './Product';
import PageNotFound from './PageNotFound';
import ProductDetails from './ProductDetails';
import User from './User';
import Welcome from './Welcome';
import { Fragment } from 'react';
import FragmentDemo from './FragmentDemo';
import UserStyle from './UserStyle';
function App() {
  return (
    <div className="App">
    
      <Router>
      <Header></Header>
        <Switch>
          <Route path="/" exact component={User}></Route>
          <Route path="/dash" exact component={DashBoard}></Route>
        <Route path="/product" exact component={Product}></Route>
        <Route path="/user"  component={UserStyle}></Route>
        <Route path="/welcome"  component={Welcome}></Route>
        <Route path="/fragment"  component={FragmentDemo}></Route>
        <Route path="*"  component={PageNotFound}></Route>
        
        </Switch>
      </Router>
    </div>
  );
}

export default App;

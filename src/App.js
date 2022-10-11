import logo from './logo.svg';
import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import Navbar from './components/Navbar';
import Homescreen from './screens/Homescreen';
import Registerscreen from './screens/Registerscreen';
import Cartscreen from './screens/Cartscreen'
import Loginscreen from './screens/Loginscreen';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'



function App() {
  return (
    <div className="App">
    <Navbar/>
  <Router>
    <Switch>
 
 <Route exact path="/login" ><Loginscreen/></Route>
 <Route exact path="/cart" ><Cartscreen/></Route>
 <Route exact path="/register" ><Registerscreen/></Route>
 <Route path="/" ><Homescreen/></Route>
 </Switch>
  </Router>

  

   {/* <Homescreen/> */}
    </div>
  );
}

export default App;

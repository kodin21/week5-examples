import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import FAQ from './components/FAQ';
import Login from './components/Login';




const My404 = () => (<div>Sayfa bulunamadi!!</div>);

function App() {
  return (
   <Router>
     MENU!!
      <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/faq">FAQ Soru 1</Link>
            </li>
            <li>
              <Link to="/faq/2">FAQ Soru 2</Link>
            </li>
            <li>
              <Link to="/olmayan-link">Haberler</Link>
            </li>
          </ul>
        </nav>

      <Switch>
        <Route path="/faq/:faqID?">
          <FAQ />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route exact path="/">
          asdasds
        </Route>
        <Route>
            <My404 />
        </Route>
      </Switch>
   </Router>
  );
}

export default App;

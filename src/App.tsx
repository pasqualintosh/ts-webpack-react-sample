import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './screens/Home/Home';
import './App.css';

const App: React.FC = (): JSX.Element => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/profile/">
            <>
              <h3>TBD</h3>
            </>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;

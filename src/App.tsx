import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './screens/Home';
import Form from './screens/Form';
import './App.css';
import { UserDataProvider } from './providers/UserDataProvider';

const App: React.FC = (): JSX.Element => {
  return (
    <Router>
      <UserDataProvider>
        <Layout>
          <Switch>
            <Route path="/form/">
              <Form />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Layout>
      </UserDataProvider>
    </Router>
  );
};

export default App;

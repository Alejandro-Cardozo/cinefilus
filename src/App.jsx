import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import SimpleBottomNavigation from './components/MainNav';
import { Container } from '@mui/material';

import './App.css';
import Trending from './pages/Trending';
import Movies from './pages/Movies'
import Series from './pages/Series'
import Search from './pages/Search'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className='app'>
        <Container>
          <Switch>
            <Route path='/' component={Trending} exact />
            <Route path='/movies' component={Movies} />
            <Route path='/series' component={Series} />
            <Route path='/search' component={Search} />
          </Switch>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;

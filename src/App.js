import { useState } from 'react';
import { BrowserRouter as Router, Redirect, Route, NavLink, Switch } from 'react-router-dom';
import './App.css';
import { logout } from './services/fetchUtils';
import Auth from './Auth';
import ListPage from './ListPage';
import CreatePage from './CreatePage';
import UpdatePage from './UpdatePage';
import { client } from './services/client';
 
function App() {
  const [user, setUser] = useState(client.auth.user());


  async function handleLogout() {
    logout();
    setUser('');
  }

  return (
    <Router>
      <div className='app'>
        <header className='appHeader'>
          {
            user &&
      <>
        <NavLink to = '/restaurants' className='Nav'>List</NavLink>
        <NavLink to = '/create' className='NavLink'>Create</NavLink>
        <button onClick={handleLogout}>LogOut</button>   
      </>
          }
        </header>
        <main>
          <Switch>
            <Route exact path='/'>
              {
                user
                  ? <Redirect to='/restaurants' />
                  : <Auth setUser={setUser} />
              }
            </Route>
            <Route exact path='/restaurants'>
              {
                user
                  ? <ListPage />
                  : <Redirect to='/' />
              }
            </Route>
            <Route exact path='/create'>
              {
                user
                  ? <CreatePage />
                  : <Redirect to ='/'/>
              }
            </Route>
            <Route exact path='/restaurants/:id'>
              {
                user
                  ? <UpdatePage />
                  : <Redirect to='/'/>
              }
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}
export default App;

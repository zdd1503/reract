import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { NavLink, Route, HashRouter } from 'react-router-dom';
import HomePage from './page/homePage';
import List from './page/list'


class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'HomePage',
      path: '',
    };

  }
  render() {
    let me = this;
    if (sessionStorage.getItem('name') === 'HomePage' || sessionStorage.getItem('name') === null) {
      sessionStorage.setItem('name', 'HomePage');
    }
    const pageName = me.state.currentPage;
    return (
      <HashRouter>
        <div className="App">
          <ul className={'nav-list'}>
            <li onClick={me.pageOne.bind(this, 'HomePage')} className={pageName == 'HomePage' ? 'current' : ''}>
              <NavLink exact to='/' activeClassName="activeLeftClass">
                <p>首页</p>
              </NavLink>
            </li>
            <li onClick={me.pageOne.bind(this, 'List')}
              className={pageName == 'List' ? 'current' : ''}>
              <NavLink to='/list' activeClassName="activeLeftClass" activeStyle={{ left: '5px' }}>
                <p>列表页</p>
              </NavLink>
            </li>

          </ul>
          <div>
            <Route exact path='/' component={HomePage}></Route>
            <Route path='/list' component={List}></Route>
          </div>
        </div>
      </HashRouter>

    );
  }
  pageOne(name) {
    let sessionStorage = window.sessionStorage;
    sessionStorage.removeItem('name');
    sessionStorage.setItem('name', name);
    this.setState({
      currentPage: name
    });
  }

  componentDidMount() {
    let me = this;
    let storage = window.sessionStorage;
    window.onhashchange = function () {
      const pathArr = window.location.hash.split('?')[0].split('/');
      const path = pathArr[pathArr.length - 1] || 'HomePage';
      me.setState({
        currentPage: path,
        path: window.location.hash
      });
    };

    me.setState({
      currentPage: storage.getItem('name')
    });
  }
}

export default App;

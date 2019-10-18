import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import Home from './Home'
import CooperationScreen from './CooperationScreen'
import AppScreen from './AppScreen'
import WechatScreen from './WechatScreen'
import DouyinScreen from './DouyinScreen'
import FreeScreen from './FreeScreen'
import Contact from './Contact'

function App() {
  return (
    <Router>
      <Contact />
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/cooperation"><CooperationScreen /></Route>
        <Route path="/app"><AppScreen /></Route>
        <Route path="/wechat"><WechatScreen /></Route>
        <Route path="/douyin"><DouyinScreen /></Route>
        <Route path="/free"><FreeScreen /></Route>
      </Switch>
    </Router>
  );
}

export default App;

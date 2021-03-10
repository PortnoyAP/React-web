/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs.jsx";
import { BrowserRouter, Route } from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";

const App = ( props ) => {

  let postsD = [
    {id: 1, post: "Hi how are you" , likesCount: 12},
    {id: 2, post: "It's my first post", likesCount: 15 }

];

let dialogsD = [
  {id: 1, name: "Serega"},
  {id: 2, name: "Alesha"},
  {id: 3, name: "Misha"},
  {id: 4, name: "Sveta"},
  {id: 5, name: "Olesya"}
];

let messagesD = [
  {id: 1, message: "Hello"},
  {id: 2, message: "Ashkelon"},
  {id: 3, message: "Israel"},
  {id: 4, message: "Yo"},
  {id: 5, message: "Yo"},
];


  return (
  <BrowserRouter>  
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div class="app-wrapper-content">
        {/* <Route path='/profile' component={Profile}/>
        <Route path='/dialogs' component={Dialogs}/> */}
        <Route path='/profile' render={ () => <Profile posts={postsD} />}/>
        <Route path='/dialogs' render={ () => <Dialogs dialogs={dialogsD} messages={messagesD}/>}/>

        <Route path='/news' component={News}/>
        <Route path='/music' component={Music}/>
        <Route path='/settings' component={Settings}/>
       </div>
    </div>
  </BrowserRouter>  
  );
};

export default App;
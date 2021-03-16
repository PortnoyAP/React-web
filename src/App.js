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
  return (
  <BrowserRouter>  
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div class="app-wrapper-content">
        {/* <Route path='/profile' component={Profile}/>
        <Route path='/dialogs' component={Dialogs}/> */}
        <Route path='/profile' render={ () => <Profile profilePage={props.state.profilePage} 
                                                       addPost={props.addPost}
                                                       updateNewText={props.updateNewText} 
                                                        />}/>
        <Route path='/dialogs' render={ () => <Dialogs state={props.state.dialogsPage}
                                                        newMessageText= {props.state.dialogsPage.newMessageText}
                                                        addMessage={props.addMessage}
                                                        updateTextMessage= {props.updateTextMessage} />}/>

        <Route path='/news' component={News}/>
        <Route path='/music' component={Music}/>
        <Route path='/settings' component={Settings}/>
       </div>
    </div>
  </BrowserRouter>  
  );
};

export default App;
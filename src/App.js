import React,{useState} from 'react'
import './App.css';
import Images from './components/Images';
function App() {

  return (
    <div className="App">
       <Images/>
    </div>
  );
}

export default React.memo(App);

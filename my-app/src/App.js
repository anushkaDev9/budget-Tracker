import './App.css';
import React, {  useState } from "react";
import SideDrawer from '../src/SideDrawer/pages/SideDrawer.js'
import Header from './shared/components/Header.js'
import AddItems from './AddItems.js/pages/AddItems.js';
function App() {
  const[open,setOpen]=useState(true)
  const closeDrawer=()=>{
        setOpen(false)
  }
  const openDrawer=()=>{
    setOpen(true)
  }
  return (
    <div className="App">
      {open ? (
        <SideDrawer onClick={closeDrawer} />
      ) : (
        <div>
          <button onClick={openDrawer}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      )}

      <Header />
    </div>
  );
}

export default App;

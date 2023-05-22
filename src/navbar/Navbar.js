import React from "react";

function Navbar({mode,toggleMode}) {
  return (
    <div>
      <nav className={`navbar bg-${mode==='light'?'light':"dark"} py-3`}>
        <ul className={`d-flex text-light align-item-center text-${mode==='light'?'dark':"white"}`}>
          <li className="list-group mr-4"><a href="/">Home</a></li>
          <li className="list-group mr-4"><a href="/about">About</a></li>
          <li className="list-group mr-4">Contact</li>
          <li className="list-group mr-4">Help</li>
        </ul>
        <ul>
          <div className="custom-control custom-switch">
            <input    
              type="checkbox"
              className="custom-control-input"
              id="customSwitch1" onClick={toggleMode}
            />
            <label className="custom-control-label" htmlFor="customSwitch1" style={{color:mode==='light'?'black':'white'}}>
             {mode==='light'?'Enable Dark Mode':'Disable Dark Mode'}
            </label>
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;

import { Switch, Route } from "react-router-dom";
// import Shoes from "./pages/shoes";
// import Appliances from './pages/appliances'
import Login from './login'
// import {useState} from 'react';
// import Profile from "./profile"
// import {OurContext} from './store/loginContext'
import { OurContextProvider, useOurContext } from './store/loginContext'
import MyLogin from "./contextpractice/MyLogin";
import MyDashboard from "./contextpractice/MyDashboard";
import Profile from "./profile";


function App() {
  const { showProfile } = useOurContext();
  // const [username, setUsername] = useState("");

  return (
    <div className="App">
      <OurContextProvider>
       <Login />

      </OurContextProvider>


      {/* <OurContext.Provider values ={{username, setUsername, setShowProfile}}>
        {showProfile ? <Profile/> : <Login/> }
    </OurContext.Provider> */}
    </div>
  );
}

export default App;

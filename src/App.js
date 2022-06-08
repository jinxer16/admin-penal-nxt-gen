import logo from './logo.svg';
import './App.css';
import SideBar from './Components/SideBar/SideBar';
import Sidebars from './Components/SideBar/Sidebars';
// import HomePage from './Components/HomePage/HomePage';
// import TVK from './Components/TVK/TVK';
// import Users from './Components/Users/Users';
// import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      {/* <BrowserRouter> */}
      <Sidebars />
      {/* <SideBar /> */}
      {/* </BrowserRouter> */}

    </div>
  );
}

export default App;


import {Routes,Route} from "react-router-dom";
import Home from "./Components/Home";
import App1 from "./Components/App1";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/App1" element={<App1 />}></Route>
    </Routes>
  )
}

export default App;

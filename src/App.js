import {
BrowserRouter as Router,
Route,
Routes
} from "react-router-dom"
import Home from "./components/Home"
import Header from "./components/Header"
import "./styles/app.scss"
import {Toaster} from "react-hot-toast"
import Cart from "./components/Cart"

function App() {
  return (
    <div className="App">
   <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Cart" element={<Cart/>}/>
    </Routes>
    <Toaster/>
   </Router>
    </div>
  );
}

export default App;

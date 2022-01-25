import "./App.css";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import {
  BrowserRouter as Router,
  Routes, 
  Route
} from "react-router-dom";
import Logo from "./components/common/Logo/Logo";
import { Provider } from "react-redux";
import { store } from "./redux/index";
import ItemPage from "./pages/ItemPage/ItemPage";
import Footer from "./components/common/Footer/Footer";

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <Router>
          <Logo />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="app">
              <Route path=":name" element={<ItemPage />} />
            </Route>
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer/>
        </Router>
      </div>
    </Provider>
  );
}

export default App;

import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import "./App.css";
import Footer from "./Footer/Footer";
import Home from "./Home/Home";

import Navbar from "./Navbar/Navbar";
import ProductsPage from "./ProductsPage/ProductsPage";

function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Switch>
          <Route path={"/products"}>
            <ProductsPage />
          </Route>
          <Route path={"/"}>
            <Home />
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;

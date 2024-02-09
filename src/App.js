import TopNav from "./components/navbar/TopNav";
import Navbar from "./components/navbar/Navbar";
import Toast from "./components/Toast/Toast";
import Home from "./pages/home/Home";
import Category from "./pages/category/Category";
import Product from "./pages/product/Product";
import Cart from "./pages/cart/Cart";
import Favourite from "./pages/favorite/Favourite";
import Checkout from "./pages/checkout/Checkout";
import Orders from "./pages/orders/Orders";
import Success from "./pages/success/Success";
import Error from "./pages/404/Error";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";

function App() {
  return (
    <BrowserRouter>
      <LoadingScreen />
      <TopNav />
      <Navbar />
      <Toast />
      <main className="px-10 md:px-24 h-full w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:name" element={<Category />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/favourite" element={<Favourite />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order" element={<Orders />} />
          <Route path="/success" element={<Success />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

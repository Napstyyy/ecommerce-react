import "./App.css";
//se tienen que importar todos lo elementos para que puedan ser usados en la aplicacion
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar.jsx";
import { Shop } from './pages/shop/shop'
import { Cart } from './pages/cart/cart'
import { ShopContextProvider } from "./context/shop-context";
import { ShopAddtoCart } from "./pages/shopAddtoCart/shopAddtoCart";
import Login from "./pages/login/login.jsx";
import Register from "./pages/register/register.jsx";
import EditAdmin from "./pages/admin/editProfileAdmin/editProfileAdmin";
import { EditProduct } from "./pages/admin/editProduct/editProduct";
import StripeContainer from "./pages/Payment/stripeContainer";
function App() {
  return (
    <div className="App"> 
      <ShopContextProvider>{/* aqui se ingresan las rutas del proyecto con sus respectivos elemento */}
      <Router>
        <Navbar /> {/*se llama al componente del Navbar */}
        <Routes>
          <Route path="/" element={<Shop />}/> {/*se le entrega a la ruta "/" el componente Shop*/}
          <Route path="/shop" element={<ShopAddtoCart />}/> // {/*se le agrega "/shop" el componente ShopAddCart*/}
          <Route path="/cart" element={<Cart />}/>{/* se crea la ruta cart al modulo del carro */}
          <Route path="/login" element={<Login />}/>{/* se crea la ruta del login al login */}
          <Route path="/register" element={<Register />}/>{/* se crea la ruta register al registro */}
          <Route path="/editAdmin" element={<EditAdmin />}/>{/* se crea la ruta en la que el admin edita */}
          <Route path="/editInventory" element={<EditProduct />}/>{/* se crea la ruta para editar el inventorio */}
          <Route path="/stripe" element={<StripeContainer />}/>{/* se crea la ruta para el portal de pago */}
        </Routes>
      </Router>
      </ShopContextProvider>
    </div>
  )
};

export default App;

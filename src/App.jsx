import { useEffect, useState } from "react"
import Hero from "./Components/Hero"
import Topbar from "./Components/Topbar"
import Cart from "./Components/Cart"
import './App.css';


const App = () => {

  const [items, setitems] = useState([]);
  const [cart, setcart] = useState([]);

  useEffect(() => {

    setitems(cart);

  }, [cart]);

  return (
    <>
      <div id="mains">
        <Topbar
          items={items}
        />
        <Hero
          cart={cart}
          setcart={setcart}
        />
      </div>
      <div><Cart
        items={items}
        setitems={setitems}
        setcart={setcart} /></div>


    </>

  )
}

export default App
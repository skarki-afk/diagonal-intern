import { useState } from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Hero from './components/Hero';
import Cart from './components/Cart';
import useFetch from './components/data/useFetch';
import {Modal} from "./components/data/type"


function App() {
  const [cart,setCart] = useState<Modal[]>([])
  
  const onAdd =(product:Modal)=>{
    const exist = cart.find(x=> x.id === product.id)
    if(exist) {
      setCart(cart.map(x => x.id === product.id? {...exist, quantity: exist.quantity + 1}: x))
    }
    else{
      setCart([...cart,{...product, quantity: 1}])
    }
  }

  const onRemove = (product:Modal) =>{
    cart.map(x => {
      if(x.quantity === 1){
        setCart(cart.filter(x=> x.id !== product.id))
      }
      else{
        setCart(cart.map(x=> x.id === product.id? {...x, quantity: x.quantity - 1}: x))
      }
    })
  }
  
  return (
    <div className="w-screen">
      <Router>
        <Routes>
          <Route path="/" element={<Hero onAdd={onAdd} cart={cart}/>}></Route>
          <Route path="/cart" element={<Cart onAdd={onAdd} onRemove={onRemove}  cart={cart}/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

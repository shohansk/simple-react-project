import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import playersData from './data/data.json'
import PlayerInfo from './components/PlayerInfo/PlayerInfo';
import Cart from './components/PlayerInfo/Cart/Cart';




function App() {
const[players ,setPlayers] =useState([]);
const [cart, setCart ] = useState([]);
  useEffect(() => {
    setPlayers(playersData);
    const names =playersData.map(players =>players.name)
    console.log(names);
  
  } ,[])
  const handleAddPlayer = (players) =>{
    const newCart =[...cart,players];
    setCart(newCart);
    
  }
  
  
  return (
    <div className="App">
<h1>Total Players : {playersData.length}</h1>
<h3>Player added :{cart.length}</h3>
<Cart cart={cart}></Cart>

{
  playersData.map (players =><PlayerInfo players ={players} handleAddPlayer ={handleAddPlayer}></PlayerInfo>)
}




     
    </div>
  );
}

export default App;

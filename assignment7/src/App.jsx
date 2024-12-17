import './App.css';
import { useState } from 'react';
import Banner from './components/Banner/Banner'
import Header from './components/Header/Header'
import Main from './components/Main/Main';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import Subscribe from './components/Subscribe/Subscribe';
import Footer from './components/Footer/Footer';

function App() {

  const [count, setCount] = useState(0);
  const [selectedPlayer, setSelectedPlayer] = useState([]);

  const handleToChoosePlayer = (player) => {

    const isExistedPlayer = selectedPlayer.find((pl) => pl.id == player.id);

    if (isExistedPlayer) {
      toast.error("Player Already Selected");
    }
    else {
      if (selectedPlayer.length < 6) {
        if (count >= player.price) {
          const newPlayer = [...selectedPlayer, player];
          setSelectedPlayer(newPlayer);
          const currentCoinBalance = count - parseFloat(player.price);
          setCount(currentCoinBalance);
          toast.success(`Congrats!! ${player.player_name} is now in your squad`);
        }
        else {
          toast.error("Not enough money to buy this player. Claim some Credit");
        }

      }
      else {
        toast.error("Cannot add player more than 6");
      }
    }


  };

  const handleToDeletePlayer = (id) => {
    const remainingPlayer = selectedPlayer.filter((pl) => pl.id != id);
    setSelectedPlayer(remainingPlayer);
    toast.warn("Player removed");

  }

  const handleToAddCoinBalance = () => {
    setCount(count + 800000);
    toast.success("Credit Added to your Account");
  };


  return (
    <>
      <Header count={count}></Header>
      <Banner handleToAddCoinBalance={handleToAddCoinBalance}></Banner>
      <Main handleToDeletePlayer={handleToDeletePlayer} handleToChoosePlayer={handleToChoosePlayer} selectedPlayer={selectedPlayer}></Main>
      <Footer></Footer>
      <ToastContainer position="top-center"/>
    </>
  )
  
}

export default App

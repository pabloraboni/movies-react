import './App.scss'
import { Outlet } from "react-router-dom";

//Components
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Header/>
      <div className="pr-container --flex-1">        
        <Outlet />
      </div>
      <Footer/>
    </>
  )
}

export default App

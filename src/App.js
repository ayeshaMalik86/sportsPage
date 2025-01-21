import './App.css';
import Main from './pages/Main';
import Navbar from './layout/Navbar';
import './index.css';
import Footer from './layout/Footer';


function App() {
  return (
    <div className='p-3'>
      <Navbar/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;

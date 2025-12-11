import Footer from 'components/Footer/Footer';
import NavBar from 'components/navbar/NavBar';
import { CartProvider } from 'contexts/providers/cartProvider';
import './App.css';
import MainLayout from './Layout/MainLayout';

function App() {
  return (
    <div className="bg-secondary text-white p-5 text-2xl font-bold">
      <CartProvider>
        <NavBar />
        <MainLayout />
        <Footer />
      </CartProvider>
    </div>
  )
}

export default App;

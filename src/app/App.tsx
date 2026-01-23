import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import { AuthProvider } from '@/contexts/AuthContext';
import Home from '@/pages/Home';
import CommunityPage from '@/pages/products/CommunityPage';
import TradingStrategiesPage from '@/pages/products/TradingStrategiesPage';
import APIBotsPage from '@/pages/products/APIBotsPage';
import EducationPage from '@/pages/products/EducationPage';
import PONPage from '@/pages/products/PONPage';
import BusinessHubPage from '@/pages/products/BusinessHubPage';
import MarketPage from '@/pages/products/MarketPage';
import BondPage from '@/pages/products/BondPage';
import ProductsOverviewPage from '@/pages/ProductsOverviewPage';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsOverviewPage />} />
          <Route path="/product/community" element={<CommunityPage />} />
          <Route path="/product/strategies" element={<TradingStrategiesPage />} />
          <Route path="/product/bots" element={<APIBotsPage />} />
          <Route path="/product/education" element={<EducationPage />} />
          <Route path="/product/pon" element={<PONPage />} />
          <Route path="/product/businesshub" element={<BusinessHubPage />} />
          <Route path="/product/market" element={<MarketPage />} />
          <Route path="/product/bond" element={<BondPage />} />
        </Routes>
        <Toaster position="bottom-right" theme="dark" />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
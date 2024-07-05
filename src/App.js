import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homePage/homePage';
import TermsAndCondition from './pages/about/termsCondition/termsCondition';
import CorporateCabServicesTable from './pages/services/corporate/corporate';
import OutStationCabServicesTable from './pages/services/outStation/outStation';
import './App.css';
function App() {
  return (
    <div className='app'>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about/termsandconditions" element={<TermsAndCondition />} />
        <Route path="/services/corporatecabservices" element={<CorporateCabServicesTable />} />
        <Route path="/services/outstationcabservices" element={<OutStationCabServicesTable />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

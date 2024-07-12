import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homePage/homePage';
import TermsAndCondition from './pages/about/termsCondition/termsCondition';
import CorporateCabServicesTable from './pages/services/corporate/corporate';
import OutStationCabServicesTable from './pages/services/outStation/outStation';
import EmployeeCabServicesTable from './pages/services/employeecab/employeeCabService';
import PhotoGallery from './pages/gallery/photoGallery/photogallery';
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
        <Route path='/services/employeecabservices' element={<EmployeeCabServicesTable/>}/>
        <Route path="gallery/photogallery" element={<PhotoGallery/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

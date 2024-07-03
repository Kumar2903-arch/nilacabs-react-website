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

//  <BrowserRouter>
//   <Routes>
//     <Route path="/" element={<HomePage />} />
//     <Route path="/slideimage" element={<SlideImage />} />
//     <Route path="/about" element={<MenuAboutUs />}>
//       <Route path="/about/termsandconditions" element={<TermsAndCondition />} />
//     </Route>
//     <Route path="/services" element={<OurServices />} />
//     <Route
//       path="/services/corporatecabservices"
//       element={<CorporateCabServices />}
//     />
//     <Route
//       path="/services/outstationcabservices"
//       element={<OutStationCabServices />}
//     />
//     <Route path="/ourfleet" element={<OurFleet />} />
//     <Route path="/animatedcounter" element={<AnimatedCounter />} />
//     <Route path="/clients" element={<Clients />} />
//     <Route path="/contact" element={<Contact />} />
//   </Routes>
// </BrowserRouter>;

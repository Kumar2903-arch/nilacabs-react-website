// import Table from 'react-bootstrap/Table';
import './outStation.css';
import { Container } from 'react-bootstrap';

export default function OutStationCabServicesTable() {
  return (
    <Container className='table_page'>
    <table striped="columns" className='align'>
      <thead>
        <tr>
            <th colSpan={9} className='color-1'>Outstation Rent Trip</th>
        </tr>
        <tr>
          <th className='color-2'>#</th>
          <th className='color-2'>Vehicle Type</th>
          <th>
         <th colSpan={2} className='color-2'>Per Kilometre Charges</th> 
         <tr className='color-2'>
            <th className='color-2'>AC</th>
            <th className='color-2'>Non-AC</th>
         </tr>
         </th>
         <th className='color-2'>Driver Betta</th>
        </tr>
      </thead>
      {/* Tbody */}
      <tbody>
        {/* row - 1 */}
       <tr>
        <td>1</td>
        <td>SEDAN</td>
        <td>
            <td>16</td>
            <td>NA</td>
        </td>
        <td rowSpan={4}>900</td>
       </tr>

       {/* row -2  */}
       <tr>
       <td>2</td>
        <td>SUV</td>
        <td>
            <td>20</td>
            <td>NA</td>
        </td>
       </tr>

        {/* row -3  */}
        <tr>
        <td>3</td>
        <td>INNOVA CRYSTA</td>
        <td>
            <td>24</td>
            <td>NA</td>
        </td>
       </tr>

        {/* row -4  */}
        <tr>
       <td>4</td>
        <td>TEMPO TRAVELLER</td>
        <td>
            <td>26</td>
            <td>NA</td>
        </td>
       </tr>
      </tbody>
    </table>
    </Container>
  );
}


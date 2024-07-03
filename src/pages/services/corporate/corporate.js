import './corporate.css';

export default function CorporateCabServicesTable() {
  return (
    <section className='table_page'>
    <table className='align'>
      <thead>
        <tr>
            <th colSpan={9}  className='color-1'>Local Day Rent Trip</th>
        </tr>
        <tr>
          <th>#</th>
          <th>Cab Type</th>
          <th>
         <th colSpan={2}>4 Hrs./40 kms</th> 
         <tr>
            <th>AC</th>
            <th>Non-AC</th>
         </tr>
         </th>
         <th>
         <th colSpan={2}>8 Hrs./80 kms</th> 
         <tr>
            <th>AC</th>
            <th>Non-AC</th>
         </tr>
         </th>
         <th>
          <th colSpan={2}>Extra kms</th> 
         <tr>
            <th>AC</th>
            <th>Non-AC</th>
         </tr>
         </th>
         <th>
         <th colSpan={2}>Extra Per Hour</th> 
         <tr>
            <th>AC</th>
            <th>Non-AC</th>
         </tr>
         </th>
        </tr>
      </thead>
      {/* Tbody */}
      <tbody>
        {/* row - 1 */}
       <tr>
        <td>1</td>
        <td>SEDAN</td>
        <td>
            <td>1400</td>
            <td>NA</td>
        </td>
        <td>
            <td>2800</td>
            <td>NA</td>
        </td>
        <td>
            <td>16</td>
            <td>NA</td>
        </td>
        <td>
            <td>400</td>
            <td>NA</td>
        </td>
       </tr>

       {/* row -2  */}
       <tr>
       <td>2</td>
        <td>SUV</td>
        <td>
            <td>2000</td>
            <td>NA</td>
        </td>
        <td>
            <td>4000</td>
            <td>NA</td>
        </td>
        <td>
            <td>20</td>
            <td>NA</td>
        </td>
        <td>
            <td>600</td>
            <td>NA</td>
        </td>
       </tr>

        {/* row -3  */}
        <tr>
       <td>3</td>
        <td>INNOVA CRYSTA</td>
        <td>
            <td>2400</td>
            <td>NA</td>
        </td>
        <td>
            <td>4800</td>
            <td>NA</td>
        </td>
        <td>
            <td>24</td>
            <td>NA</td>
        </td>
        <td>
            <td>750</td>
            <td>NA</td>
        </td>
       </tr>

        {/* row -4  */}
        <tr>
       <td>4</td>
        <td>TEMPO TRAVELLER</td>
        <td>
            <td>2700</td>
            <td>NA</td>
        </td>
        <td>
            <td>5400</td>
            <td>NA</td>
        </td>
        <td>
            <td>26</td>
            <td>NA</td>
        </td>
        <td>
            <td>900</td>
            <td>NA</td>
        </td>
       </tr>
      </tbody>
    </table>
    </section>
  );
}


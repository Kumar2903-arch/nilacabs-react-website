import React from 'react';
import './corporate.css';

export default function CorporateCabServicesTable() {
  return (
    <section className="corp_table_page">
      <table className="corp_align">
        <thead>
          <tr>
            <th colSpan={10} className="color-1">
              Local Day Rent Trip
            </th>
          </tr>
          <tr className='color-2'>
            <th rowSpan={2}>#</th>
            <th rowSpan={2}>Cab Type</th>
            <th colSpan={2}>4 Hrs./40 Kms</th>
            <th colSpan={2}>8 Hrs./80 Kms</th>
            <th colSpan={2}>Extra Kms</th>
            <th colSpan={2}>Extra Per Hour</th>
          </tr>
          <tr className='color-2'>
            <th>Non-AC</th>
            <th>AC</th>
            <th>Non-AC</th>
            <th>AC</th>
            <th>Non-AC</th>
            <th>AC</th>
            <th>Non-AC</th>
            <th>AC</th>
          </tr>
        </thead>
        <tbody>
          {/* row - 1 */}
          <tr>
            <td>1</td>
            <td>SEDAN</td>
            <td>NA</td>
            <td>1400</td>
            <td>NA</td>
            <td>2800</td>
            <td>NA</td>
            <td>16</td>
            <td>NA</td>
            <td>400</td>
          </tr>

          {/* row - 2 */}
          <tr>
            <td>2</td>
            <td>SUV</td>
            <td>NA</td>
            <td>2200</td>
            <td>NA</td>
            <td>4400</td>
            <td>NA</td>
            <td>20</td>
            <td>NA</td>
            <td>600</td>
          </tr>

          {/* row - 3 */}
          <tr>
            <td>3</td>
            <td>INNOVA CRYSTA</td>
            <td>NA</td>
            <td>2600</td>
            <td>NA</td>
            <td>5200</td>
            <td>NA</td>
            <td>24</td>
            <td>NA</td>
            <td>750</td>
          </tr>

          {/* row - 4 */}
          <tr>
            <td>4</td>
            <td>TEMPO TRAVELLER</td>
            <td>NA</td>
            <td>3000</td>
            <td>NA</td>
            <td>6000</td>
            <td>NA</td>
            <td>26</td>
            <td>NA</td>
            <td>900</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

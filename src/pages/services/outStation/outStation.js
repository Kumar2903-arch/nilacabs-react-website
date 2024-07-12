import React from 'react';
import './outStation.css';

export default function OutStationCabServicesTable() {
  return (
    <section className="out_table_page">
      <table className="out_align">
        <thead>
          <tr>
            <th colSpan={6} className="color-1">
              Outstation Rent Trip
            </th>
          </tr>
          <tr className='color-2'>
            <th rowSpan={2}>#</th>
            <th rowSpan={2}>Vehicle Type</th>
            <th colSpan={2}>Per Kilometre Charges</th>
            <th rowSpan={2}>Driver Beta</th>
            <th rowSpan={2}>Extra Charges</th>
          </tr>
          <tr className='color-2'>
            <th>AC</th>
            <th>Non-AC</th>
          </tr>
        </thead>
        <tbody>
          {/* row - 1 */}
          <tr>
            <td>1</td>
            <td>SEDAN</td>
            <td>16</td>
            <td>NA</td>
            <td rowSpan={4}>900</td>
            <td rowSpan={4}>Toll Charges</td>
          </tr>

          {/* row - 2 */}
          <tr>
            <td>2</td>
            <td>SUV</td>
            <td>22</td>
            <td>NA</td>
          </tr>

          {/* row - 3 */}
          <tr>
            <td>3</td>
            <td>INNOVA CRYSTA</td>
            <td>24</td>
            <td>NA</td>
          </tr>
          <tr>
            <td>3</td>
            <td>TT</td>
            <td>26</td>
            <td>NA</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

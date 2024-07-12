import React from 'react';
import './employee.css';

export default function EmployeeCabServicesTable() {
  return (
    <section className="emp_table_page">
      <table className="emp_align">
        <thead>
          <tr>
            <th colSpan={12} className="color-1">
              Employee Transport Service
            </th>
          </tr>
          <tr className='color-2'>
            <th rowSpan={2}>#</th>
            <th rowSpan={2}>Vehicle Type</th>
            <th colSpan={2}>Slab 1 (0 to 15 Kms)</th>
            <th colSpan={2}>Slab 2 (16 to 30 Kms)</th>
            <th colSpan={2}>Slab 3 (31 to 40 Kms)</th>
            <th colSpan={2}>Slab 4 (41 to 50 Kms)</th>
            <th colSpan={2}>Extra Per Km</th>
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
            <th>Non-AC</th>
            <th>AC</th>
          </tr>
        </thead>
        <tbody>
          {/* row - 1 */}
          <tr>
            <td>1</td>
            <td>SEDAN</td>
            <td>650</td>
            <td>750</td>
            <td>850</td>
            <td>950</td>
            <td>950</td>
            <td>110</td>
            <td>1100</td>
            <td>1300</td>
            <td>14</td>
            <td>15</td>
          </tr>

          {/* row - 2 */}
          <tr>
            <td>2</td>
            <td>SUV</td>
            <td>800</td>
            <td>900</td>
            <td>1000</td>
            <td>1250</td>
            <td>1250</td>
            <td>1400</td>
            <td>1450</td>
            <td>1600</td>
            <td>18</td>
            <td>20</td>
          </tr>

          {/* row - 3 */}
          <tr>
            <td>3</td>
            <td>TEMPO TRAVELLER</td>
            <td>1000</td>
            <td>1250</td>
            <td>1400</td>
            <td>1475</td>
            <td>1500</td>
            <td>2000</td>
            <td>1700</td>
            <td>2500</td>
            <td>24</td>
            <td>25</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}




import React from "react";

function EnamelForm() {
  return (
    <div className="overflow-x-auto">
      <table className="table text-center">
        {/* head */}
        <thead>
          <tr>
            <th>Puesto</th>
            <th>Recibido</th>
            <th>Procesado</th>
            <th>Recibido</th>
            <th>Procesado</th>
            <th>Recibido</th>
            <th>Procesado</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <th>Batea</th>
            <td>06:00</td>
            <td>09:45</td>
            <td>09:45</td>
            <td>12:25</td>
            <td>12:25</td>
            <td>15:30</td>
          </tr>
          {/* row 2 */}
          <tr>
            <th>Soplete azul</th>
            <td>06:00</td>
            <td>09:45</td>
            <td>09:45</td>
            <td>12:25</td>
            <td>12:25</td>
            <td>15:30</td>
          </tr>
          {/* row 3 */}
          <tr>
            <th>Soplete bk/negro</th>
            <td>06:00</td>
            <td>09:45</td>
            <td>09:45</td>
            <td>12:25</td>
            <td>12:25</td>
            <td>15:30</td>
          </tr>
          {/* row 4 */}
          <tr>
            <th>Soplete blanco</th>
            <td>06:00</td>
            <td>09:45</td>
            <td>09:45</td>
            <td>12:25</td>
            <td>12:25</td>
            <td>15:30</td>
          </tr>
          {/* row 5 */}
          <tr>
            <th>Serigrafia</th>
            <td>06:00</td>
            <td>09:45</td>
            <td>09:45</td>
            <td>12:25</td>
            <td>12:25</td>
            <td>15:30</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default EnamelForm;

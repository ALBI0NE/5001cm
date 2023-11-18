import React from "react";
import "../css_for_components/assignments.css";

export default function Assignments() {
  return (
    <div className='a-wrapper'>
      <div className='aa-wrapper'>
        <div className='assignments-wrapper'>
          <h2>Your Assignments</h2>
          <table className='assignments-table'>
            <thead>
              <tr>
                <th>Class</th>
                <th>Assignment Name</th>
                <th>Due Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Class 1</td>
                <td>Assignment 1</td>
                <td>15/11/2023</td>
                <td>In Progress</td>
              </tr>
              <tr>
                <td>Class 2</td>
                <td>Assignment 2</td>
                <td>15/12/2023</td>
                <td>Not Started</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

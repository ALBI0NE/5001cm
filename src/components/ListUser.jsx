import React, { useEffect, useState } from "react";

import "../css_for_components/listsusers.css";

export default function ListUser() {
  const handleRoleChange = (userId, newRoleId) => {
    fetch(`http://127.0.0.1:5000/update-role/${userId}`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ newRoleID: newRoleId }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          // Update the users state to reflect the role change
          const updatedUsers = users.map((user) =>
            user.userID === userId ? { ...user, roleID: newRoleId } : user
          );
          setUsers(updatedUsers);
        } else {
          console.error("Error updating role");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const [users, setUsers] = useState([]);
  const [availableRoles, setAvailableRoles] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/get-allusers", {
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        if (!Array.isArray(data.error)) {
          setUsers(data);
        } else {
          console.error("Error fetching users");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    fetch("http://127.0.0.1:5000/get-roles", {
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        setAvailableRoles(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <>
      <div className='set-wrapper'>
        <div className='set-header'>
          <h1>This is a list of all users in the database:</h1>
          <p>
            You can assign their roles by clicking selecting roles from dropdown
            menu:
          </p>
        </div>
        <div>
          <div className='set-table'>
            <table className=''>
              <thead>
                <tr>
                  <th>UserID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Username</th>
                  <th>Role</th>
                  <th>DOB</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.userID} className='set-rows'>
                    <td>{user.userID}</td>
                    <td>
                      {user.fName} {user.lName}
                    </td>
                    <td>{user.email}</td>
                    <td>{user.username || "N/A"}</td>
                    <td>
                      <select
                        value={user.roleID}
                        onChange={(e) =>
                          handleRoleChange(user.userID, e.target.value)
                        }
                      >
                        {availableRoles.map((role) => (
                          <option key={role.roleID} value={role.roleID}>
                            {role.roleName}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td>{user.dob}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

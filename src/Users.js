import React from "react";
import { useEffect, useState } from "react";
import Table from "./appcomponent/Table"

function Users(props) {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/users")
      .then((response) => response.json())
      .then((response) => {
        const { data } = response;
        console.log(data);
        setUser(data);
      });
  }, []);

  return (
      <div style={{display:'flex',justifyContent:'center',marginTop:'30px'}}>
          <Table data={ user}/>
        
  
    </div>
  );
}

export default Users;

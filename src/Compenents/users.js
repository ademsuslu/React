import { useState, useEffect } from "react";
import axios from "axios";
function Data() {
  const [users, setUsers] = useState([]);
  const [login, setLogin] = useState(true);
  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then((users) => setUsers(users.data))
      .finally(() => setLogin(false));

    console.log(users);
  }, []);

  return (
    <div>
      {login && <h2 style={{ color: "red" }}>Loading...</h2>}
      {users.map((user) => {
        return (
          <h2 style={{ color: "yellow" }} key={user.id}>
            {user.id}. {user.name}
          </h2>
        );
      })}
    </div>
  );
}

export default Data;

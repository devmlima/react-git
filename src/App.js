import "./App.css";
import React from "react";

import CardUser from "./Pages/CardUser/CardUser";
import FilterUser from "./Pages/FilterUser/FilterUser";

function App() {
  const [user, setUser] = React.useState(null);
  const [nameUser, setNameUser] = React.useState("");
  const [search, setSearch] = React.useState(true);

  return (
    <section className="container">
      <CardUser
        user={user}
        nameUser={nameUser}
        setSearch={(value) => setSearch(value)}
      />

      {search && (
        <FilterUser
          setUser={(value) => setUser(value)}
          setNameUser={(value) => setNameUser(value)}
        />
      )}
    </section>
  );
}

export default App;

import React from "react";

import { TextField } from "@material-ui/core";
import { apiGit } from "../../Shared/Consts";
import { Button } from "@material-ui/core";

function FilterUser({ setUser, setNameUser }) {
  const [text, setText] = React.useState("");
  const handleSearchUser = () => {
    setNameUser(text);
    fetch(`${apiGit}/users/${text}`)
      .then((response) => response.json())
      .then((json) => {
        setUser(json);
      });
  };

  return (
    <div className="filtro">
      <TextField
        onChange={(txt) => setText(txt.target.value)}
        placeholder="Buscar usuário"
      />
      <Button
        onClick={handleSearchUser}
        disabled={text === ""}
        size="large"
        variant="contained"
        color="primary"
      >
        OK
      </Button>
    </div>
  );
}

export default FilterUser;

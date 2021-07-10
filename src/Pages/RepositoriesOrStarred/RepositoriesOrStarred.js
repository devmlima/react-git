import { Button } from "@material-ui/core";
import { Card, CardActionArea, CardContent } from "@material-ui/core";
import React from "react";
import { apiGit } from "../../Shared/Consts";

function RepositoriesOrStarred({ nameUser, type, handleSearch }) {
  const [repos, setRepos] = React.useState([]);

  React.useEffect(() => {
    if (nameUser && type) {
      fetch(`${apiGit}/users/${nameUser}/${type}`)
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          setRepos(json);
        });
    }
  }, [nameUser, type]);

  return (
    <>
      {repos && (
        <div className="viewRepos">
          <div className="repos">
            {repos.map((r) => {
              return (
                <Card>
                  <CardActionArea>
                    <CardContent>
                      <h4>{r.name}</h4>
                      <span>{r.description}</span>
                    </CardContent>
                  </CardActionArea>
                </Card>
              );
            })}
          </div>
          <div className="close">
            <Button
              variant="contained"
              color="secondary"
              onClick={handleSearch}
            >
              X
            </Button>
          </div>
        </div>
      )}
      {!repos && <div>Carregando...</div>}
    </>
  );
}

export default RepositoriesOrStarred;

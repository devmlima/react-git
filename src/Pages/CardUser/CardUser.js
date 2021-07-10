import {
  Card,
  CardActionArea,
  CardContent,
  CardActions,
  Button,
} from "@material-ui/core";

import React from "react";
import RepositoriesOrStarred from "../RepositoriesOrStarred/RepositoriesOrStarred";

function CardUser({ user, nameUser, setSearch }) {
  const [repositoriesOrStarred, setRepositoriesOrStarred] =
    React.useState(false);
  const [type, setType] = React.useState("");

  const handleRepositores = () => {
    setRepositoriesOrStarred(true);
    setType("repos");
    setSearch(false);
  };

  const handleStarred = () => {
    setRepositoriesOrStarred(true);
    setType("starred");
    setSearch(false);
  };

  const handleSearch = () => {
    setSearch(true);
    setRepositoriesOrStarred(false);
  };

  return (
    <div className="containerCard">
      <div>
        {user ? (
          <div>
            <Card className="card">
              <CardActionArea>
                <CardContent>
                  <h4>{user.name || user.login}</h4>
                  <span>{user.bio}</span>
                  <br />
                  <ul style={{ listStyle: "none" }}>
                    {user.location && (
                      <li>
                        Reside em: <strong>{user.location}</strong>
                      </li>
                    )}
                    <li>
                      Followers: <strong>{user.followers}</strong>
                    </li>
                    <li>
                      Following: <strong>{user.following}</strong>
                    </li>
                    <li>
                      Quantidade de repositórios:{" "}
                      <strong>{user.public_repos}</strong>
                    </li>
                  </ul>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleRepositores}
                    color="primary"
                  >
                    Repositories
                  </Button>
                </div>

                <div>
                  <Button
                    variant="contained"
                    onClick={handleStarred}
                    color="primary"
                  >
                    Starred
                  </Button>
                </div>
              </CardActions>
            </Card>
          </div>
        ) : null}
      </div>
      <div className="view">
        {repositoriesOrStarred && (
          <RepositoriesOrStarred
            nameUser={nameUser}
            type={type}
            handleSearch={handleSearch}
          />
        )}
      </div>
    </div>
  );
}

export default CardUser;

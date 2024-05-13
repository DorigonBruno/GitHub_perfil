import { useEffect, useState } from "react";

import styles from "./ReposList.module.css";

const RepoList = ({ nomeUsuario }) => {
  const [repos, setRepos] = useState([]);
  const [carregando, setCarregando] = useState(false);

  useEffect(() => {
    setCarregando(true);
    fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
      .then((response) => response.json())
      .then((responseJson) => {
        setTimeout(() => {
          setCarregando(false);
          setRepos(responseJson);
        }, 3000);
      });
  }, [nomeUsuario]);

  return (
    <div className="container">
      {carregando ? (
        <h1>Carregando...</h1>
      ) : (
        <ul className={styles.list}>
          {repos.map((item) => {
            return (
              <li className={styles.listItem} key={item.id}>
                <div className={styles.itemName}>
                  <b>Nome:</b> {item.name}
                </div>
                <div className={styles.itemLanguage}>
                  <b>Linguagem:</b> {item.language}
                </div>
                <a
                  className={styles.itemLink}
                  key={item.id}
                  href={item.html_url}
                  target="_blank"
                >
                  Ver no GitHub
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default RepoList;

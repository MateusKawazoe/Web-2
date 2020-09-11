import React, { useState } from "react";
import Switch from "@material-ui/core/Switch";
import axios from "axios";
import Swal from "sweetalert2";

import "../styles/login.css";
import logo from "../assets/logo.png";

export default function Login({ history }) {
  if (localStorage.getItem("token") != null) {
    history.push("/main");
  }

  const [checked, setChecked] = useState(false);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setpasswordConfirm] = useState("");

  async function handleSign(e) {
    e.preventDefault();
    const body = {
      email: user,
      password: password,
    };

    if (user.length < 4 || password.length < 4) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Os campos devem ter pelo menos 3 caractéres!",
      });
      return
    }

    if (user !== "" && password !== "") {
      if (checked) {
        if (password === passwordConfirm) {
          await axios
            .post("https://reqres.in/api/register", body, {
              headers: {
                "Content-Type": "application/json",
              },
            })
            .then(
              async (response) => {
                localStorage.setItem("id", response.data.id);
                localStorage.setItem("token", response.data.token);
                const name = await axios.get(
                  "https://reqres.in/api/users/" + response.data.id
                );
                localStorage.setItem("name", name.data.first_name);
                localStorage.setItem("lastName", name.data.last_name);
                history.push("/main");
              },
              (error) => {
                Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text: "E-mail não existe!",
                });
              }
            );
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "As senhas não coincidem!",
          });
        }
      } else {
        await axios
          .post("https://reqres.in/api/login", body, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then(
            (response) => {
              localStorage.setItem("token", response.data.token);
              history.push("/main");
            },
            (error) => {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "E-mail não cadastrado!",
              });
            }
          );
      }

      //   localStorage.setItem('name', )
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Todos os campos devem ser preenchidos!",
      });
    }
  }

  function handleChange() {
    if (checked) {
      setChecked(false);
    } else {
      setChecked(true);
    }
  }

  return (
    <div className="login-container">
      <form>
        <img src={logo} alt="logo" className="logo"></img>
        <div>
          <p>Login</p>
          <Switch checked={checked} onChange={handleChange} color="primary" />
          <p>Cadastro</p>
        </div>
        <input
          placeholder="E-mail"
          maxLength="30"
          minLength="3"
          value={user}
          onChange={(e) => {
            setUser(e.target.value);
          }}
        />
        <input
          placeholder="Senha"
          className="password"
          maxLength="30"
          minLength="3"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        {checked ? (
          <input
            placeholder="Confirmar senha"
            className="password"
            maxLength="30"
            minLength="3"
            value={passwordConfirm}
            onChange={(e) => {
              setpasswordConfirm(e.target.value);
            }}
          />
        ) : (
          <></>
        )}
        <button onClick={handleSign}>Entrar</button>
      </form>
    </div>
  );
}

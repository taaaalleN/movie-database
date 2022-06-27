import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { FirebaseContext } from "../contexts/firebase";
import Form from "../components/form";
import * as ROUTES from "../constants/routes";

export default function SignUp() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);
  const db = firebase.firestore();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isInvalid = password === "" || email === "" || username === "";

  const handleSignUp = (event) => {
    event.preventDefault();

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        result.user
          .updateProfile({
            displayName: username,
            photoURL: Math.floor(Math.random() * 5) + 1,
          })
          .then(() => {
            db.collection("users").doc(result.user.uid).set({
              favorites: [
                // { title: "War of the Worlds", director: "Steven Spielberg", rating: "8/10" },
                // { title: "Lucy", director: "Luc Besson", rating: "6,5/10" },
              ],
            });
          })
          .then(() => {
            history.push(ROUTES.PROFILE);
          });
      })
      .catch((error) => {
        setUsername("");
        setEmail("");
        setPassword("");
        setError(error.message);
      });
  };

  return (
    <>
      <Form>
        <Form.Title>Sign Up</Form.Title>
        {error && <Form.Error>{error}</Form.Error>}
        <Form.Base onSubmit={handleSignUp} method="POST">
          <Form.Input
            placeholder="Username"
            autoComplete="off"
            value={username}
            onChange={({ target }) => setUsername(target.value)}
          />
          <Form.Input placeholder="Email" value={email} onChange={({ target }) => setEmail(target.value)} />
          <Form.Input
            type="password"
            placeholder="Password"
            autoComplete="off"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
          <Form.Submit disabled={isInvalid} type="submit">
            Sign Up
          </Form.Submit>
          <Form.Text>
            Already a user? <Form.Link to={ROUTES.SIGN_IN}>Sign in now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
          </Form.TextSmall>
        </Form.Base>
      </Form>
      <Form>
        <Form.Title>Sign up with a Google account</Form.Title>
        <Form.Submit>
          Sign up with Google
          <img src="https://img.icons8.com/ios-filled/50/000000/google-logo.png" alt="google icon" />
        </Form.Submit>
      </Form>
    </>
  );
}

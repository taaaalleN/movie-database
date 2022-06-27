import { useState, useEffect, useContext } from "react";
import { FirebaseContext } from "../contexts/firebase";

export default function useFavorites(user) {
  const { firebase } = useContext(FirebaseContext);
  const db = firebase.firestore();
  console.log("User in useFavorites", user);
  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user.uid)
        .get()
        .then((doc) => {
          console.log("Doc data", doc.data().favorites);
          return doc.data();
        })
        .catch((error) => console.log(error.message));
    }
  }, []);
  return [];
}

import { useState, useEffect, useContext } from "react";
import { FirebaseContext } from "../contexts/firebase";

export default function useAuthListener() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("authUser")));
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        localStorage.setItem("authUser", JSON.stringify(authUser));
        setUser(authUser);
      } else {
        localStorage.removeItem("authUser");
        setUser(null);
      }
    });
    return () => listener();
  }, []);

  return { user };
}

export const useCreateFavorites = (user) => {
  const { firebase } = useContext(FirebaseContext);
  const db = firebase.firestore();
};

export const useGetFavorites = (user) => {
  const { firebase } = useContext(FirebaseContext);
  const db = firebase.firestore();
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const listener = db
      .collection("users")
      .doc(user.uid)
      .get()
      .then((doc) => {
        console.log("getfavorites ", doc.data().favorites);
        setFavorites(doc.data().favorites);
      });
    return () => listener();
  }, []);
  return favorites;
};

export const useAddFavorites = (user, item) => {
  const { firebase } = useContext(FirebaseContext);
  const db = firebase.firestore();

  return db.collection("users").doc(user.uid).favorites.add({
    id: item.id,
    title: item.title,
    rating: item.vote_average,
    release: item.release_date,
    poster: item.poster_path,
  });
};

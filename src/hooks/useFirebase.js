import initializedFirebase from "../Pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
// import { Password } from "@mui/icons-material";

initializedFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});

    const auth = getAuth();

    const registerUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    }


    //observer user state

    useEffect (() => {

    const unsubscribe =    onAuthStateChanged(auth, (user) => {
            if(user){
                // const uid = user.uid;
                setUser(user);
            }else {
                setUser({});
            }
        }); 
        return () => unsubscribe;
    },[])


    const logout = () => {

        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }


    return {
        user,
        registerUser,
        logout
    }

}

export default useFirebase;
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC6iLf_gwYhAcJMLOlyLJ9X7PRo8AlXJuo",
  authDomain: "netflix-clone-7a718.firebaseapp.com",
  projectId: "netflix-clone-7a718",
  storageBucket: "netflix-clone-7a718.appspot.com",
  messagingSenderId: "601617562724",
  appId: "1:601617562724:web:6b9bed6e91fd6a6926b371"
};

const app = initializeApp(firebaseConfig);

// initialize authentication
const auth = getAuth(app)
const db = getFirestore(app)

const signUp = async(name, email, password) => {
    try{
        // created user is accessed using res
        const res = await createUserWithEmailAndPassword(auth, email, password)
        const user = res.user 
        await addDoc(collection(db, "user"),{
            uid: user.uid,
            name,
            authProvider:"local",
            email
        })
    }catch(error){
        console.log(error);
        alert(error)
    }
}


const login = async(email, password ) => {
    try{
        await signInWithEmailAndPassword(email, password)
    }catch(error){
        console.log(error);
        alert(error)
    }
}

const logOut = async() => {
    try {
        signOut(auth)
    } catch (error) {
        console.log(error);
        alert(error)
    }
}

export {auth, db, signUp, login, logOut};
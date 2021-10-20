import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from '../components/Login&Reg/Firebase/firebase.init';


initializeAuthentication();


const useFirebase = () => {

    const auth = getAuth();
    const [user, setUser] = useState({});
    const [name, setName] = useState('')
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    
    const handlePasswordChange = e => {
        if(e.target.value < 6) {
        setError("Password should be at least 6 characters.");
        return;
        }
        else{
        setPassword(e.target.value);
        }
    }

    const handleNameChange = e => {
        setName(e.target.value);
    }

    const handleRegistration = e => {

    e.preventDefault();
    // console.log(email, password, name);

    setIsLoading(true);

    createUserWithEmailAndPassword(auth, email, password)
    .then(result => {
        const {email, displayName, photoURL} = result.user;
        console.log(result.user.displayName);
        const userInfo = {
            name: displayName,
            email: email,
            photo: photoURL
        }
        updateProfile(auth.currentUser, {
            displayName: name
          }).then(() => {
            
            setUser(userInfo)
            window.location.reload()
            
          }).catch((error) => {
            
          });
       
        
        setError('');
    })
    .catch(error => {
        setError(error.message);
    })
    .finally(()=> setIsLoading(false))
    }
      
    const handleLogin = (e) => {
        
        e.preventDefault();
        console.log(email, password);
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            const {email, displayName, photoURL} = result.user;
            console.log(result.user.displayName);
            const userInfo = {
                name: displayName,
                email: email,
                photo: photoURL
            }
          setUser(userInfo);  
          window.location.reload();       
          setError('');
        })
        .catch(error => {
          setError(error.message);
        })
        .finally(()=> setIsLoading(false))
    }

    const signInUsingGoogle = () =>{
        
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider)
        .then( result =>{
            setUser(result.user);
        })
        .finally(()=> setIsLoading(false))
    }


    useEffect( () => {
        setIsLoading(true);
        const unsubscribed = onAuthStateChanged(auth, user => {
            if(user){
                setUser(user);
            }
            else{
                setUser({});
            }
            setIsLoading(false);
        })

        return () => unsubscribed;
    }, []);

    const logOut = () => {
        setIsLoading(true);
        setIsLoading(true);
        signOut(auth)
        .then( ()=>{

        })
        .finally(()=>setIsLoading(false))
    }

    return {
        user,
        error,
        email,
        password,
        name,
        isLoading,
        handleRegistration,
        handleEmailChange,
        handlePasswordChange,
        handleNameChange,
        handleLogin,
        signInUsingGoogle,
        logOut
    }
}


export default useFirebase;
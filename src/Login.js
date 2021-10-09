import React from "react";
import './css/login.css';
import { auth, Provider} from "./firebase";
import logo from './images/logo.png'
import { useStateValue } from "./StateProvider";

const Login = () => {
    const [{},dispatch] = useStateValue();
    const signIn = () => {
        auth.signInWithPopup(Provider).then(result=>{
               var credential = result.credential;

               const photoURL = `${result.user.photoURL}?access_token=${credential.accessToken}`;
               dispatch({
                   type:"SET_USER",
                   user:{
                       displayName:result.user.displayName,
                       photoURL: photoURL
                   }
               })
        }).catch(error=>console.log(error))
    }
    return (
        <>
        <div className='login_wrapper'>
        <div className='login'>
            <img src={logo} alt='img'/>
            <h2>Sign in with Facebook</h2>
            <button onClick={signIn}>Login with Facebook</button>
        </div>
            
        </div>

        </>
    );
}

export default Login;
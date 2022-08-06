import React, {useState, useRef, useContext} from "react";
import { useNavigate} from "react-router-dom";
import AuthContext from "../../Store/AuthContext";




import './AuthPage.css';



const AuthPage = () => {
    const navigate = useNavigate();
    
    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const [isLogin, setIsLogin] = useState(true)
    const [isLoading, setIsLoading] = useState(false);

    const authCntxt = useContext(AuthContext)

    const switchAuthModeHandler = () => {
     
        setIsLogin((prevState) => !prevState);
       
      };

      const onSubmitHandler = (event) =>{
        event.preventDefault();
        const emailEntered = emailInputRef.current.value;
        const passwordEntered = passwordInputRef.current.value;

        setIsLoading(true);
        let url;
        if(isLogin){
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAXN4aPG5hy16vhGOKE4P5UweHk4ImHSmA';
      
        }else{
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAXN4aPG5hy16vhGOKE4P5UweHk4ImHSmA';
        }
        fetch(
            url,
            {
                method: 'POST',
                body: JSON.stringify({
                email: emailEntered,
                password: passwordEntered,
                returnSecureToken: true,
            }),
            headers : {
                'Content-Type' : 'application/json'
            }
        })
        .then((res) => {
            setIsLoading(false);
            if (res.ok) {
              return res.json();
              
              
            } else {
              return res.json().then((data) => {
                let errorMessage = 'Authentication failed!';
                if (data && data.error && data.error.message) {
                  errorMessage = data.error.message;
                }
    
                throw new Error(errorMessage);
                
              });
            }
          })
          .then((data) => {
            
            authCntxt.login(data.idToken);
            navigate('/Store')
            
            
          })
          .catch((err) => {
            alert(err.message);
          });
         
         
    }

        
    
      



    return (
        
        <section className='auth'>
        <h1>{isLogin ? 'LOGIN' : 'SIGN UP'}</h1>
        <form onSubmit={onSubmitHandler}>
          <div className='Auth-control'>
            <label htmlFor='email'>EMAIL</label>
            <input type='email' id='email' required ref={emailInputRef} />
          </div>
          <div className='Auth-control'>
            <label htmlFor='password'>PASSWORD</label>
            <input
              type='password'
              id='password'
              required
              ref={passwordInputRef}
            />
          </div>
          <div className='actions'>
            {!isLoading && (
                
              <button >{isLogin ? 'LOGIN' : 'CREATE ACCOUNT'} </button>
              
           )} 
             {isLoading && <p>Sending request...</p>} 
            
            <button
              type='button'
              className="toggle"
              onClick={switchAuthModeHandler}
            >
              {isLogin ? 'Create new account' : 'Login with existing account'}
             
            </button>
          </div>
        </form>
      </section>
    
        ) 

}

export default AuthPage;
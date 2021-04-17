import React, { useEffect, useState } from 'react';


const GAuth = () => {
    const [auth, setAuth] = useState(null);
    const [isSignedIn, setSignedIn] = useState(null);

    useEffect(()=>{
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '120407185805-pocds6c5807qppjh4qabn9gn8o83g21q.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                setAuth(window.gapi.auth2.getAuthInstance());
                if (auth) {
                    setSignedIn(auth.isSignedIn.get());
                    // to handle the signout even if from browser-console
                    auth.isSignedIn.listen(() => setSignedIn(auth.isSignedIn.get()));
                }
            })
        });
    }, [isSignedIn]);
    
    // to handle the signout even if from browser-console
    // const onAuthChange = () => {
    //     setSignedIn(auth.isSignedIn.get());
    // }

    const renderAuthButton = () => {
       if (isSignedIn === true) {
            return (
                <button className="ui red google button" onClick={() => auth.signOut()}>
                    <i className="google icon" />
                    Sign Out
                </button>
            )
        } else {
            return (
                <button className="ui green google button" onClick={()=> auth.signIn()}>
                    <i className="google icon" />
                    Sign In with Google
                </button>
            )
        }
    }
    // console.log(auth);
    return (
        <div className="item">
            {renderAuthButton()}
        </div>
    );
};

export default GAuth;
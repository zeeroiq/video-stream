import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

const GAuth = props => {

    const [auth, setAuth] = useState(null);
    // const [isSignedIn, setSignedIn] = useState(false);

    useEffect(()=>{
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '120407185805-pocds6c5807qppjh4qabn9gn8o83g21q.apps.googleusercontent.com',
                scope: 'email'
            })
            .then(() => {    
                setAuth(window.gapi.auth2.getAuthInstance());
                onAuthChange(auth.isSignedIn.get());
                // to handle the signout even if from browser-console
                auth.isSignedIn.listen(onAuthChange);
                // if (auth) {
                //     onAuthChange(auth.isSignedIn.get());
                //     // to handle the signout even if from browser-console
                //     auth.isSignedIn.listen(onAuthChange());
                // }
            })
        });
    }, []);

    // to handle the signout even if from browser-console
    const onAuthChange = isSignedIn => {
        isSignedIn ? props.signIn(auth.currentUser.get().getId()) : props.signOut();
    }

    const renderAuthButton = () => {
       if (props.isSignedIn === true) {
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

const mapStateToProps = state => {
    return {
        isSignedIn: state.auth.isSignedIn
    };
};

export default connect(mapStateToProps, { signIn, signOut }) (GAuth);
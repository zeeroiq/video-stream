import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GAuth extends React.Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '120407185805-pocds6c5807qppjh4qabn9gn8o83g21q.apps.googleusercontent.com',
                scope: 'email'
            })
            .then(() => {    
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
                
            })
        });
    }

    onAuthChange = isSignedIn => {
        if(isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut();
        }
    }

    renderAuthButton = () => {
        if(this.props.isSignedIn == null) {
            return null;
        }
        else if (this.props.isSignedIn === true) {
             return (
                 <button className="ui red google button" onClick={() => this.auth.signOut()}>
                     <i className="google icon" />
                     Sign Out
                 </button>
             );
         } else {
             return (
                 <button className="ui green google button" onClick={()=> this.auth.signIn()}>
                     <i className="google icon" />
                     Sign In with Google
                 </button>
             );
         }
     }

     render(){
         return (
            <div className="item">
                {this.renderAuthButton()}
            </div>
         );
     };

}
const mapStateToProps = state => {
    return {
        isSignedIn: state.auth.isSignedIn
    };
};

export default connect(mapStateToProps, { signIn, signOut }) (GAuth);
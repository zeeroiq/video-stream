import React from 'react';
import Modal from '../../Modal';
import history from '../../history';
import { Link } from 'react-router-dom';

class StreamDelete extends React.Component {
    

    renderContent() {
        return (
            <>
                <div>Title : {this.props.title}</div>
                <div>Description : {this.props.description}</div>
                <br/>
                <div>Are you sure, you want to delete this stream</div>
            </>
        );
    }

    renderActions() {
        return (
            <>
                <button className="ui negative button">Delete</button>
                <Link to="/" className="ui button">Cancel</Link>
                    
            </>
        );
    }
    render(){
        return (
            <div>
                <Modal 
                    title='Delete Stream'
                    content={ this.renderContent() }
                    actions={ this.renderActions() }
                    onDismiss= { () => history.push('/') }
                />
            </div>
        );
    }
        
}


export default StreamDelete;
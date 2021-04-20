import React from 'react';
import Modal from '../../Modal';
import history from '../../history';
import { Link } from 'react-router-dom';
import { fetchStream, deleteStream } from '../../actions';
import { connect } from 'react-redux';

class StreamDelete extends React.Component {
    
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    renderContent() {
        if (!this.props.stream) {
            return 'Are you sure you want to delete this stream?';
        }

        return (
            <>
                <div>Title : {this.props.stream.title}</div>
                <div>Description : {this.props.stream.description}</div>
                <br/>
                <div>Are you sure, you want to delete this stream</div>
            </>
        );
    }

    renderActions() {
        return (
            <>
                <button onClick={ () => this.props.deleteStream(this.props.match.params.id) } className="ui negative button">Delete</button>
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

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);
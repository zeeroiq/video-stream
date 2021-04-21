import React from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';
import flv from 'flv.js'

class StreamShow extends React.Component{
    
    constructor(props) {
        super(props);
        this.videoRef = React.createRef();
    }
    componentDidMount() {
        const { id } = this.props.match.params.id;
        this.props.fetchStream(id);
        this.player = flv.createPlayer({
            type: 'flv',
            url: `http://localhost:8000/${id}.flv`
        });
        this.player.attachMediaElement(this.videoRef.current);
        this.player.load();
    }

    render(){
        if(!this.props.stream) {
            return (
                <div>Loading...</div>
            )
        }
        return (
            <div>
                <video ref={ this.videoRef } style={{width: '100%'}} controls />
                <h1>{this.props.stream.title}</h1>
                <h5>{this.props.stream.description}</h5>
            </div>
        );
    };
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    }
}
export default connect(mapStateToProps, { fetchStream })(StreamShow);
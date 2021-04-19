import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component {

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    onSubmit = formValues =>{
        this.props.editStream(formValues);
    }

    render() {
        if (!this.props.stream) {
            return (
                <div>
                    Loading...
                </div>
            );
        }

        return (
            <div>
                <StreamForm initialValues={{title: this.props.stream.title, description: this.props.stream.description}} onSubmit={this.onSubmit} />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    }
}
export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);
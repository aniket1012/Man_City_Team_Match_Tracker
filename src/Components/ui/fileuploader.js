import React, { Component } from 'react';
import { firebase } from '../../firebase'
import FileUploader from 'react-firebase-file-uploader'
import CircularProgress from '@material-ui/core/CircularProgress'

class Fileuploader extends Component {


    state = {
        name: '',
        isUploading: false,
        fileURL: '',

    }

    static getDerivedStateFromProps(props, state) {
        if(props.defaultImg) {
            return state = {
                name: props.defaultImgName,
                fileURL: props.defaultImg 
            }
        }
        return null
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default Fileuploader;
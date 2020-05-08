import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress'

import { firebaseMatches } from '../../firebase'
import {firebaseLooper, reverseArray } from '../ui/misc'


class TheMatches extends Component {

    state = {
        loading: true,
        matches: [],
        filteredMatches: [],
        playerFilter: 'All',
        resultFilter: 'All'
    }

    componentDidMount() {
        firebaseMatches.once('value').then((snapshot)=> {
            const matches = firebaseLooper(snapshot)

            this.setState({
                loading: false,
                matches: reverseArray(matches),
                filteredMatches: reverseArray(matches)
            })
        })
    }

    render() {

        console.log(this.state);
        
        return (
            <div>
                the TheMatches
            </div>
        );
    }
}

export default TheMatches;
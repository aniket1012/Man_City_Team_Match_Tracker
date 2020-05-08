import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress'
import LeagueTable from './table'

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

        const state = this.state
        
        return (
            
            <div className='the_matches_container'>
                <div className='the_matches_wrapper'>
                    <div className='left'>

                    </div>
                    <div className='right'>
                        <LeagueTable/>
                    </div>
                </div>
            </div>
        );
    }
}

export default TheMatches;
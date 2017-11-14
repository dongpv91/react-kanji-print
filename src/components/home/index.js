import React, { Component, PropTypes } from 'react';
import KanjiSelectBox from './kanjiSelectBox'
import Content from './content'

class Home extends Component {
    render() {
        return (
            <div>
                <KanjiSelectBox/>
                <Content/>
            </div>
        )
    }
}

export default Home;
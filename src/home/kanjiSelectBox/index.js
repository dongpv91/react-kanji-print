import React, { Component, PropTypes } from 'react';


import CategoryBox from './categoryBox'

class KanjiSelectBox extends Component {
    render() {
        return (
            <div id="kanjiSelectionBox">
                <div className="categoryBox">
                    <div className="settings">
                        <button className="kanjiSubmit">Go</button> <input type="text" placeholder="Search Kanji" className="kanjiSearch"/>
                        <div className="kanjiStrokes">
                            <span>Strokes:</span> <span className="strokeToggle">&nbsp;</span>
                        </div>
                    </div>
                    <div className="settings-content">
                    </div>
                </div>
                <CategoryBox level={5} />
                <CategoryBox level={4} />
                <CategoryBox level={3} />
                <CategoryBox level={2} />
                <CategoryBox level={1} />
            </div>
        );
    }
}

export default KanjiSelectBox;
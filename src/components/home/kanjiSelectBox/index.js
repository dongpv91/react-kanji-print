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
                {/*<div className="categoryBox" data-category="wanikani">*/}
                    {/*<h2 className="category">Wani Kani</h2>*/}
                    {/*<div className="category-content">*/}
                        {/*<div className="wanikaniContent">*/}
                            {/*<p>Grab kanji from your <a href="http://www.wanikani.com">WaniKani</a> account! Just paste in your API Key from the <a href="https://www.wanikani.com/account"> Account</a> page.</p>*/}
                            {/*<input type="text" placeholder="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" className="inputWaniKaniUser"/>*/}
                            {/*<button className="submitWaniKaniUser">Sync</button>*/}
                            {/*<p>API Key is not saved or shared.</p>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                {/*</div>*/}
            </div>
        );
    }
}

export default KanjiSelectBox;
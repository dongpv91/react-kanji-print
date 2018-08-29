import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';

import {selectKanji, selectLevel} from './actions'

class CategoryBox extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    const {level, selectedLevel, kanjiList, selectLevel} = this.props;
    return (
      <div className="categoryBox" data-category={"jlptn" + level}>
        <h2 className="category" onClick={() => selectLevel(level)}>JLPT N{level}</h2>
        <div className={"category-content " + (level === selectedLevel ? "expand" : "")}>
          {
            kanjiList.map((kanji, index) =>
              <div className="kanji-box" key={index} onClick={() => selectKanji(kanji.character)}>
                {kanji.character}
              </div>
            )
          }
        </div>
      </div>
    );
  }
}

CategoryBox.propTypes = {
  level: PropTypes.number,
  selectedLevel: PropTypes.number,
  selectLevel: PropTypes.func,
  selectKanji: PropTypes.func,
  kanjiList: PropTypes.arrayOf(PropTypes.object)
};


const mapStateToProps = (state, owrProps) => {
  let kanjiList = state.data.filter((kanji) => kanji.category === "jlptn" + owrProps.level);

  return {
    kanjiList,
    selectedLevel: state.selectedLevel
  }
};

const mapDispatchToProps = (dispatch, owrProps) => {
  return {
    selectLevel: (level) => dispatch(selectLevel(level)),
    selectKanji: (kanji) => dispatch(selectKanji(kanji))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryBox);
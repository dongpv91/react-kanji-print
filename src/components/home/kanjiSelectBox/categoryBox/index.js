import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { selectLevel } from '../../../../actions/selectedLevel'

class CategoryBox extends Component {


    render() {
        const { level, selectedLevel, selectLevel } = this.props;
        return (
            <div className="categoryBox" data-category={"jlptn" + level}>
                <h2 className="category" onClick={() => selectLevel(level)}>JLPT N{level}</h2>
                <div className={"category-content " + (level === selectedLevel ? "expand" : "")}>
                </div>
            </div>
        );
    }
}

CategoryBox.propTypes = {
    level: PropTypes.number,
    selectedLevel: PropTypes.number,
    selectLevel: PropTypes.func
};


const mapStateToProps = (state, owrProps) => {
    return {
        selectedLevel: state.selectedLevel
    }
};

const mapDispatchToProps = (dispatch, owrProps) => {
    return {
        selectLevel: (level) => dispatch(selectLevel(level))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryBox);
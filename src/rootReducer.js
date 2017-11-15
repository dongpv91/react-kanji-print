import { combineReducers } from 'redux'

import * as categoryBox from './home/kanjiSelectBox/categoryBox/reducer'
import * as kanjiSelectBox from './home/kanjiSelectBox/reducer'

export default combineReducers({
        selectedLevel: categoryBox.selectedLevel,
        data: kanjiSelectBox.data,
});


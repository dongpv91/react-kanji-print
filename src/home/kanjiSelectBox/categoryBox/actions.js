import * as t from './actionTypes';

export function selectLevel(level) {
    return {
        type: t.SELECT_LEVEL,
        level
    };
}
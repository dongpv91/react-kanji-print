export const SELECT_LEVEL = 'SELECT_LEVEL';

export function selectLevel(level) {
    return {
        type: SELECT_LEVEL,
        level,
    };
}
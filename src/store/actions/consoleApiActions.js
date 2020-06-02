export const CHANGE_GLUTTER = 'CHANGE_GLUTTER';

export const changeGlutter = (size) => ({
  type: CHANGE_GLUTTER,
  payload: {
    size,
  },
});

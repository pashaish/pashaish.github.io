export const CHANGE_GLUTTER = 'CHANGE_GLUTTER';

export const changeGlutterAct = (size) => ({
  type: CHANGE_GLUTTER,
  payload: {
    size,
  },
});

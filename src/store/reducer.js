//ACTION TYPES

const CHECK_REDUX = 'CHECK_REDUX';

//ACTION CREATORS

export const checkRedux = () => ({
  type: CHECK_REDUX
})

//INITIAL STATE

const initialState = '';

//REDUCER

export default (state = initialState, action) => {
  switch (action.type) {
    case CHECK_REDUX:
      return 'Redux works!'
    default:
      return state;
  }
};


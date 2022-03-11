import produce from 'immer';

const initialState = {};

const START_LOADING = 'LoadingReducer/START_LOADING';
const FINISH_LOADING = 'LoadingReducer/FINISH_LOADING';

export const actStartLoading = (requestType) => ({
  type: START_LOADING,
  payload: requestType, // 액션 데이터
});

export const actFinishLoading = (requestType) => ({
  type: FINISH_LOADING,
  payload: requestType,
});

function LoadingReducer(state = initialState, action) {
  switch (action.type) {
    case START_LOADING:
      return produce(state, (draft) => {
        draft.state = true;
      });
    case FINISH_LOADING:
      return produce(state, (draft) => {
        draft.state = false;
        draft.ex = action.ex;
      });
    default:
      return state;
  }
}

export default LoadingReducer;

const GET_GREETING_STARTED = 'rails-react-app/greeting/GET_GREETING_STARTED';
const GET_GREETING_SUCCEED = 'rails-react-app/greeting/GET_GREETING_SUCCEED';
const GET_GREETING_FAILED = 'rails-react-app/greeting/GET_GREETING_FAILED';
const initialState = {
  status: 'awaiting',
  message: '',
};
const getGreetingStarted = () => ({
  type: GET_GREETING_STARTED,
});
export const getGreetingSucceed = (payload) => ({
  type: GET_GREETING_SUCCEED,
  payload,
});
const getGreetingFailed = (payload) => ({
  type: GET_GREETING_FAILED,
  payload,
});
export const fetchGreeting = () => async (dispatch) => {
  const url = 'http://localhost:3001/v1/greetings';
  dispatch(getGreetingStarted());
  await fetch(url)
    .then((response) => response.json())
    .then((json) => dispatch(getGreetingSucceed(json)))
    .catch((error) => dispatch(getGreetingFailed(error.toString())));
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GREETING_STARTED:
      return {
        ...state,
        status: 'loading',
      };
    case GET_GREETING_SUCCEED:
      return {
        message: action.payload.message,
        status: 'awaiting',
      };
    case GET_GREETING_FAILED:
      return {
        ...state,
        status: 'failed',
        error: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;

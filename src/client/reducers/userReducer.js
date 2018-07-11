import { FETCH_USERS } from '../actions'


export default (state = [], atcion) => {
  switch (action.type) {
    case FETCH_USERS:
      return action.payload.data;
    default:
      return state;
  }
}

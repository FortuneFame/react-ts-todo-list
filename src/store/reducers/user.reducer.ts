import { UserActionTypes} from "../actions/user.action";
import { SET_ALL_USERS, SET_CURRENT_USER, SET_USER } from "../constants";
import { UserState } from "../types/state.types";

const initialState: UserState = {
    currentUser: { id: '', firstName: '', lastName: '' },
    allUsers: [],
};

const userReducer = (state = initialState, action: UserActionTypes): UserState => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                currentUser: action.payload,
            };
        case SET_ALL_USERS:
            return {
                ...state,
                allUsers: action.payload,
            };
         case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      };
        default:
            return state;
    }
};


export default userReducer;

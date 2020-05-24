import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn251394Reducer from '../features/SignIn251394/redux/reducers'
import SignIn451392Reducer from '../features/SignIn451392/redux/reducers'
import CalendarReducer from '../features/Calendar/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn251394: SignIn251394Reducer,
SignIn451392: SignIn451392Reducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,

});
import { Actions } from '../../actions';
import * as Constants from '../../constants/';

export type TPeopleAction
    = Actions.fecthPeopleAction
    | Actions.fetchPeopleRequestAction
    | Actions.fetchPeopleSucessAction
    | Actions.fetchPeopleFailureAction;

const initialState: boolean = false;

export default (state = initialState, action: TPeopleAction) => {
    switch (action.type) {
        case Constants.PeopleActions.FETCH:
            return false;
        case Constants.PeopleActions.FETCH_SUCCESS:
            return false;
        case Constants.PeopleActions.FETCH_FAILURE:
            return false;
        case Constants.PeopleActions.FETCH_REQUEST:
            return true;
        default:
            return state;
    }
};

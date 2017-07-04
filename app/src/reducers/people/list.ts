import { Reducer } from 'redux';
import { Actions } from '../../actions';
import * as Constants from '../../constants/';

export type TPeopleAction = Actions.fetchPeopleSucessAction;

const initialState: Models.IPerson[] = [];

export default (state = initialState, action: TPeopleAction) => {
    switch (action.type) {
        case Constants.PeopleActions.FETCH_SUCCESS:
            return action.payload;
        default:
            return state;
    }
};

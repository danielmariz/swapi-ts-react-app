import * as Constants from '../constants/';

export type OtherAction = { type: '' };

export type fecthPeopleAction = {
    type: Constants.TFETCH_PEOPLE,
};

export type fetchPeopleRequestAction = {
    type: Constants.TFETCH_PEOPLE_REQUEST,
};

export type fetchPeopleFailureAction = {
    type: Constants.TFETCH_PEOPLE_FAILURE,
    payload: {},
};

export type fetchPeopleSucessAction = {
    type: Constants.TFETCH_PEOPLE_SUCCESS,
    payload: Models.IPerson[],
};

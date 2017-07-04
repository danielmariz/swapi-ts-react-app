import SWAPIServiceApi from '../api';

// TODO: this should be returned from API Root
// not carrying about pagination yet, loads just the first page results
const peopleURL = 'http://swapi.co/api/people/';
const planetsURL = 'http://swapi.co/api/planets/';
const vehiclesURL = 'http://swapi.co/api/vehicles/';

// FIXME: remove boilerplate
export const fetchPeople = () => {
  return SWAPIServiceApi.getList(peopleURL).then((res) => res);
};

export const fetchPlanets = () => {
  return SWAPIServiceApi.getList(planetsURL).then((res) => res);
};

export const fetchVehicles = () => {
  return SWAPIServiceApi.getList(vehiclesURL).then((res) => res);
};

/* tslint:disable:indent */
import * as React from 'react';
import { describe } from '../../common/storybook';
import { ListItem, IListItemProps, IColumn } from './ListItem';
import { planetTranslations } from '../../lang/en';

const itemData: Models.IPlanet = {
	name: 'Tatooine',
	rotation_period: '23',
	orbital_period: '304',
	diameter: '10465',
	climate: 'arid',
	gravity: '1 standard',
	terrain: 'desert',
	surface_water: '1',
	population: '200000',
	residents: [
		'http://swapi.co/api/people/1/',
		'http://swapi.co/api/people/2/',
		'http://swapi.co/api/people/4/',
		'http://swapi.co/api/people/6/',
		'http://swapi.co/api/people/7/',
		'http://swapi.co/api/people/8/',
		'http://swapi.co/api/people/9/',
		'http://swapi.co/api/people/11/',
		'http://swapi.co/api/people/43/',
		'http://swapi.co/api/people/62/',
	],
	films: [
		'http://swapi.co/api/films/5/',
		'http://swapi.co/api/films/4/',
		'http://swapi.co/api/films/6/',
		'http://swapi.co/api/films/3/',
		'http://swapi.co/api/films/1/',
	],
	created: '2014-12-09T13:50:49.641000Z',
	edited: '2014-12-21T20:48:04.175778Z',
	url: 'http://swapi.co/api/planets/1/',
};

const columns: IColumn[] = [
	{
		infos: ['diameter', 'climate', 'orbital_period'],
	},
	{
		infos: ['gravity', 'population', 'rotation_period'],
	},
	{
		infos: ['terrain', 'surface_water'],
	},
];

const props: IListItemProps = {
	data: itemData,
	translations: planetTranslations,
	columns,
};

describe('primitives', {
	title: 'ListItem component',
	width: '100%',
})
	.add('List Item', () => {
		return (
			<ListItem {...props} />
		);
	});

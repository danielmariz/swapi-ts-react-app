/* tslint:disable:no-namespace */

declare namespace Models {

    interface ItemBase {
        name: string;
        'created': stringAsDate;
        'edited': string;
        'url': string;
        'films': string[];
    }

    export interface IPerson extends ItemBase {
        'height': string;
        'mass': string;
        'hair_color': string;
        'skin_color': string;
        'eye_color': string;
        'birth_year': string;
        'gender': string;
        'homeworld': string;
        'species': string[];
        'vehicles': string[];
        'starships': string[];
    }

    export interface IPlanet extends ItemBase {
        'rotation_period': string;
        'orbital_period': string;
        'diameter': string;
        'climate': string;
        'gravity': string;
        'terrain': string;
        'surface_water': string;
        'population': string;
        'residents': string[];
    }

    export interface IVehicle extends ItemBase {
        'model': string;
        'manufacturer': string;
        'cost_in_credits': string;
        'length': string;
        'max_atmosphering_speed': string;
        'crew': string;
        'passengers': string;
        'cargo_capacity': string;
        'consumables': string;
        'vehicle_class': string;
        'pilots': string[];
    }

    export interface ICollection {
        'count': number;
        'next': string;
        'previous': string | number | null;
    }

    export interface IPlanetCollection extends ICollection {
        'results': IPlanet[];
    }

    export interface IPeopleCollection extends ICollection {
        'results': IPerson[];
    }

    export interface IVehicleCollection extends ICollection {
        'results': IVehicle[];
    }
}

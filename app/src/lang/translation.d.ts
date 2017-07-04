/* tslint:disable:no-namespace */
declare namespace Translation {

    export interface ILinkTranslations {
        text: string;
        titleAttr: string;
        altAttr: string;
    }

    export interface INavigationTranslations {
        people: ILinkTranslations;
        planets: ILinkTranslations;
        vehicles: ILinkTranslations;
    }

    export interface IListItemTranslations {
        title?: string;
    }

    export interface IPlanetTranslations extends IListItem {
        diameter: string;
        climate: string;
        orbital_period: string;
        gravity: string;
        population: string;
        rotation_period: string;
        terrain: string;
        surface_water: string;
    }
    export interface IPeopleTranslations extends IListItem {

    }

    export interface IVehicleTranslations extends IListItem {
    }
}

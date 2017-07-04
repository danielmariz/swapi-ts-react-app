// tslint:disable
declare namespace Icon {
    
    export type SvgIconTypes = 'people' | 'planets' | 'vehicles';

    export interface ISvgIcon {
        title?: string;
        color?: string;
        width?: number;
        height?: number;
        iconType?: SvgIconTypes;
    }
}

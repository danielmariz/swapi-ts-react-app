import * as React from 'react';
import { connect } from 'react-redux';
import { peopleStyles } from './People.styles';
import { PeopleActions } from '../../../constants';
import { ListItem, IListItemProps, IColumn } from '../../../components/ListItem';
import { peopleTranslations } from '../../../lang/en';

const listItemColumns: IColumn[] = [
    {
        infos: ['gender', 'birth_year', 'homeworld'],
    },
    {
        infos: ['hair_color', 'skin_color', 'eye_color'],
    },
    {
        infos: ['height', 'mass'],
    },
];

const PeopleListItem = (itemData: Models.IPerson, index: number) => {
    const listItemProps: IListItemProps = {
        data: itemData,
        translations: peopleTranslations,
        columns: listItemColumns,
    };
    return <ListItem key={`list_item_${index}`} {...listItemProps} />;
};

export interface IPeopleProps {
    styles?: any;
    fetchPeople: () => void;
    peopleList: Models.IPerson[];
    isLoading: boolean;
    state: any;
}

/**
 * People page container.
 */
class People extends React.Component<IPeopleProps, void> {
    constructor(props: IPeopleProps) {
        super(props);
    }

    public static defaultProps: Partial<IPeopleProps> = {
        styles: peopleStyles,
    };

    public componentWillMount() {
        this.props.fetchPeople();
    }

    public render() {
        const loader = <span>Loading...</span>;
        const list = this.props.peopleList.map(
            (person: Models.IPerson, index: number) => PeopleListItem(person, index),
        );
        return (
            <div>
                <h1 className='only-screen-readers'>People</h1>
                {(this.props.isLoading) ? loader : list}
            </div>
        );
    }
}

const mapStateToProps = (state: any) => ({
    peopleList: state.people.list,
    isLoading: state.people.isLoading,
    state,
});

const mapDispatchToProps = (dispatch: any) => ({
    fetchPeople: () => dispatch({ type: PeopleActions.FETCH }),
});

export default connect(mapStateToProps, mapDispatchToProps)(People);

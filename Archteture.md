## File Structure

src/
    index.js
    
    config/
        routes.js
        
    containers/ //top level connected component 
        layout/
            Main.js
        pages/ //route handler
            People/
                index.js
                People.js
                People.spec.js
                People.styles.js
            Planets/
                index.js
                Planets.js
                Planets.spec.js
                Planets.styles.js
            Vehicles/
                index.js
                Vehicles.js
                Vehicles.spec.js
                Vehicles.styles.js
        
        Navigation/
            index.js
            Navigation.js
            NavigationItem/
                index.js
                NavigationItem.js
    
    components/
        Header/
            Header.js
            Header.spec.js
            Header.styles.js
        ContentPanel/
            ContentPanel.js
            ContentPanel.spec.js
            ContentPanel.styles.js
        Sidebar/
            Sidebar.js
            Sidebar.spec.js
            Sidebar.styles.js
        ListItem/
            ListItem.js
            ListItem.spec.js
            ListItem.styles.js
        Loader/
            Loader.js
            Loader.spec.js
            Loader.styles.js
    
    lang/
        en.js
    helpers/

    api/
        people/
            index.js
            people.js
            people.spec.js
        planets/
            index.js
            planets.js
            planets.spec.js
        vehicles/
            index.js
            vehicles.js
            vehicles.spec.js
    stores/
        configureStore.js
    reducers/
        index.js
        categories/
            selected.js
        people/
            byId.js
            idList.js
        planets/
            byId.js
            idList.js
        vehicles/
            byId.js
            idList.js

    sagas/
        index.js
        people/
            getPeople.js
            getPeople.spec.js
        planets/
            getPlanets.js
            getPlanets.spec.js
        vehicles/
            getVehicles.js
            getVehicles.spec.js
    
    actions/
        index.js
        actions.js //getPlanets, etc. *using redux-actions
        actions.spec.js
    
    constants/
        actionTypes.js //GET_PEOPLE, GET_PLANETS, GET_VEHICLES, GET_PEOPLE_REQUEST, GET_PEOPLE_SUCCCESS, GET_PEOPLE_FAILURE
    
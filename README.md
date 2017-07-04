# miniproject

![Screen Design](https://cloud.githubusercontent.com/assets/185555/25463667/f26b0bdc-2b4b-11e7-8800-9933103d5c02.png)


## Setup

    cd ./app
    yarn install


## Development

    cd ./app

The [React Storybook](https://storybooks.js.org/docs) is a UI test harness to isolate and develop components within.
To start it run the script:

    yarn run ui

NOTE: There is currently a temporary issue with the StoryBook running in Safari.

To build the Typescript in the background run the transpiler in watch mode:

    yarn run build:watch

This builds the Typescript into ES5 within the `/lib` folder.  It's these built resources which in turn Storybook is watching and hot reloading.

The running Storybook development environment should look like this:

![Storybook](https://cloud.githubusercontent.com/assets/185555/25463603/ac86ce30-2b4b-11e7-8894-61293cd95e31.png)


## Technical Brief

- Language
  - [TypeScript](https://www.typescriptlang.org/) - 
      - Configuration already setup, see the `/app` folder.
      - NOTE VSCode has extremely good support for TypeScript.
  
- View
  - [React](https://facebook.github.io/react/)
  - Components isolated and decomposed into [Storybook](https://getstorybook.io/) (this is a major deal - and the discussion around your development approach will center alot around how you tackle this)
  - Final site served to browser (your call on how you want to do this, but [create-react-app](https://github.com/facebookincubator/create-react-app) or the [typescript fork](https://github.com/wmonk/create-react-app-typescript) of it will save you a ton of time mucking around with [Webpack](https://webpack.github.io/).  This project is not that interested in how well you can wrangle Webpack, more on how you design and write code).


- Style
    - Inline styles ([Glamor](https://github.com/threepointone/glamor)) - installed as part of configuration.
    - Use Flexbox where appropriate.

- State management
  - You choose, it may be as simple as `setState` within React, or alternatively Redux or Mobx.


- Github
  - Use [Github flow](https://guides.github.com/introduction/flow/) meaning branches and PR's.


## Design Brief

![Callouts](https://cloud.githubusercontent.com/assets/185555/25463737/5d7c5660-2b4c-11e7-87e0-cc8967f67047.png)

### Behavior

- The `CategoryList` in the left-hand `IndexPanel` changes the visual state in the main `ContentPanel`
- The `ContentPanel` loads a list of items retrieved from the [SWAPI](https://swapi.co/).  
  - Your call on how you do this, either totally client side, via your server.  
  - There is a GraphQL version of this API too, but dont' get bogged down on GraphQL yet unless you want to explore that.  If so, reach out and we can chat.
- This design avoids any overly complex or fiddly UI component development, but is complex enough to require you to do something with state (namely the selected index panel item).
- Extra points if you do something smart with the delay when calling out to the external API (eg. a spinner of some kind).

### View

- All images to construct this design can be found in `/assets`.
- The web-font used is [Roboto](https://fonts.google.com/specimen/Roboto), weights Regular (`400`) and Black (`900`).
- Other details in callouts in the image above, and jump on the Slack channel and chat with me!!!



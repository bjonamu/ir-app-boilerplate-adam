## Walkthrough

Your `src` folder is where most of the goodies are found in an Ignite React App that was created using Create React App. Let's walk through them in more detail. Start with `src/index.js` (described below) and work your way down the walkthrough in order.

### Layouts

This boilerplate uses the methodology described [here](https://css-tricks.com/react-router-4/). Layout components are generally associated with the application routing and they take advantage of the Dynamic Routing concept of [React Router v4](https://reacttraining.com/react-router/web/guides/philosophy).

To generate a new Layout you can use the following generator commands:

```
ir-app layout Products
```

### Containers

This boilerplate makes use of the methodology discussed by Dan Abramov [here](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0). Containers are components that are concerned with how things work. 

Container components:

* Are concerned with how things work.
* May contain both presentational and container components** inside but usually don’t have any DOM markup of their own except for some wrapping divs, and never have any styles.
* Provide the data and behavior to presentational or other container components.
* Call Redux actions and provide these as callbacks to the presentational components.
* Are often stateful, as they tend to serve as data sources.
* Are usually generated using higher order components such as connect() from React Redux, createContainer() from Relay, or Container.create() from Flux Utils, rather than written by hand.
* Examples: UserPage, FollowersSidebar, StoryContainer, FollowedUserList.

To generate a new Container you can use the following generator commands:

```
ir-app container Comment
or
ir-app cont Comment
```

### Components

Again borrowing from Dan Abramov's approach. Components are presentaional components and they are concerned with how things look.

To generate a new Component you can use the following generator commands:

```
ir-app component Comment
or 
ir-app comp Comment
```

### Storybook

[Storybook](https://storybook.js.org/) has been setup to show off components in the different states. Storybook is a great way to develop and test components outside of use in your app. Simply run `npm run storybook` or `yarn storybook` to get started. All stories are contained in the `*.story.js` files along side the components.

### Themes

Styling themes used throughout your app styles.

* `Colors.js` - defined colors for your app
* `Metrics.js` - useful measurements of things like navBarHeight

### Config

Initialize and configure things here.

* `ApiConfig.js` - simple api configuration here
* `AppConfig.js` - simple app configuration here
* `DevConfig.js` - define how you want your development environment to act
* `ReduxPersistConfig.js` - configures Redux Persist

### Fixtures

Contains json files that mimic API responses for quicker development. These are used by the `Services/FixtureApi.js` object to mock API responses.

### Redux, Sagas

Contains a preconfigured Redux and Redux-Sagas setup. Review each file carefully to see how Redux interacts with your application.

Here again we have generators to help you out. You just have to use one of the following:

* `ir-app redux Amazing` - Will generate the redux for `Amazing`.
* `ir-app saga Amazing` - The same as above, but for the Sagas

### Services

Contains your API service and other important utilities for your application.

* `Api.js` - main API service, giving you an interface to communicate with your back end
* `FixtureApi.js` - mocks your API service, making it faster to develop early on in your app
* `RehydrationServices.js` - part of the redux-persist implementation

### Lib

We recommend using this folder for modules that can be extracted into their own NPM packages at some point.

### Images

Contains actual images (usually png) used in your application.

### Utils

Helpers for transforming data between API and your application and vice versa. An example is provided that you can look at to see how it works.

### Extras

#### Generating multiple files

In a situation were you want to create a component, container, redux or saga or any variations of these you can run the following commands

* `ir-app gen redux saga Amazing` - Will generate the redux and saga for `Amazing`.
* `ir-app g comp cont redux saga Register` - This will generate a component, container, redux and saga for Register.

#### Loading async components

```js
import Loadable from 'react-loadable'
const Button = Loadable({
  loader: () => import('../Components/Button'),
  loading: () => <div>loading...</div>
});
```
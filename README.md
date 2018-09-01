## How to run

1.  `npm install`
2.  `npm start` (Open [http://localhost:3000](http://localhost:3000) to view it in the browser.)

## Features

- Show room list and room details grouped by room type
- Clicking on room type will show the room list of the selected room type on top of the screen

## Remarks

- ducks pattern is used to structure the project (https://github.com/erikras/ducks-modular-redux)\
- api request is simulated
- redux-logger is used to log redux actions
- lodash is used to group room list by room type
- redux-observable is used to handle async api request action
- redux-observable-utils is a helper library that helps to reduce the boilerplate code for creating action, action creator, reducer, epic, etc
- reselect is used to create memoized selector to compute derized data, allowing redux to store the minimal possible state and avoid unnecessary recalculations during rerendering
- material-ui is used to style the application (https://material-ui.com/)

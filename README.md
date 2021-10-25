# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Publicly available via [netlify](https://create-video-app.netlify.app/)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `yarn prettier`

## TODO
1. Pass props for cards dynamically
2. Create BgImage component (repeated three times in cards)
3. Add lazy-loading for images
4. For inner pages content I used separate routes, instead of simple tabs - can be discussed.
5. I used desktop-first approach for styles as it was suggested by design, but it's easy switch to mobile-first
6. Improve types
7. Improve component- and class-names.

## Inconsistencies to design
1. Different colors for same type of text - #222, #000, #333, #111 (chosen #222 as main body color)
2. Buttons has different height - 33 or 35 (chosen 34 as middle)
3. A lot of inconsistencies according to design-system principles: no grid, random margins (not divided by 4 or 8),
in Signup user enters his fullname, but in Profile we can edit firstname and surname separately etc.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
## Getting started
```
git clone https://sonyarouje.visualstudio.com/tracers/_git/reactjs-docker-dev

git checkout master
```
One better approach of developing is using a docker container. 

just a sample modification.
another modification
modification 2
modification 3

Add customer login1

Add customer login saga

dashboard changes

## Steps to do
* Install docker for desktop https://www.docker.com/products/docker-desktop
* Install the Remote development VS Code extension https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack
* Close VS Code 
* Open docker-compose.yml in the cloned repo
* Modify the volumes section as below
    * For e.g. in my case the code is located in d:\sony\tracers\reactjs-docker-dev
    * /d/sony/tracers/reactjs-docker-dev:/home/dev/src
    * Here we are mapping our local folder to /home/dev/src directory of docker container.
* Reopen the VS Code in the cloned repo
* VS Code will ask to reopen the code in Container
* Say reopen in container and after some time your code will open in container and all good to go.
* Install all your packages 
    * In VS Code menu Terminal->New Terminal
    * You will be in /home/dev/src directory
    * yarn install
    * Wait for the packages installation to finish
    * Once finished $yarn start/$npm start
    * Open a browser in your local machine 

Biggest advantage of this docker based development is we can have all our development related dependencies in container. For e.g. dev machine doesnt need node, npm or yarn. These dependencies are already included in docker container. 

Setting up a new dev machine is very easy no need to remember what all the dependent softwares we need for the development.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

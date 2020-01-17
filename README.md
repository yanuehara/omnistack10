# Omnistack week v.10

Project of Omnistack week organized by @rocketseat

# Description

The omnistack week is designed as sequence of video-tutorials in one week aimed at getting started with NodeJS + React + React Native stack.

The proposed app is called "DevRadar". Its allows devs to signup (exclusively via the frontend) and input their location, tech stack and github profile. In the mobile app, it is possible to filter nearby devs by their tech stack. The mobile app and backend are connected via websocket protocol to allow live insertion, during the search, of new devs with the desired tech stack. Devs are indexed using their github username. As this project was an exercise project it lacks proper authentication, or editing capabilities.

# Building

## Backend
Backend is developed with NodeJS and MongoDB. To start the API, first change line 13 on [index.js](backend/src/index.js) to your mongoDB connection string. Then run `yarn dev` or `npm dev` to start the development server. The default port is 3333.

## Web frontend
Frontend is a React app created with create-react-app and is located in folder `web`. More information on the web's [README](web/README.md).

## Mobile frontend
The mobile frontend was build using React Native with @expo/expo. Before starting, change baseURL in [api.js](mobile/src/services/api.js) and socket.io-client connection string in [socket.js](mobile/src/services/socket.js) to point to your local ip address. After that, run `yarn start` or `npm start` to start the server. If you are using your own mobile to test, you'll need expo app installed. After starting an QR code will be shown, scan it with the expo app and expo will automatically bundle and send the javascript to your phone.

# PRs

Feel free to fork and contribute with PRs and/or open issues. But keep in mind this projects lacks several features on purpose as it is an exercise project.

See the License in [LICENSE](LICENSE)

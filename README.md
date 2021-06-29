# A Simple [Battlesnake](https://play.battlesnake.com/) written in TypeScript for Azure Functions

This is a basic implimentation of the Battlesnake API based on the official Node.js [starter project](https://github.com/battlesnakeofficial/starter-snake-node).

## Technologies

- TypeScript
- Azure Functions
- localtunnel (for testing and/or running locally)

## Prerequisite

- [Battlesnake Account](https://play.battlesnake.com/)
- Azure Account (get a free one [here](https://azure.microsoft.com/account/free))

## Tooling

- VS Code (other editors are available)
- [Azure Tools Extension Pack](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-node-azure-pack)
- [Optional] [REST Book Extension](https://marketplace.visualstudio.com/items?itemName=tanhakabir.rest-book) for testing (requires [VS Code "Insiders" build](https://code.visualstudio.com/insiders/))

## Running your Battlesnake

### Running Locally

Make sure you install the project dependencies if you haven't yet.

```
npm install
```

Execute the _start_ script:

```
npm run start
```

GET/POST the snake API:

```
end:    [POST]  http://localhost:7071/api/snake/end
index:  [GET]   http://localhost:7071/api/snake
move:   [POST]  http://localhost:7071/api/snake/move
start:  [POST]  http://localhost:7071/api/snake/start
```

### Create a tunnel to try it out

So, with localtunnel (or ngrok if you'd prefer) you can setup a tunnel to enable you to add your locally running Battlesnake to Battlesnake online.

Execute the _tunnel_ script

```
npm run tunnel
```

Once running you'll be given a url. For example:

```
your url is: https://spotty-fox-64.loca.lt
```

You can now register your local Battlesnake online by replacing you local address `http://localhost:7071` with the url provided by localtunnel. For example:

```
https://spotty-fox-64.loca.lt/api/snake
```

### Running In Azure

_TODO_

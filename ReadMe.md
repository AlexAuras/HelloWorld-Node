# Hello World application with NodeJs and TypeScript

Following the instructions on https://nodejs.dev/en/learn/introduction-to-nodejs/. 

[Node.js](https://nodejs.dev/) is a free, open-sourced, cross-platform JavaScript run-time environment that lets developers write command line tools and server-side scripts outside of a browser. \
[TypeScript](https://www.typescriptlang.org/) is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.

## How To

Instructions: 

```console
# Install Node Version Switcher
winget install jasongin.nvs

# Install latest stable version of NodeJs
nvs install lts
nvs use lts

# Initialize Node project
npm init -y

# Add TypeScript
npm i -D typescript
npm i -D @types/node

# Compile TypeScript to JavaScript (without tsconfig.json)
npx tsc .\example1.ts .\example2.ts --outDir ./out/

# Add the tscconfig.json
tsc --init

# Build
npm run-script build

# Run with Node
node .\out\example1.js
node .\out\example2.js
```

## Remarks

- The .ignore file is copied from: https://github.com/github/gitignore/blob/main/Node.gitignore
- I deleted the "main" entry from package.json as in my case I only have individuel example.js files. However, in most cases you would have one index.js file that you start your app from. 
- At the end I added some gimmicks I learned from [How to Setup Node.js with TypeScript in 2023](https://www.youtube.com/watch?v=H91aqUHn8sE)
# Github User Finder Backend

This is the backend for the github user finder project.

## Installation

Install dependencies
```
yarn install
```

Edit the file `/src/index.js` and add your MongoDB URL
```
moongoose.connect('YOUR_MONGODB_URL', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
})
```

## Usage

```
yarn start
```
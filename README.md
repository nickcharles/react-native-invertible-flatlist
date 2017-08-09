# Invertible Flat List

An invertible FlatList for React Native.

## Installation

npm:
```
npm install --save react-native-invertible-flatlist
```

yarn:
```
yarn add react-native-invertible-flatlist
```

## Behavior

Behaves identically to the React Native [FlatList](https://facebook.github.io/react-native/docs/flatlist.html) component with the added functionality of being invertible. The classic example of this is a chat application where the most recent items are listed at the very bottom of a scrolling list that takes the user back in time. This works for both vertically scrolling and horizontally scrolling lists.

### Props

> [FlatList props...](https://facebook.github.io/react-native/docs/flatlist.html#props)

> **inverted?:** `?boolean`
>
> Inverts the scrolling direction of the list.

### Methods

> [FlatList methods...](https://facebook.github.io/react-native/docs/flatlist.html#methods)

## Testing

If you want to test the implementation or just see a working example, this project comes with an example project out of the box. Once you clone, move into the `test` directory and run the following commands:

```
npm install
npm run ios
```

## Development

The best way to do local development is to clone this project and install the package as a local dependency in your project. See the test project in this repository for an example of how to do this. 

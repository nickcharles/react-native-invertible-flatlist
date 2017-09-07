NOTICE: This package is now deprecated. As of React Native 0.47 the `FlatList` component supports inversion natively. Please use the native capabilities for future development.

# InvertibleFlatList

An invertible FlatList for React Native.

This is the updated and renamed version of `react-native-invertible-flat-list`. That package is out of date and unmaintained. Please use this version going forward.

## Installation

npm:
```
npm install --save react-native-invertible-flatlist
```

yarn:
```
yarn add react-native-invertible-flatlist
```

Import the component in your source as follows:
```javascript
import { InvertibleFlatList } from 'react-native-invertible-flatlist';
```

## Behavior

Behaves identically to the React Native [FlatList](https://facebook.github.io/react-native/docs/flatlist.html) component with the added functionality of being invertible. The classic example of this is a chat application where the most recent items are listed at the very bottom of a scrolling list that takes the user back in time. This works for both vertically scrolling and horizontally scrolling lists.

## Usage

Minimal example:
```javascript
<InvertibleFlatList
  inverted
  data={[{key: 'a'}, {key: 'b'}]}
  renderItem={({item}) => <Text>{item.key}</Text>}
/>
```

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
yarn install
yarn run ios
```

## Development

The best way to do local development is to clone this project and install the package as a local dependency in your project. See the test project in this repository for an example of how to do this.

## Known Issues

* `ListHeaderComponent` and `ListFooterComponent` do not properly invert the content that is passed to them. This is because these properties can accept a React Component Class, a render function, or a rendered element. Because React Native now supports inversion natively, the amount of effort required to implement this properly doesn't equate with the convenience of these working perfectly. You'll need to apply the y-axis scale inversion to these components yourself before passing them to `InvertibleFlatList`.

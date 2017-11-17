import React, { PureComponent } from 'react';
import { FlatList, StyleSheet, View, Platform } from 'react-native';

export class InvertibleFlatList extends PureComponent {
    render() {
        const {inverted, ListHeaderComponent, ListFooterComponent, ...forwardedProps} = this.props;

        // If not inverted, render as an ordinary FlatList
        if (!inverted) {
            return (
                <FlatList
                    {...forwardedProps}
                />
            )
        }

        this.inversionDirection = this.props.horizontal ? styles.horizontal : styles.vertical;
        return (
            <View style={[styles.container, this.inversionDirection]}>
                <FlatList
                    ref={this._setFlatListRef}
                    {...forwardedProps}
                    renderItem={this._renderItem}
                    // Invert the header and footer components so they appear in the expected places
                    ListHeaderComponent={ListFooterComponent}
                    ListFooterComponent={ListHeaderComponent}
                />
            </View>
        );
    }

    _setFlatListRef = (flatListRef) => {
        this.flatListRef = flatListRef
    }

    _renderItem = (info) => {
        return (
            <View style={[styles.container, this.inversionDirection]}>
                {this.props.renderItem(info)}
            </View>
        );
    }

    getMetrics = () => {
        return this.flatListRef.getMetrics();
    }

    scrollToEnd = (params) => {
        this.flatListRef.scrollToEnd(params);
    }

    scrollToIndex = (params) => {
        this.flatListRef.scrollToIndex(params);
    }

    scrollToItem = (params) => {
        this.flatListRef.scrollToItem(params);
    }

    scrollToOffset = (params) => {
        this.flatListRef.scrollToOffset(params);
    }

    recordInteraction = () => {
        this.flatListRef.recordInteraction();
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    vertical: {
        ...Platform.select({
            ios: {
                transform: [{ scaleY: -1 }]
            },
            android: {
                transform: [
                    { perspective: 1 },
                    { scaleY: -1 }
                ]
            }
        })
    },
    horizontal: {
        ...Platform.select({
            ios: {
                transform: [{ scaleX: -1 }]
            },
            android: {
                transform: [
                    { perspective: 1 },
                    { scaleX: -1 }
                ]
            }
        })
    }
});

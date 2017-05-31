import React, { PureComponent } from 'react';
import { FlatList } from 'react-native';

export class InvertibleFlatList extends PureComponent {
    render() {
        const {inverted, ...forwardedProps} = this.props;

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
            <View style={this.inversionDirection}>
                <FlatList
                    ref={this._setFlatListRef}
                    {...forwardedProps}
                    renderItem={this._renderItem}
                />
            </View>
        );
    }

    _setFlatListRef = (flatListRef) => {
        this.flatListRef = flatListRef
    }

    _renderItem = (info) => {
        return (
            <View style={this.inversionDirection}>
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
    vertical: {
        transform: [{ scaleY: -1 }],
    },
    horizontal: {
        transform: [{ scaleX: -1 }],
    },
});

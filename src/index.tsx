import React, { PureComponent } from 'react';
import {
    FlatList,
    FlatListProperties,
    StyleSheet,
    ViewStyle,
    View,
} from 'react-native';

export interface InvertibleFlatListProps extends FlatListProperties<any> {
    inverted?: boolean;
}

export class InvertibleFlatList extends PureComponent<InvertibleFlatListProps, void> {

    private inversionDirection: ViewStyle;

    public render(): JSX.Element {
        const {inverted, ...forwardedProps} = this.props;
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
                    {...forwardedProps}
                    renderItem={this.renderItem}
                />
            </View>
        );
    }

    private renderItem = (info: any): React.ReactElement<any> => {
        return (
            <View style={this.inversionDirection}>
                {this.props.renderItem(info)}
            </View>
        );
    }

}

const styles = StyleSheet.create({
    vertical: {
        transform: [{scaleY: -1}],
    },
    horizontal: {
        transform: [{scaleX: -1}],
    },
});

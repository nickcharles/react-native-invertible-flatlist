import React, { PureComponent } from 'react';
import {
    FlatList,
    FlatListProperties,
    StyleSheet,
    ViewStyle,
    View,
} from 'react-native';

export interface InvertibleFlatListProps<ItemT> extends FlatListProperties<ItemT> {
    inverted?: boolean;
}

export class InvertibleFlatList<ItemT> extends PureComponent<InvertibleFlatListProps<ItemT>, void> {

    private inversionStyle: ViewStyle;

    public render(): JSX.Element {
        this.inversionStyle = this.props.horizontal ? styles.horizontal : styles.vertical;

        const {inverted, ...forwardedProps} = this.props;
        return (
            <View style={this.inversionStyle}>
                <FlatList
                    {...forwardedProps}
                    renderItem={this.renderItem}
                />
            </View>
        );
    }

    private renderItem = (info: any): React.ReactElement<any> => {
        return (
            <View style={this.inversionStyle}>
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
        tansform: [{scaleX: -1}],
    },
});

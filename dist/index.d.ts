/// <reference types="react" />
import { PureComponent } from 'react';
import { FlatListProperties } from 'react-native';
export interface InvertibleFlatListProps<ItemT> extends FlatListProperties<ItemT> {
    inverted?: boolean;
}
export declare class InvertibleFlatList<ItemT> extends PureComponent<InvertibleFlatListProps<ItemT>, void> {
    private inversionStyle;
    render(): JSX.Element;
    private renderItem;
}

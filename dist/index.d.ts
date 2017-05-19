/// <reference types="react" />
import { PureComponent } from 'react';
import { FlatListProperties } from 'react-native';
export interface InvertibleFlatListProps extends FlatListProperties<any> {
    inverted?: boolean;
}
export declare class InvertibleFlatList extends PureComponent<InvertibleFlatListProps, void> {
    private inversionStyle;
    render(): JSX.Element;
    private renderItem;
}

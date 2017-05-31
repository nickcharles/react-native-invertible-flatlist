import { FlatListProperties } from 'react-native';

export var InvertibleFlatList: InvertibleFlatList<any>
export type InvertibleFlatList<ItemT> = InvertibleFlatListStatic<ItemT>;

/**
 * @see https://facebook.github.io/react-native/docs/flatlist.html#props
 */
export interface InvertibleFlatListProperties<ItemT> extends FlatListProperties<ItemT> {

    /**
     * If true, renders the list inverted from its normal orientation.
     */
    inverted?: boolean
}

export interface InvertibleFlatListStatic<ItemT> extends React.ComponentClass<InvertibleFlatListProperties<ItemT>> {

    /**
     * Exports some data, e.g. for perf investigations or analytics.
     */
    getMetrics: () => {
        contentLength: number,
        totalRows: number,
        renderedRows: number,
        visibleRows: number,
    }

    /**
     * Scrolls to the end of the content. May be janky without `getItemLayout` prop.
     */
    scrollToEnd: (params?: {animated?: boolean}) => void

    /**
     * Scrolls to the item at a the specified index such that it is positioned in the viewable area
     * such that `viewPosition` 0 places it at the top, 1 at the bottom, and 0.5 centered in the middle.
     * May be janky without `getItemLayout` prop.
     */
    scrollToIndex: (params: {animated?: boolean, index: number, viewPosition?: number}) => void

    /**
     * Requires linear scan through data - use `scrollToIndex` instead if possible.
     * May be janky without `getItemLayout` prop.
     */
    scrollToItem: (params: {animated?: boolean, index: number, viewPosition?: number}) => void

    /**
     * Scroll to a specific content pixel offset, like a normal `ScrollView`.
     */
    scrollToOffset: (params: {animated?: boolean, offset: number}) => void

    /**
     * Tells the list an interaction has occured, which should trigger viewability calculations,
     * e.g. if waitForInteractions is true and the user has not scrolled. This is typically called
     * by taps on items or by navigation actions.
     */
    recordInteraction: () => void
}

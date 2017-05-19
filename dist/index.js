var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import React, { PureComponent } from 'react';
import { FlatList, StyleSheet, View, } from 'react-native';
export class InvertibleFlatList extends PureComponent {
    constructor() {
        super(...arguments);
        this.renderItem = (info) => {
            return (<View style={this.inversionStyle}>
                {this.props.renderItem(info)}
            </View>);
        };
    }
    render() {
        this.inversionStyle = this.props.horizontal ? styles.horizontal : styles.vertical;
        const _a = this.props, { inverted } = _a, forwardedProps = __rest(_a, ["inverted"]);
        return (<View style={this.inversionStyle}>
                <FlatList {...forwardedProps} renderItem={this.renderItem}/>
            </View>);
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

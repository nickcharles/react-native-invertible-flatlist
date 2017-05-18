"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_native_1 = require("react-native");
class InvertibleFlatList extends react_1.PureComponent {
    constructor() {
        super(...arguments);
        this.renderItem = (info) => {
            return (<react_native_1.View style={this.inversionStyle}>
                {this.props.renderItem(info)}
            </react_native_1.View>);
        };
    }
    render() {
        this.inversionStyle = this.props.horizontal ? styles.horizontal : styles.vertical;
        const _a = this.props, { inverted } = _a, forwardedProps = __rest(_a, ["inverted"]);
        return (<react_native_1.View style={this.inversionStyle}>
                <react_native_1.FlatList {...forwardedProps} renderItem={this.renderItem}/>
            </react_native_1.View>);
    }
}
exports.InvertibleFlatList = InvertibleFlatList;
const styles = react_native_1.StyleSheet.create({
    vertical: {
        transform: [{ scaleY: -1 }],
    },
    horizontal: {
        tansform: [{ scaleX: -1 }],
    },
});

---
category: Components
type: Data Entry
title: PickerView
---

PickerView's functions like Picker, but it is rendered directly in the area instead of the pop-up window.

## API

Support WEB, React-Native.

Properties | Descrition | Type | Default
-----------|------------|------|--------
| data    | data source       | `Array<{value, label}>` / `Array<Array<{value, label}>>` |   -  |
| value   | the value, the format is `[value1, value2, value3]`, corresponds to the level value of the data source   | Array  | - |
| cascade    | whether cascade        | Boolean |  true  |
| cols    | col numbers   | Number |  `3`  |
| onChange | selected callback function, can use [rc-form](https://github.com/react-component/form) | (val): void | - |
| prefixCls (`Web Only`)   | prefix class        | string |  am-picker  |
| pickerPrefixCls (`Web Only`)   | picker prefix class        | string |  am-picker-col  |
| styles  (`Web Only`)  | additional style        | Object |  {}  |

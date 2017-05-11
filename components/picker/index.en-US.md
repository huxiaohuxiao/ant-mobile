---
category: Components
type: Data Entry
title: Picker
---

Choose from a set of data, e.g. Country choice.

### Rules
- Try to use Picker to help users complete the input, to avoid the user through the keyboard directly input.
- DatePicker is Picker's specific pattern.

## API

Support WEB, React-Native.

Properties | Descrition | Type | Default
-----------|------------|------|--------
| data    | data source      | `Array<{value, label, children: Array}>` |   -  |
| value   | the value, the format is `[value1, value2, value3]`, corresponds to the level value of the data source   | Array  | - |
| format  | a function that formats the selected value  | (val): void | `(values) => { return values.join(','); } ` |
| cols    | col numbers   | Number |  `3`  |
| onChange | selected callback function, can use [rc-form](https://github.com/react-component/form) | (val): void | - |
| onPickerChange | trigger on each column of selected data is changed  | (val): void | - |
| children| usually `List.Item` | Object |  `List.Item`  |
| okText  | ok text | String |  `确定`  |
| dismissText  | dismiss text | String |  `取消`  |
| title  | title | String | - |
| extra  | Picker's children is best to `List.Item`, if not, need to be a custom component (the `onClick`/`extra` props need to be handled in the component) | String |  `请选择`  |
| disabled  | set disabled | Boolean | false |

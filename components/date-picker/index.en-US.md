---
category: Components
type: Data Entry
title: DatePicker
---

Used to select a date or time.

### Rules
- A maximum of five independent rollers are shown, each of which represents a different value.


## API

Support WEB, React-Native.

Properties | Descrition | Type | Default
-----------|------------|------|--------
| mode  | mode value, can be a `date` or `time` or `datetime` or `year` or `month` | String | `date` |
| value | the currently selected value, corresponding mode under the format are: `YYYY-MM-DD` or `HH:mm` or `YYYY-MM-DD HH:mm` | [moment](http://momentjs.com/) | - |
| minDate   | minimum date, the format is the same as value | [moment](http://momentjs.com/)  |  -  |
| maxDate   | maximum date, the format is the same as value | [moment](http://momentjs.com/)  |  -  |
| onChange  | change handler | (date: Object): void |  -  |
| locale   | international, can override the configuration of the global `[LocaleProvider](https://mobile.ant.design/components/locale-provider)` | Object: {DatePickerLocale: {year, month, day, hour, minute}, okText, dismissText} |  -  |
| title  | title | string/React.ReactElement |  -  |
| format  | format the selected value | (value:moment) => string/string | `(val) => { return val; }`  |
| extra   | DatePicker's children is best to `List.Item`, if not, need to be a custom component (the `onClick`/`extra` props need to be handled in the component) | String  |  `请选择`  |
| disabled   | set disabled  | Boolean |    false  |
| prefixCls (`WEB only`) |  prefix class  | string | `am-picker` |
| className (`WEB only`) |  样式类名 | string | - |
| minuteStep |   The amount of time, in minutes, between each minute item.    | Number | 1 |

More reference: https://github.com/react-component/m-date-picker

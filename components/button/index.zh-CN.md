---
category: Components
type: Data Entry
title: Button
subtitle: 按钮
---

点击后会触发一个操作。


## API

适用平台：WEB、React-Native

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| type    | 按钮类型，可选值为`primary`/`ghost`/`warning`或者不设  |   string   |   -  |
| size    | 按钮大小，可选值为`large`、`small` | string | `large`|
| activeStyle  | 点击反馈的自定义样式 (设为 false 时表示禁止点击反馈) | {}/false | {} |
| disabled   | 设置禁用  | boolean |    false  |
| onClick    | 点击按钮的点击回调函数 | (e: Object): void |   无  |
| style    | 自定义样式 |   Object  | 无 |
| inline (`WEB only`)     | 是否设置为行内按钮  | boolean |   false  |
| across (`WEB only`)     | 是否设置为通栏展示  | boolean |   false  |
| loading (`WEB only`)	   | 设置按钮载入状态	  | boolean	 | false |
| icon (`WEB only`)  | 可以是 [Icon](https://mobile.ant.design/components/icon) 组件里内置的某个 icon 的 type 值，也可以是 require 本地 svg 图标 (注意: `loading`设置后此项设置失效) | `string`/`require(./local.svg)` | -  |
| prefixCls (`WEB only`) |  class前缀 | string | `am-button` |
| className (`WEB only`) |  样式类名 | string | 无 |
| onPressIn (`RN only`)   | 同 RN TouchableHighlight onPressIn | (e: Object): void |   无  |
| onPressOut (`RN only`)    | 同 RN TouchableHighlight onPressOut | (e: Object): void |   无  |
| onShowUnderlay (`RN only`)    | 同 RN TouchableHighlight onShowUnderlay | (e: Object): void |   无  |
| onHideUnderlay (`RN only`)    | 同 RN TouchableHighlight onHideUnderlay | (e: Object): void |   无  |

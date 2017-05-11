---
category: Components
type: Data Entry
title: TextareaItem
subtitle: 多行输入
---


用于接受多行文本。

### 规则
- 支持通过键盘或者剪切板输入文本。
- 通过光标可以在垂直或者水平方向进行移动。


## API

适用平台：WEB、React-Native

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| value    | value 值(受控与否参考https://facebook.github.io/react/docs/forms.html)  | String |  无  |
| defaultValue    | 设置初始默认值        | String |  -  |
| placeholder      | placeholder        | String | ''  |
| editable    | 是否可编辑        | bool |  true  |
| disabled    | 是否禁用        | bool |  false  |
| clear      |   是否带清除功能      | bool |  true  |
| rows      |   显示几行      | number |   1 |
| count      |  计数功能,兼具最大长度,默认为0,代表不开启计数功能      | number | -  |
| onChange    | change 事件触发的回调函数 | (val: string): void |  -  |
| onBlur     | blur 事件触发的回调函数 | (val: string): void |   -  |
| onFocus    | focus 事件触发的回调函数 | (val: string): void |  -  |
| error       | 报错样式        | bool |  false  |
| onErrorClick       | 点击报错 icon 触发的回调   | (): void |  无  |
| autoHeight       | 高度自适应, autoHeight 和 rows 请二选一    | bool  | false  |
| labelNumber  | 定宽枚举值：`num * @input-label-width: 34px`，可用`2-7`之间的数字，一般(不能保证全部)能对应显示出相应个数的中文文字(不考虑英文字符) | number | `5` |
| name (`Web Only`)    | textarea 的 name       | String |   -  |
| prefixListCls (`Web Only`)    |   列表 className 前缀      | String |  `am-list`  |
| autoFocus (`Web Only`)   | 页面初始化时Textarea自动获取光标,每个页面只有一个Textarea的autpFocus会生效。（不保证所有浏览器都生效） | bool | false  |
| focused (`Web Only`)   | 页面运行过程中,Textarea获取光标,当Textarea获取光标（`focused`更新为true）后，需要在`onFocus`或者`onBlur`时再次将该属性设置为false。 | bool | false  |
| title (`Web Only`)    | 文案说明        | String/node |  '' |

> 更多属性请参考 react-native TextInput (http://facebook.github.io/react-native/docs/textinput.html)

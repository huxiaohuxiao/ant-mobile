---
category: Components
type: Navigation
title: Popover
subtitle: 气泡
---

在点击控件或者某个区域后，浮出一个气泡菜单来做更多的操作。
如果设置了遮罩层，建议通过点击遮罩层的任一位置，进行退出。


## API

适用平台：WEB、React-Native

### Popover

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| visible (`web only`)   | 当前显隐状态    | Boolean |  false   |
| onVisibleChange (`web only`)   | 当显隐状态变化时回调函数    | (visible: bool): void |  -   |
| placement (`web only`)   | enum{'left','right','top','bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight'} | String |  'bottomRight'   |
| popupAlign (`web only`)   | 用于设置偏移量等、会被合并到 placement 的设置中，参考 [dom-align](https://github.com/yiminghe/dom-align) 的`alignConfig`配置（ points 设置用 placement 代替）   | Object |  `{ overflow: { adjustY: 0, adjustX: 0 } }` (禁掉位置自动适应) |
| mask (`web only`)   | 是否显示遮罩背景层    | Boolean |  false  |
| overlay   | 弹出层内容    | React.node |  -   |
| onSelect   | 选中某选项时的回调函数    | (node: any, index?: number): void |  -   |
| style  |  设置样式  | Object |  -   |
| triggerStyle (`rn only`)   | 触发元素外围容器样式    | Object |  -   |
| overlayStyle (`rn only`)   | 弹出层外围容器样式    | Object |  -   |
| contextStyle (`rn only`)   | 最外围容器样式    | Object |  -   |
| renderOverlayComponent (`rn only`)   | 自定义弹出层的外围组件，默认是`ScrollView`，示例`(opts) => <Cus>{opts}</Cus>`  | (opts: any): React.Node |  -   |
| name (`rn only`)   | menu 名字，用于手动触发开关 menu    | String |  -   |
| openMenu / closeMenu / toggleMenu(`rn only`)   | 用于手动开关 menu，参数为上边 menu 的 name. 使用示例见 demo  | Function(name) |  -   |

更多 API 可查看 [rc-tooltip](https://github.com/react-component/tooltip#api)

### Popover.Item

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| children   | 节点内容    | String/React.node |  -   |
| disabled   | 是否禁用    | Boolean |  false   |
| style  | item 样式    | Object |  -   |
| icon (`web only`)  | icon   | React.Node |  -   |
| value (`rn only`)  | 可作为选中的条目ID   | string/number |  -   |

---
category: Components
type: Navigation
title: Popover
---

After clicking on a control or an area, a Popover menu appears for doing more.
If set mask prop, it is recommended to exit by clicking on any of the mask layers.


## API

Support WEB, React-Native.

### Popover

Properties | Descrition | Type | Default
-----------|------------|------|--------
| visible (`web only`)   | visible state  | Boolean |  false   |
| onVisibleChange (`web only`)   | visible state change callback    | (visible: bool): void |  -   |
| placement (`web only`)   | enum{'left','right','top','bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight'} | String |  'bottomRight'   |
| popupAlign (`web only`)   | set offset, ref [dom-align](https://github.com/yiminghe/dom-align)'s `alignConfig`  | Object |  `{ overflow: { adjustY: 0, adjustX: 0 } }` (Disable position automatic adaptation) |
| mask (`web only`)   | Whether to display the mask background layer  | Boolean |  false  |
| overlay   | Popup layer content  | React.node |  -   |
| onSelect   | when an option is selected    | (node: any, index?: number): void |  -   |
| style  | set style  | Object |  -   |
| triggerStyle (`rn only`)   | trigger style  | Object |  -   |
| overlayStyle (`rn only`)   | overlay style  | Object |  -   |
| contextStyle (`rn only`)   | context style  | Object |  -   |
| renderOverlayComponent (`rn only`)   | A function that renders takes in the MenuOptions element and renders a container element that contains the options. Default function wraps options with a `ScrollView`. e.g. `(opts) => <Cus>{opts}</Cus>`  | (opts: any): React.Node |  -   |
| name (`rn only`)   | menu name, used for manual control   | String |  -   |
| openMenu / closeMenu / toggleMenu(`rn only`)   | Set the menu's open/close status, the parameter is menu name.  | Function(name) |  -   |

more available API can be found at [rc-tooltip](https://github.com/react-component/tooltip#api)

### Popover.Item

Properties | Descrition | Type | Default
-----------|------------|------|--------
| children   | children    | String/React.node |  -   |
| disabled   | set disabled    | Boolean |  false   |
| style  | item style   | Object |  -   |
| icon (`web only`)  | icon   | React.Node |  -   |
| value (`rn only`)  | can be used as the selected option ID  | string/number |  -   |

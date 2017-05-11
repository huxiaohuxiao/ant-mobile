---
category: Components
type: Data Entry
title: ImagePicker
---

注意：只是图片选择器，一般用于上传图片前的文件选择操作，但不包括图片上传的功能


## API

Support WEB, React-Native.

Properties | Descrition | Type | Default
-----------|------------|------|--------
| files    | 图片文件数组,元素为对象,包含属性 url（必选, 可能还有id, orientation, 以及业务需要的其它属性     | Array  | []  |
| onChange    | files 值发生变化触发的回调函数, operationType 操作类型有添加，移除，如果是移除操作，则第三个参数代表的是移除图片的索引  | (files: Object, operationType: string, index: number): void |   |
| onImageClick(`web only`)    | 点击图片触发的回调  | (index: number, files: Object): void |   |
| onAddImageClick(`web only`) | 自定义选择图片的方法  | (): void |   |
| selectable(`web only`) | 是否显示添加按钮  | boolean |  true |

> 注: RN 版本回传 assets-library (性能考虑)，需要使用 native 模块进行上传，可参考 https://github.com/facebook/react-native/issues/201

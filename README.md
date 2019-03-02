# 小程序设计

因为小程序页面无法直接渲染markdown语法，因此使用了towxml，可以将markdown文件的内容自动转化为小程序页面的

因为课程内容尚未公开，因此仅展示部分截图

## 开发经历

技术栈：
- 用markdown来展现ppt的内容
- 用towxml将markdown文件转化成wxml
- 用小程序的云端储存markdown文件和图片资源
- 用云端数据库存储课程章节对应的文件的url

用户进入主界面点击课程章节后根据url获取markdown文件并渲染，头部的按钮可以下载相应文件。


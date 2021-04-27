### 2021-4-27
##### 完善webpack.ProvidePlugin与ts类型定义文件冲突的问题

### 2021-4-7
##### 完善项目说明

### 2021-4-6
##### 新增eslint
##### 采用的是eslint-webpack-plugin插件
##### 新增.eslintrc的配置

### 2021-3-1
##### 新增公共常用的css

### 2021-1-5
##### 新增px转rem的方法

### 2020-12-23
##### 新增单元测试的jest

### 2020-12-7
##### 重新优化

****
### webpack（打包工具）+react（框架）+typescript（语言）+eslint（语法检测）+jest（测试）
1. webpack（整体）：
    - webpack（本质）
    - webpack-cli（核心库）
2. webpack（插件）：
    - webpack-dev-server（webpack服务器）
    - webpack-merge（合并webpack配置文件）
    - html-webpack-plugin（操作html，在html里引入文件等）
    - clean-webpack-plugin（清除打包文件）
    - copy-webpack-plugin（复制指定文件）
    - eslint-webpack-plugin（载入eslint）
3. webpack（css）：
    - css-loader（载入css）
    - style-loader（把css插入到dom里的style里）
    - postcss-loader（载入css插件）
    - autoprefixer（添加css前缀等）
    - postcss-px-to-viewport（px转vw）
    - postcss-pxtorem（px转rem）
    - mini-css-extract-plugin（把css提取到文件当中）
    - optimize-css-assets-webpack-plugin（css缩小）
4. webpack（其他插件）：
    - ts-loader（ts载入器）
    - url-loader（url载入器，包括图片、文件）
    - file-loader（url-loader的依赖）
5. react：
    - react（本质）  
    - react-dom（核心库）
6. eslint：
    - eslint（本质）  
    - @typescript-eslint/parser（typescript-eslint解析器）  
    - @typescript-eslint/eslint-plugin（typescript-eslint插件）  
    - eslint-plugin-react（eslint的react解析器）  
    - eslint-plugin-react-hooks（eslint的react-hooks解析器）  
7. jest：
    - jest（本质）
    - jest-junit（获取测试报告）
    - @types/jest（typescript的jest）
    - @types/node（typescript的node）
    - @types/react（typescript的react）
    - @types/react-dom（typescript的react-dom）

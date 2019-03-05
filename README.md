# SOFA-Vue
[![](https://travis-ci.org/SFTC/sofa.svg?branch=master)](https://travis-ci.org/SFTC/sofa)
[![Coverage Status](https://coveralls.io/repos/github/SFTC/sofa/badge.svg?branch=master)](https://coveralls.io/github/SFTC/sofa?branch=master)

Vue Components

## 1. 开发要点

### 1.1 启动开发

``` sh
npm run start;
```

### 1.2 代码组织

使用lerna，建议每个组件维度独立发包，每个组件在packages文件下单独建文件夹，且符合npm规范（之后会有自动化脚手架工具用于新建）；

### 1.3 样式

样式控制在'/packages/sofa-theme'，统一样式控制；

* common/main，为核心样式核心变量文件，此文件主要控制整体颜色，通用样式；注意此文件不设置样式，只设置变量；
* common/detail，为详细样式变量文件，细节至某个组件的样式变量，注意此文件不设置样式，只设置变量；
* common/mixin，通用mixin文件；注意此文件仅包含mixin；
* common/name，bem命名控制文件；此文件仅包含bem命名相关mixin, function等；

#### 1.3.1 开发流程

1. 新建组件同名scss文件，放置于'sofa-theme/src'，例如button.scss;
2. 在index.scss入口文件中引入新组件样式文件;
3. 在新建scss文件中开始写样式，注意bem及mixin的使用，要求样式撰写清晰明了;

### 1.4 展示站

开发模式下运行的即为展示站，代码路径为'./site'；

``` sh
npm run start
```

#### 1.4.1 开发流程

1. 每个组件在展示站中单独建page，路径'site/src/pages';
2. 注意路由配置；
3. 提供了组件 *CompShowContainer* 作为统一的组件放置容器，具体使用方式如下；

``` javascript
  <comp-show-container>
    <div class="buttons">
      <sofa-button type="danger" size="small" disabled>测试一下</sofa-button>
      <sofa-button type="danger" size="small" loading>测试一下</sofa-button>
      <sofa-button type="danger" size="small" plain>测试一下</sofa-button>
      <sofa-button type="danger" size="small" round>测试一下</sofa-button>
      <sofa-button type="danger" size="small" circle>测</sofa-button>
    </div>
  </comp-show-container>

  <comp-show-container showClass>
    <i class="sofa-icon-loading"></i>
  </comp-show-container>
```

### 1.5 内部包服务

为了方便内部发布npm，我搭建了内部的包服务器，详情见[内部cnpm服务说明](http://10.188.40.14:7002/package/@sftc/lichun);

已完成了button的发包，详细发布及使用信息如下；

```sh
cnpm set registry http://10.188.40.14:7001
cnpm login
cnpm publish

cnpm i @sftc/sofa-button
```

### 1.6 编译

coming soon;

#### 1.6.1 发布

简单发布脚本已完成，更完备的coming soon;

### 1.7 静态代码检查

静态代码检查依旧使用的 *airbnb* 静态检查规则，另加入了一些规则禁用，详情见配置文件；

### 1.8 持续集成

使用的github提供的 *Travis-ci* 作为持续集成工具，当前仅在提交代码时运行 *npm run test* 命令，并产出测试覆盖率文件，后期会加入更多的集成规则；

#### 1.8.1 自动化测试 JEST

使用JEST作为单元测试工具，撰写完备的单元测试用例，对于组件库，测试覆盖率需要达到90%+；

#### 1.8.2 测试覆盖率检查 coveralls

使用github提供的 *coveralls* 作为测试覆盖率检查工具，对于组件库，测试覆盖率需要达到90%+；

### 1.9 自动初始化工具

自动初始化组件packages包，展示站相关路由、页面初始化；coming soon；

### 1.10 TypeScript

typescript分支使用的ts作为开发语言，会尽快合并到master；

## 2. 开发计划

| 事项 | 排期 | 人员 | 状态 |
|---------- |-------- |---------- |---------- |
| 内部npm服务器搭建 | 03.29-03.29 | 李淳 | 已完成 |
| 整体框架搭建 | 04.02-04.08 | 李淳 | 已完成 |
| typescript引入 | 04.08-04.08 | 雨扬 | 已完成 |
| 整体UI设计 | 04.09-04.13 | 张宁、李淳、新国 | 待启动 |
| 组件开发（组件、用例、展示站） | ~~04.04-04.30~~ 04.09-05.04 | 李淳、张静、雅祺、杨洋、雨扬、张宁 | 进行中 |

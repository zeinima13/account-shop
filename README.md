# Account Shop

一个简单的账号批发网站，支持商品分类、下单支付等功能。

## 功能特点

- 商品分类展示
- 商品库存管理
- 支持USDT支付
- 后台商品管理
- 移动端友好

## 开发环境设置

1. 安装依赖:
```bash
npm install
```

2. 运行开发服务器:
```bash
npm run serve
```

3. 构建生产版本:
```bash
npm run build
```

## 目录结构

```
account-shop/
├── src/
│   ├── views/           # 页面组件
│   │   ├── Shop.vue     # 商城首页
│   │   ├── Payment.vue  # 支付页面
│   │   └── admin/      # 管理后台
│   ├── router/         # 路由配置
│   └── App.vue         # 根组件
├── package.json        # 项目依赖
└── README.md          # 项目说明
```

## 页面说明

- `/`: 商城首页，显示商品分类和商品列表
- `/payment`: 支付页面，支持多种USDT支付方式
- `/admin/products`: 商品管理后台，支持商品的增删改查和上下架

## 技术栈

- Vue 3
- Vue Router
- Element Plus
- Axios

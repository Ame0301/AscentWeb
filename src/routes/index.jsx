/**
 * （0）登录、注册
 *  管理员
 * （1）邮件管理
 * （2）商品管理
 * （3）用户管理
 *  普通用户
 * （4）商品浏览和商品查询
 * （5）购物车管理
 * （6）订单管理
 */

import { Navigate } from 'react-router-dom'

// 登录、注册
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
// 管理员
import Email from '../pages/Email'
import ProductsManage from '../pages/ProductsManage'
import ProductItem from '../pages/ProductItem'
import Users from '../pages/Users'
import UserItem from '../pages/UserItem'
// 普通用户
import ProductsShow from '../pages/ProductsShow'
import Cart from '../pages/Cart'
import Orders from '../pages/Orders'
import OrderItem from '../pages/OrderItem'
// 404
import Error from '../pages/Error'

// icon 图表
import { ShoppingCartOutlined /* 购物车 */, TeamOutlined /* 用户管理 */, MailOutlined /* 邮件管理 */, ShoppingOutlined /* 商品管理 */, ShopOutlined /* 商品浏览 */ } from '@ant-design/icons'


export default [
    // （0）登录、注册（分管理员和普通用户 -- 选择）
    {
        path: '/signin',
        element: <SignIn />
    },
    {
        path: '/signup',
        element: <SignUp />
    },

    // 管理员
    {
        path: '/admin',
        element: <Navigate to="/admin/products" />
    },
    // （1）商品管理
    {
        path: '/admin/products',
        name: '商品管理',
        element: <ProductsManage />,
        isShow: true,
        icon: <ShopOutlined />,
    },
    {
        path: "/admin/products/:productId", //路径,携带参数: 商品ID
        element: <ProductItem />,
        isShow: false
    },
    // （2）用户管理
    {
        path: '/admin/users',
        name: '用户管理',
        element: <Users />,
        isShow: true,
        icon: <TeamOutlined />,
    },
    {
        path: '/admin/users/:userId',
        name: 'UserItem',
        element: <UserItem />,
        isShow: false
    },
    // （3）邮件管理
    {
        path: '/admin/email',
        name: '邮件管理',
        element: <Email />,
        isShow: true,
        icon: <MailOutlined />,
    },

    // 普通用户
    {
        path: '/user',
        element: <Navigate to="/user/products" />
    },
    // （4）商品浏览和商品查询
    {
        path: '/user/products',
        name: '商品浏览',
        element: <ProductsShow />,
        isShow: true,
        icon: <ShopOutlined />,
    },
    {
        path: "/user/products/:productId", //路径,携带参数: 商品ID
        name: 'ProductItem',
        element: <ProductItem />,
        isShow: false
    },
    // （5）购物车管理
    {
        path: '/user/cart',
        name: '购物车管理',
        element: <Cart />,
        isShow: true,
        icon: <ShoppingCartOutlined />,
    },
    // （6）订单管理
    {
        path: '/user/orders',
        name: '订单管理',
        element: <Orders />,
        isShow: true,
        icon: <ShoppingOutlined />,
    },
    {
        path: '/user/orders/:orderId',
        name: 'OrderItem',
        element: <OrderItem />,
        isShow: false
    },

    // 初始页面 跳转至登录
    {
        path: '/',
        element: <Navigate to="/signin" />
    },

    // 错误页面
    {
        path: '*',
        element: <Error />
    }
]
import Vue from 'vue';
import Router from 'vue-router';

const Index = () => import( '@/views/Index/Index');
// r => require.ensure([], () => r(require('@/views/Index/Index')), 'Index');     //主页
const Search = () => import('@/views/search/search'); // 查找组件
const Location = () => import('@/views/location/location'); // 定位
const Home = () => import('@/views/home/home'); // 我的
const Order = () => import('@/views/order/order'); // 订单
const Login = () => import('@/views/login/login'); // 登录
const Store = () => import('@/views/store/store'); // 商店
const Menu = () => import('@/views/store/menu/menu'); // 菜单
const Comment = () => import('@/views/store/comment/comment'); // 商店评价页
const Seller = () => import('@/views/store/seller/seller'); // 商家信息
const ConfirmOrder = () => import('@/views/confirmOrder/confirmOrder'); // 确认下单
const Address = () => import('@/views/confirmOrder/children/address'); // 收货地址
const Add_Address = () => import('@/views/confirmOrder/children/children/add_Address'); // 添加收货地址
const Pay = () => import('@/views/pay/pay'); // 支付
const Cart = () => import('@/views/cart/cart'); // 购物车
const OrderDetail = () => import('@/views/order/orderDetail'); // 订单详情
const Category = () => import('@/views/category/category'); // 食物分类
const MyAddress = () => import('@/views/home/children/address'); // 我的收货地址
const MakeComment = () => import('@/views/order/comment'); // 作评论

const Collection = () => import('@/views/home/children/collection'); // 我的收藏
const ThankRecord = () => import('@/views/home/children/thankRecord'); // 答谢记录
const FootPrint = () => import('@/views/home/children/footprint'); // 答谢记录
const Friend = () => import('@/views/home/children/friend'); // 我的好友
const MyComment = () => import('@/views/home/children/comment'); // 我的评论
const Error = () => import('@/views/404/error'); // 404
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: '首页',
      component: Index,
      meta: {keepAlive: true}
    },
    {
      path: '/category',
      name: '分类',
      component: Category
    },
    {
      path: '/order',
      name: '我的订单',
      component: Order,
      children: [
        {
          path: 'comment',
          name: '作评价',
          component: MakeComment
        }
      ]
    },
    {
      path: '/search',
      name: '搜索商家',
      component: Search
    },
    {
      path: '/location',
      name: '定位',
      component: Location
    },
    {
      path: '/add_address',
      name: '添加地址',
      component: Add_Address,
      children: [
        {
          path: 'location',
          name: '地址定位',
          component: Location
        }
      ]
    },
    {
      path: '/home',
      name: '我的',
      component: Home,
      keepAlive: true,
      children: [
        {
          path: 'address',
          name: '我的收获地址',
          component: MyAddress
        },
        {
          path: 'collection',
          name: '我的收藏',
          component: Collection
        },
        {
          path: 'thank',
          name: '答谢记录',
          component: ThankRecord
        },
        {
          path: 'footprint',
          name: '我的足迹',
          component: FootPrint
        },
        {
          path: 'friend',
          name: '我的好友',
          component: Friend
        },
        {
          path: 'comment',
          name: '我的评论',
          component: MyComment
        }
      ]
    },
    {
      path: '/login',
      name: '登录',
      component: Login
    },
    {
      path: '/confirmOrder',
      name: '确认订单',
      component: ConfirmOrder,
      children: [{
        path: 'address',
        name: '订单收货地址',
        component: Address
      }]
    },
    {
      path: '/store',
      component: Store,
      children: [
        {
          path: 'menu',
          name: '菜单',
          component: Menu
        },
        {
          path: 'comment',
          name: '评论',
          component: Comment
        },
        {
          path: 'seller',
          name: '商家信息中心',
          component: Seller
        },
        {
          path: '',
          redirect: '/store/menu'
        }
      ]
    },
    {
      path: '/cart',
      name: '购物车',
      component: Cart
    },
    {
      path: '/pay',
      name: '支付',
      component: Pay
    },
    {
      path: '/order_detail',
      name: '订单详情',
      component: OrderDetail
    },
    {
      path: '/error',
      name: '找不到该页面',
      component: Error
    },
    {
      path: '*',
      redirect: '/error'
    }
  ]
});

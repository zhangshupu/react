//一级路由
import Home from '../components/Home';
import Xiangqing from '../components/Xiangqing'

// 二级路由
import Child from '../components/view/Child'
import Homer from '../components/view/Homer'
import More from '../components/view/More'

export default {
    routes: [{
            path: '/home',
            component: Home,
            children: [{
                path: '/home/child',
                component: Child,
            }, {
                path: '/home/homer',
                component: Homer,
            }, {
                path: '/home/more',
                component: More,
            }]
        },
        {
            path: '/xiangqing',
            component: Xiangqing,
        }
    ]
}
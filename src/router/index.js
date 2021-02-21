import Vue from 'vue'
import Router from 'vue-router'
import start from '@/pages/start/start'
import index from '@/pages/index/index'
import particulars from '@/pages/particulars/particulars'
import search from '@/pages/search/search'
import register from '@/pages/register/register'
import my from '@/pages/my/my'
import ticket from '@/pages/my/myTicket'
import vipRights from '@/pages/my/vipRights'
import myInvitation from '@/pages/my/myInvitation'
import myTutor from '@/pages/my/myTutor'
import rests from '@/pages/rests/rests';
import AboutUs from '@/pages/rests/AboutUs'
import required from '@/pages/rests/required'
import faq from '@/pages/rests/faq'
import useRaiders from '@/pages/rests/useRaiders'
import service from '@/pages/rests/service'
import member from '@/pages/member/member'
import certification from '@/pages/certification/certification'
import share from '@/pages/share/share'
import shareParticulars from '@/pages/share/shareParticulars'
Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'start',
            component: start
        }, {
            path: '/index',
            name: 'index',
            component: index
        }, {
            path: '/particulars/:list/:userId',
            name: 'particulars',
            component: particulars
        }, {
            path: '/search',
            name: 'search',
            component: search
        }, {
            path: '/my',
            name: 'my',
            component: my
        }, {
            path: '/register',
            name: 'register',
            component: register
        }, {
            path: '/rests',
            name: 'rests',
            component: rests
        }, {
            path: "/AboutUs",
            name: "AboutUs",
            component: AboutUs
        }, {
            path: '/required',
            name: 'required',
            component: required
        }, {
            path: '/faq',
            name: 'faq',
            component: faq
        }, {
            path: "/useRaiders",
            name: "useRaiders",
            component: useRaiders
        }, {
            path: "/service",
            name: "service",
            component: service
        }, {
            path: "/member",
            name: "member",
            component: member
        }, {
            path: "/ticket",
            name: "ticket",
            component: ticket
        }, {
            path: "/vipRights",
            name: "vipRights",
            component: vipRights
        }, {
            path: "/myInvitation",
            name: "myInvitation",
            component: myInvitation
        }, {
            path: "/myTutor",
            name: "myTutor",
            component: myTutor
        }, {
            path: "/certification",
            name: "certification",
            component: certification
        }, {
            path: "/share",
            name: "share",
            component: share
        }, {
            path: "/carnival/:list",
            name: "carnival",
            component: () =>
                import ("@/pages/activity/carnival")
        }, {
            path: "/withdraw",
            name: "withdraw",
            component: () =>
                import ("@/pages/withdraw/withdraw")
        }, {
            path: "/withdrawParticulars/:list",
            name: "withdrawParticulars",
            component: () =>
                import ("@/pages/withdraw/particulars")
        }, {
            path: "/withdrawrecord",
            name: "withdrawrecord",
            component: () =>
                import ("@/pages/withdraw/record")
        }, {
            path: "/withdrawsucceed",
            name: "withdrawsucceed",
            component: () =>
                import ("@/pages/withdraw/succeed")
        }, {
            path: "/shareParticulars/:list/:userId",
            name: "shareParticulars",
            component: shareParticulars
        }, {
            path: "/sharePaySuccess/:introducenum/:userId",
            name: "sharePaySuccess",
            component: () =>
                import ("@/pages/share/paySuccess")
        },
        {
            path: "/promotion",
            name: "promotion",
            component: () =>
                import ("@/pages/promotion/promotion")
        }, {
            path: "/myAward",
            name: "myAward",
            component: () =>
                import ("@/pages/my/myAward")
        }, {
            path: "/tutor",
            name: "tutor",
            component: () =>
                import ("@/pages/tutor/tutor")
        }, {
            path: "/avaSVa",
            name: "avaSVa",
            component: () =>
                import ("@/pages/avaSVa")
        }, {
            path: '/myFans',
            name: "myFans",
            component: () =>
                import ("@/pages/my/myFans")
        }, {
            path: '/City',
            name: "City",
            component: () =>
                import ("@/pages/city/City")
        }
    ]
})
export default{
    path:"/cinema",
    component:() => import ('@/views/Cinema') ,
    children: [
        {
        path : 'allCity',
        component:() => import ('@/components/AllCity') ,

    },
    {
        path : 'log',
        component:() => import ('@/components/Log') ,

    }, 
    {
        path : 'feature',
        component:() => import ('@/components/Feature') ,

    },
   
    {
        path:"/cinema",
        redirect:"/cinema/allCity"
    }
    ]    
}
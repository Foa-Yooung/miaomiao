<template>
    <div id="main" >
        <Header title="喵喵电影"/>
        <TabBar />   
    </div>
</template>

<script>

import Header from '@/components/Header/index.vue';
import TabBar from '@/components/TabBar/index.vue';

export default {
    name:'Movie',
    components:{
        Header,
        TabBar
    }
}
</script>

<style >

</style>

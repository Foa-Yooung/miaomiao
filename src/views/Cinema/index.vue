<template>
    <div id="main" >
        <Header title="喵喵影院"/>
        <div id="content">
			<div class="cinema_menu">
				<router-link tag="div" to="/cinema/allCity" class="city_switch">
					全城 <i class="iconfont icon-lower-triangle"></i>
				</router-link>

				<router-link tag="div" to="/cinema/log" class="brand_swtich">
					品牌 <i class="iconfont icon-lower-triangle"></i>
				</router-link>

				<router-link tag="div" to="/cinema/feature" class="feature_switch">
					特色 <i class="iconfont icon-lower-triangle"></i>
				</router-link>
			</div>
            <keep-alive>
                <router-view/>
            </keep-alive>
            </div>
        <TabBar />   
    </div>
</template>

<script>

import Header from '@/components/Header/index.vue';
import TabBar from '@/components/TabBar/index.vue';
import AllCity from '@/components/AllCity/index.vue';
import Feature from '@/components/Feature/index.vue';
import Log from '@/components/Log/index.vue';


export default {
    name:'Cinema',
    components:{
        Header,
        TabBar,
        AllCity,
        Feature,
        Log
    }
}
</script>

<style scoped>

#content .cinema_menu{ width: 100%; height: 45px; border-bottom:1px solid #e6e6e6; display: flex; justify-content:space-around; align-items:center; background:white;}
</style>
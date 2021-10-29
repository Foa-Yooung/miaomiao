<template>
    <div class="movie_body">
	   <Loading v-if="isLoading"/>

		<Scroller v-else :handleToScroll="handleToScroll" :handleToTouchEnd ="handleToTouchEnd">
			<div>
				<ul>
					<li class="pullDown">{{pullDownMsg}}</li>

					<li v-for="item in comingList" :key="item.id">
						<div class="pic_show"  @tag="handleToDetail">
							<img :src="item.img | setWH('128.180')  ">
							</div>
						<div class="info_list">
							<h2>{{item.nm}}</h2>
							<p>观众评 <span class="grade">{{item.sc}}</span></p>
							<p>主演: {{item.star}}</p>
							<p>{{item.showInfo}}</p>
						</div>
						<div class="btn_mall">
							预定
						</div>
					</li>
				</ul>	
			</div>	
		</Scroller>
        </div>   	
				
			
		
</template>

<script>

export default ({
    name:"ComingSoon",
	data(){
		return{
			comingList:[],
			pullDownMsg:'',
			isLoading:true,
		}
	},
	mounted(){
		this.axios.get("/ajax/movieOnInfoList").then((res)=>{
			console.log(res);
			this.comingList = res.data.movieList;
			this.isLoading = false;	
		})
	},
	methods:{
		handleToDetail(){
			console.log(handleToDetail);
		},

		handleToScroll(pos){
			if(pos.y > 30){
			 	this.pullDownMsg = '正在刷新';
			}
		},

		handleToTouchEnd(pos){
			if(pos.y > 30){
				this.axios.get('/ajax/movieOnInfoList').then((res)=>{
				this.pullDownMsg = '刷新成功';
				setTimeout(()=>{
					this.movieList = res.data.movieList;
					this.pullDownMsg=''
				},500)
			})
			}
		},
	}
	
})
</script>

<style scoped>
#content .movie_body{ flex:1; overflow:auto;}
.movie_body ul{ margin:0 12px; overflow: hidden;}
.movie_body ul li{ margin-top:12px; display: flex; align-items:center; border-bottom: 1px #e6e6e6 solid; padding-bottom: 10px;}
.movie_body .pic_show{ width:64px; height: 90px;}
.movie_body .pic_show img{ width:100%;}
.movie_body .info_list { margin-left: 10px; flex:1; position: relative;}
.movie_body .info_list h2{ font-size: 17px; line-height: 24px; width:150px; overflow: hidden; white-space: nowrap; text-overflow:ellipsis;}
.movie_body .info_list p{ font-size: 13px; color:#666; line-height: 22px; width:200px; overflow: hidden; white-space: nowrap; text-overflow:ellipsis;}
.movie_body .info_list .grade{ font-weight: 700; color: #faaf00; font-size: 15px;}
.movie_body .info_list img{ width:50px; position: absolute; right:10px; top: 5px;}
.movie_body .btn_mall , .movie_body .btn_pre{ width:47px; height:27px; line-height: 28px; text-align: center; background-color: blue; color: #fff; border-radius: 4px; font-size: 12px; cursor: pointer;}
.movie_body .btn_pre{ background-color: #3c9fe6;}
.movie_body .pullDown{margin: 0;padding: 0;border:none ;}

</style>

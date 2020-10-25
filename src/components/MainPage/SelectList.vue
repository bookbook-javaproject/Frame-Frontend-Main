<template>

  <div class="selectList-Container">
    <router-link to="/trending" >
        <span v-on:click="SelectedItem(1)"  to="/trending"  v-bind:class="{selectListItemClicked: SelectItem1}" class="selectList-item">
            <img :src="trendingIcon" /> 
            <div>트렌딩</div>
        </span>
    </router-link>
        <span v-on:click="SelectedItem(2)" to="/recent" v-bind:class="{selectListItemClicked: SelectItem2}" class="selectList-item">
            <img :src="recentIcon" /> 
            <div>최신</div>
        </span>
        <span  v-on:click="SelectedItem(3)" to="/notice" v-bind:class="{selectListItemClicked: SelectItem3}"  class="selectList-item">
            <img :src="noticeIcon" /> 
            <div>공지사항</div>
        </span>
  </div>
</template>

<script>
    import {trendingIcon, recentIcon, noticeIcon} from '@/assets/img';

export default {
    data(){
        return{
        trendingIcon, recentIcon, noticeIcon,
        SelectItem1:true,
        SelectItem2:false,
        SelectItem3:false

        }
    },
    methods:{
        SelectedItem(e){
            if(e === 1 && !this.SelectItem1) {
                 this.SelectItem1 = !this.SelectItem1;
                 this.SelectItem2 = false
                 this.SelectItem3 = false
            }
            else if(e === 2 && !this.SelectItem2){
                 this.SelectItem2 = !this.SelectItem2;
                 this.SelectItem1 = false
                 this.SelectItem3 = false

            }
            else if(e === 3 && !this.SelectItem3) {
                 this.SelectItem3 = !this.SelectItem3;
                 this.SelectItem2 = false
                 this.SelectItem1 = false

            }
            else{
                alert(" 보시고 계신 페이지입니다.")
            }

        }
    }

}
</script>

<style>
.selectList-Container{
    display:flex;
    flex-direction: row;
    width: 30rem;
    justify-content: space-around;
    

}
.selectList-item{
    display:flex;
    flex-direction: row;
    align-items: center;
    color: #0F4C81;
    cursor: pointer;
    padding-bottom: 0.5rem;
    margin-bottom: 0.5rem;
}
.selectListItemClicked{
    border-bottom: 3px solid #0F4C81;
    
}
.selectList-item div{
    margin-left: 1rem;
}
</style>
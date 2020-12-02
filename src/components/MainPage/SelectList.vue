<template>

  <div class="selectList-Container">
        <span v-on:click="SelectedItem(1)"    v-bind:class="{selectListItemClicked: SelectItem1}" class="selectList-item">
            <img :src="trendingIcon" /> 
            <div>트렌딩</div>
        </span>
        <span v-on:click="SelectedItem(2)"  v-bind:class="{selectListItemClicked: SelectItem2}" class="selectList-item">
            <img :src="recentIcon" /> 
            <div>최신</div>
        </span>
        <span  v-on:click="SelectedItem(3)"  v-bind:class="{selectListItemClicked: SelectItem3}"  class="selectList-item">
            <img :src="noticeIcon" /> 
            <div>공지사항</div>
        </span>
  </div>
</template>

<script>
    import {trendingIcon, recentIcon, noticeIcon} from '@/assets/img';
    import router from '@/router';
export default {
    data(){
        return{
        trendingIcon, recentIcon, noticeIcon,
            SelectItem1:false,
            SelectItem2:false,
            SelectItem3:false,
         

        }
    },
    created:function(){
            let path = window.location.pathname;
            if(path ==="/"){
                this.SelectItem1=true
            }
            else if(path ==="/recent"){
                this.SelectItem2=true
            }
            else if(path ==="/notice"){
                this.SelectItem3=true
            }
            else{
                this.SelectItem1=false
                this.SelectItem2=false
                this.SelectItem3=false
            }
    },
    watch:{
            '$route'(to) {
               
            if( to.fullPath ==="/"){
                this.SelectItem1=true
                this.SelectItem2=false
                this.SelectItem3=false

            }
            else if( to.fullPath ==="/recent"){
                this.SelectItem2=true
                this.SelectItem1=false
                this.SelectItem3=false

            }
            else if( to.fullPath ==="/notice"){
                this.SelectItem3=true
                this.SelectItem2=false
                this.SelectItem1=false

            }
            else{
                this.SelectItem1=false
                this.SelectItem2=false
                this.SelectItem3=false
            }
                
            }
    },
    methods:{
        SelectedItem(e){
            if(e === 1 && !this.SelectItem1) {
                router.push('/');

            }
            else if(e === 2  && !this.SelectItem2){
                router.push('/recent');

            }
            else if(e === 3 && !this.SelectItem3 ) {
                 router.push('/notice');
            }
        }
      }
    }

</script>

<style>
.selectList-Container{
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    width: 26%;

}
.selectList-item{
    display:flex;
    flex-direction: row;
    align-items: center;
    color: #0F4C81;
    cursor: pointer;
    padding-bottom: 1rem;
    margin-bottom: 1rem;
        opacity: 0.3;

}
.selectListItemClicked{
    border-bottom: 3px solid #0F4C81;
    padding-bottom: -3px;
        opacity: 1;

}
.selectList-item div{
    margin-left: 1rem;
}

</style>
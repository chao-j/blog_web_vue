<template>
    <div class="container">
        <div class="header">
            <div class="data-box">
                已经写了<span class="data-num">{{infoData.kind}}</span>类
                <span class="data-num">{{infoData.total}}</span>篇笔记
            </div>
        </div>
        <div class="tag-box">
            <span v-for="(item,index) of tagList" :key="index" class="tag">{{item}}</span>
        </div>
    </div>
</template>
<script>
export default {
    name:'InfoCard',
    data(){
        return {
            infoData:{
                total:81,
                kind:7
            },
            tagList:[
                'Vue','SSM',"数据结构","Java","JavaScript","Unity",'Vue','SSM',"数据结构","Java","JavaScript","Unity",'Vue','SSM',"数据结构","Java","JavaScript","Unity"
            ],
            // scrollTop:0
        }
    },
    mounted() {
        // window.onscroll = e => {
        // this.scrollTop = document.documentElement.scrollTop
        // };
    },
}
</script>
<style scoped>
    .container{
        width: 60%;
        height: auto;
        border-radius: 20px;
        border: dashed 1px #ffaa71;
        box-shadow: 0 0 0 10px rgba(241, 243, 248,0.8);
        /* box-shadow: 2px 2px 5px #888; */
        /* border: 1px solid red; */
        margin: 30px auto;
        padding: 20px;
        background-color: rgba(241, 243, 248,0.8);
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        flex-wrap: wrap;
        transition: background-color .3s;
    }
    .container:hover{
        background-color: rgba(241, 243, 248,1);
        transition: background-color .3s;
    }
    .avatar{
        width: 50px;
        height: 50px;
    }

    .header{
        text-align: center;
        flex: 0 0 auto;
    }
    .data-num{
        font-size: 2.5em;
        box-sizing: border-box;
        border-bottom: 1px dashed #ffaa71;
        color: #ffaa71;
    }
    .tag-box{
        flex: 0 0 auto;
        display: flex;
        justify-content: center;;
        align-items: center;
        flex-wrap: wrap;
    }
    .tag{
        flex: 0 0 auto;
        margin: 10px 1em;
        box-sizing: border-box;
        border-bottom: 1px dashed transparent;
        user-select: none;
        color: #555;
    }
    .tag:hover{
        /* text-decoration: underline dashed #ffaa71; */
        border-bottom: #ffaa71 dashed 1px;
        color: #ffaa71;
    }
</style>
<template>
    <div class="container">
        <div class="header">
            <Icon type="md-attach" />
            <h2 style="display:inline-block">{{title}}</h2>
            <span class="side-btn">
                <Icon type="md-refresh" color="#ffaa71"/>
                换一批
            </span>
        </div>
        <ul class="note-list">
            <li v-for="(item,index) in list" :key="item.title">
                <h3>{{`# ${index+1}. ${item.title}`}}</h3>
                <p>{{item.desc}}</p>
                <div>
                    <Icon type="md-bookmark" color="#cdc9c3"/>
                    <small class="note-tag">{{item.tag}}</small>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:'NoteList',
    data(){
        return {
            // noteList:[
            // {title:'Vue-组件基础',tag:'Vue',desc:'HTML + CSS + JS + Vue，博主将收集到的前端学习网盘资源汇总成了可以搜索的列表。点击链接，就会同时将密码复制到剪切板，直接粘贴即可。'},
            // {title:'作用域和闭包',tag:'JavaScript',desc:'HTML + CSS + JS + Vue，博主将收集到的前端学习网盘资源汇总成了可以搜索的列表。点击链接，就会同时将密码复制到剪切板，直接粘贴即可。'},
            // {title:'第三人称控制',tag:'Unity3D',desc:'HTML + CSS + JS + Vue，博主将收集到的前端学习网盘资源汇总成了可以搜索的列表。点击链接，就会同时将密码复制到剪切板，直接粘贴即可。'},
            // {title:'Vue Cli的用法',tag:'Vue',desc:'HTML + CSS + JS + Vue，博主将收集到的前端学习网盘资源汇总成了可以搜索的列表。点击链接，就会同时将密码复制到剪切板，直接粘贴即可。'}
        // ]
        }
    },
    props:{
        title:{
            type:String,
            default:'标题'
        },
        list:{
            type:Array
        }
    }
}
</script>
<style scoped>
    .container{
        background-color: rgba(255,255,255,0.6);
        border-radius: 20px;
        padding: 20px;
        transition: background-color .3s;
    }
    .container:hover{
        background-color: rgba(255,255,255,1);
        transition: background-color .3s;
    }
    .header{
        padding:5px;
        border-bottom: dashed 1px #555;
        display: flex;
        align-items: center;
        position: relative;
    }
    .side-btn{
        position: absolute;
        right: 2em;
        color: #ffaa71;
    }
    .note-list{
        padding: 1em 2em;
        list-style: none;
    }
    .note-list li{
        margin: 20px 0;
        padding-bottom: 5px;
        user-select: none;
        border-bottom: 1px solid  transparent;
    }
    .note-list li:hover{
        border-bottom: 1px dashed  #ffaa71;
    }
    .note-list li p{
        margin: 5px 0 0 0;
        color: #888;
        /* background-color: rgba(240,240,220,0.5); */
        padding: 5px;
    }
    .note-tag{
        color: #cdc9c3;
    }
</style>
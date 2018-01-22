<template>
    <div>
        <img v-lazy="item.media_data[0].wifi_img_url"/>
        <p class='play' @click='playOrPause' v-if="status=='play'">{{status}}</p>
    </div>
</template>

<script>
export default {
    props:['item'],
    data(){
        return{
            status: 'play'
        }
    },
    methods:{
        playOrPause(){
            this.status = 'pause';
            this.item.media_data[0].wifi_img_url = this.item.media_data[0].origin_img_url.origin_pic_url;    
        }
    }
}
</script>

<style scoped lang='stylus'>
    div{
        position relative
        img{
            width 100%
        }
        p{
            position absolute
            width 30px
            height 30px
            font-size 1.2rem
            line-height 30px
            text-align center
            top 50%
            left 50%
            transform translate(-50%,-50%)
            color white
            background-color rgba(0,0,0,.8)
            border-radius 999px
        }
    }
</style>

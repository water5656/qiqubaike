<template>
    <div>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="item of imgSrc">
                    <img :src='item.src'>
                    <p>{{item.title}}</p>
                </div>
                
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>

<script>
import Swiper from '../../static/swiper.min.js';
export default {
    data(){
        return{
            imgSrc:[
                {
                    src: 'http://bq-img.peco.uodoo.com/qiqu/img/buz/banner/eeda245f00be3a76aa94dae8c9bd9c97.jpg',
                    title: '日报里的万年龙套终于正式出道！'
                },
                {
                    src:'http://bq-img.peco.uodoo.com/qiqu/img/buz/banner/df85d84f4a3a17cefde5aa439ce12199.jpg',
                    title: '女子朋友圈刷到“男友和别人结婚”！跑到婚礼现场大闹，新郎被警方带走'
                }
            ]
        }
    },
    mounted(){
        var mySwiper = new Swiper ('.swiper-container', {
            loop: true,
            // 如果需要分页器
            pagination: '.swiper-pagination'
        }) 
    }
}
</script>

<style scoped lang='stylus'>
    .swiper-container{
        width: 100%;
        .swiper-wrapper{
            position relative
            img{
                width 100%
            }
            p{
                width 100%
                font-size 1.4rem
                position absolute
                bottom 5px
                color white
                background-color rgba(0,0,0,0.8)
            }
        }
    }
</style>

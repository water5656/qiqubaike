<template>
    <div v-height="50" style="overflow-y:auto">
        <vueSwiper></vueSwiper>
        <div class="main" v-for="item of list" :key="item.id">
            <div class="header">
                <p class="avatar fl">
                    <img :src="item.avatar">
                </p>
                <p class="nickname fl">{{item.user_name}}</p>
                <p class="jubao fr">舉報</p>
            </div>
            <div class="content">
                <p v-if="item.title">{{item.title}}</p>
                <!-- <img v-if="item.media_data[0].wifi_img_url" :src="item.media_data[0].wifi_img_url" alt=""> -->
                <gif v-if="item.media_data[0].format=='GIF'" :item='item'></gif>
                <png v-if="item.media_data[0].format=='PNG'" :item='item'></png>
                <jpeg v-if="item.media_data[0].format=='JPEG'" :item='item'></jpeg>
            </div>
            <hr style="margin:15px;">
            <div class="footer">
                <div class="like fl">
                    {{item.like_start+item._incrs.like}}
                </div>
                <div class="dislike fl">
                    {{item.dislike_start+item._incrs.dislike}}
                </div>
                <div class="recommand fr">
                    {{item.comment_total}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import vueSwiper from '../../components/swiper.vue'
import gif from '../../components/gif.vue'
import jpeg from '../../components/jpeg.vue'
import png from '../../components/png.vue'
export default {
    components:{
      vueSwiper,gif,jpeg,png
    },
    data(){
        return{
            list:[]
        }
    },
    created(){
        var vm = this;
        this.$http.get('../../../static/data.json').then(res=>{
            vm.list = res.data.mapList;
        })
    },
    directives: {
        height:{
            inserted(el,bind){
                $(el).css('height',$(window).height()-bind.value)
            }
        }
    }
}
</script>

<style scoped lang='stylus'>
    .main{
        width: 100%;
        padding 5px
        background-clip content-box
        background-color: #fff;
        overflow hidden
        .header{
            overflow hidden
            width 100%
            .avatar{
                margin 15px
                img{
                    width 30px
                    height 30px
                    border-radius 999px
                }
            }
            .nickname{
                margin 15px 0
                width 100px
                height 30px
                line-height 30px
                color #999
            }
            .jubao{
                border 1px solid #aaaaaa
                border-radius 5px
                width 40px
                height 20px
                text-align center
                line-height 20px
                margin 20px
                color #777
                font-size 1.2rem
            }
        }
        .content{
            overflow hidden
            width 100%
            p{
                font-size 1.6rem
                line-height 1.8rem
                margin 15px
            }
        }
        .footer{
            overflow hidden
            color #777
            .like{
                margin 0 30px 15px 30px
                padding-left 35px
                height 30px
                line-height 30px
                background url('../../assets/26_03.png') 0 0 no-repeat
                background-size 30px 30px
            }
            .dislike{
                margin 0 30px 15px 0
                padding-left 35px
                height 30px
                line-height 30px
                background url('../../assets/26_05.png') 0 0 no-repeat
                background-size 30px 30px
            }
            .recommand{
                margin 0 30px 15px 0
                padding-left 35px
                height 30px
                line-height 30px
                background url('../../assets/26_07.png') 0 0 no-repeat
                background-size 30px 30px
            }
        }
    }
</style>



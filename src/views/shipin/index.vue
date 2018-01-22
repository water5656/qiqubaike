<template>
    <div v-height="50" style="overflow-y:auto">
        <div class="main" v-for="item of videoList" :key="item.id">
            <div class="header">
                <p class="avatar fl">
                    <img src="http://image.uc.cn/s/uae/g/0q/avatar/38.png">
                </p>
                <p class="nickname fl">哈哈</p>
                <p class="jubao fr">舉報</p>
            </div>
            <div class="content">
                <video :src="item.videoSrc" width="100%" controls="controls">
                </video>
            </div>
            <hr style="margin:15px;">
            <div class="footer">
                <div class="like fl">
                    234
                </div>
                <div class="dislike fl">
                    12
                </div>
                <div class="recommand fr">
                    23222222
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            videoList:[{
                videoSrc:'http://files.blueairplus.com/iqiyi/《爱妆达人》第132期.mp4',
                title:'《爱妆达人》第132期',
                cur:'播放',
                id:'video1',
                volume:0.5
              },{
                videoSrc:'http://files.blueairplus.com/iqiyi/《爱妆达人》第132期.mp4',
                title:'《爱妆达人》第132期',
                cur:'播放',
                id:'video2',
                volume:0.9
              }]
        }
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
            video{
                width 100%
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
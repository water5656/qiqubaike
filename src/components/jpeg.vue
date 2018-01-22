<template>
    <img v-lazy="item.media_data[0].wifi_img_url" />
</template>

<script>
export default {
    props:['item']
}
</script>

<style scoped lang='stylus'>
    div{
        img{
            width 100%
        }
    }
</style>

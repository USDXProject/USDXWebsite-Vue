<template>
    <div style="overflow-x:hidden">
        <keep-alive v-if="$route.meta.keepAlive">
            <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive"></router-view>
    </div>
</template>

<style lang="scss">
    @import "./styles/main.scss";
    @import "./styles/responsive.scss";
</style>
<script type="text/javascript">
    import FastClick from 'fastclick';
    import "./styles/animate.min.css";
    import "./fonts/iconfont.css"

    export default {
        created(){
            this.$nextTick(()=>{
                FastClick.attach(document.body);
            })
        }
    }
</script>
<template>
    <div class="partenersBox">
        <h2 class="title">
            <i class="line_icon left_line"></i>
            <!--<span>PARTENERS</span>-->
            <i class="icon iconfont icon-partners"></i>
            <i class="line_icon right_line"></i>
        </h2>
        <div class="itemContainer">
            <ul class="itemContainer-pc" v-for="icon in iconPC">
                <li v-for="item in icon">
                    <a :href="item.link">
                        <img :src="item.img" alt="">
                    </a>
                </li>
            </ul>
            <ul class="itemContainer-mobile" v-for="icon in iconMobile">
                <li v-for="item in icon">
                    <a :href="item.link">
                        <img :src="item.img" alt="">
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script type="text/javascript">
    import homeData from '../data/home'
    const icon = homeData.icon;
    export default {
        data() {
            return {
                iconPC: [],
                iconMobile: []
            }
        },
        mounted() {
            this.setPCIcon();
            this.setMobileIcon();
        },
        methods: {
            setMobileIcon() {
                this.iconMobile = [icon.slice(0,3),icon.slice(3,6),icon.slice(6,9),icon.slice(9,12),icon.slice(12,15)];
            },
            setPCIcon() {
                this.iconPC = [icon.slice(0,5),icon.slice(5,10),icon.slice(10,15)];
            }
        }
    }
</script>

<style lang="scss">
    .partenersBox{
        .icon-partners{
            font-size: 26px;
            float: left;
            font-weight: normal;
            margin-left: 18px;
            margin-right: 18px;
            color: #fff;
            margin-top: 2px;
        }
    }
    @media screen and (max-width: 720px) {
        .partenersBox{
            .icon-partners{
                font-size: 20px;
            }
        }
    }

    
</style>

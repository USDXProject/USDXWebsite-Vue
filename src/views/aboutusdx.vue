<template>
    <div class="aboutUSDX clearfix">
        <div class="height66 height_mobile_120"></div>
        <h2 class="title clearfix">
            <i class="line_icon left_line"></i>
            <i class="icon iconfont icon-about_usdx"></i>
            <i class="line_icon right_line"></i>
        </h2>
        <div class="aboutContent-box">
            <div class="left_btn"  @click="run(-1)"><i class="icon iconfont icon-10qiehuanqizuo mobileHide" :class="{'active':cur != 0}"></i></div>
            <div class="right_btn" @click="run(1)"><i class="icon iconfont icon-9qiehuanqiyou mobileHide" :class="{'active':cur != 2}"></i></div>
            <div :key="index" v-for="(item,index) in aboutusdx" class="aboutContent" :class="{'phaseOneBox':index==0,'phaseTwoBox':index==1,'phaseThreeBox':index==2,'mobileShow':cur!=index}">
                
                <transition name="fade">
                    <div v-show="isMobile || cur==index" :class="{'mobileShow':cur!=index}" class="content">
                        <h2 v-html="item.h2"></h2>
                        <div class='line'></div>
                        <p v-for="i in item.p" v-html="i"></p>
                        <ul v-if="item.ul" class='phaseTwoDesc'>
                            <li :class="i.class" v-html="i.li" v-for="i in item.ul"></li>
                        </ul>
                        <div class="order">
                            <!--<a href="javascript:;" @click="run(-1)" class="swiperBtn swiperLeft mobileHide" :class="{'active':cur != 0}">
                                <i class="icon iconfont icon-left_arrow"></i>
                            </a>-->
                                <div class="number">
                                    <i class="icon iconfont big_number_font" :class="{'icon-one':index==0,'icon-two':index==1,'icon-three':index==2}"></i>
                                    &nbsp;<span class="small">/ </span><i class="small_number_font icon iconfont icon-three"></i>
                                </div>
                            <!--<a href="javascript:;" @click="run(1)" class="swiperBtn swiperRight mobileHide" :class="{'active':cur != 2}">
                                <i class="icon iconfont icon-right_arrow"></i>
                            </a>-->
                        </div>
                    </div>
                </transition>
                
                <div class="rightPicBox">
                    <div class="bottomBase">
                        <span class="txt" v-if="index ==0">USDT</span>
                        <span class="txt" v-if="index ==1">USDX</span>
                        <span class="txt" v-if="index ==2">USDX</span>
                    </div>
                    <transition leave-active-class="leave-mvleft" name="mvleft">
                        <div v-show="cur==0" class="topImage"></div>
                    </transition>
                    <transition leave-active-class="leave-mvleft" name="mvleft">
                        <div v-show="cur==1" class="topTwoImage"></div>
                    </transition>
                    <transition leave-active-class="leave-mvleft" name="mvleft">
                        <div v-show="cur==2" class="topThreeImage"></div>
                    </transition>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
    import aboutusdxData from '../data/home';

    export default {
        data() {
            return {
                cur: 0,
                aboutusdx: aboutusdxData.aboutusdx,
                isMobile: false
            }
        },
        mounted() {
            this.resize();
            window.addEventListener('resize',this.resize,false);
        },
        methods: {
            run(step) {
                var cur = this.cur + step;
                if (cur == -1 || cur == 3) {
                    return ;
                }
                this.cur = cur;
            },
            resize() {
                var w = window.innerWidth;
                this.isMobile = w<=720;
            }
        }
    }
</script>

<style lang="scss">
    .aboutUSDX{
        position: relative;
        .icon-about_usdx{
            font-size: 26px;
            float:left;
            font-weight: normal;
            float: left;
            margin-left: 18px;
            margin-right: 18px;
            color: #fff;
            margin-top: 6px;

        }
        .left_btn{
            z-index: 100;
            cursor: pointer;
            position: absolute;
            left: 28px;
            top:325px;
            i{font-size: 60px; opacity: 0.2;}
            i.active{opacity: 1;}
        }
        .right_btn{
            z-index: 100;
            cursor: pointer;
            position: absolute;
            right: 28px;
            top:325px;
            i{font-size: 60px; opacity: 0.2;}
            i.active{opacity: 1;}
        }
    }

    @media screen and (max-width: 720px) {
        .aboutUSDX{
            .icon-about_usdx{
                font-size: 20px;
            }
        }
    }
    .mvleft-enter-active{
        transition: all .6s linear;
    }
    .mvleft-enter{
        transform: translate3d(50%,0,0);
        opacity: 0;
    }
    .leave-mvleft{
        animation: mvleft 0.6s linear;
    }

    .fade-enter-active, .fade-leave-active{
        transition: all 1.2s ease;        
    }
    .fade-enter, .fade-leave-active{
        opacity: 0;
    }
    

    @keyframes mvleft{
        0%{
            opacity: 1;
            transform: translate3d(0,0,0);
        }
        100%{
            opacity: 0;
            transform: translate3d(-80%,0,0);
        }
    }
</style>

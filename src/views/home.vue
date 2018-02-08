<template>
    <div id="home" class="homeBox">
        <div class="topNav">
            <i class="icon iconfont icon-USDX-logo"></i>
            <div @click="navTab" class="navBar"></div>
            <ul class="clearfix mobileHide">
                <li v-for="(item,index) in nav"><a href="javascript:;" :class="{'active':curpage==index}" @click="to(item,index)" class="anchor-hd">{{item.content}}</a></li>
            </ul>
            <div class="navtab-box" :class="showNav?'active':''">
                <div class="navtab" :class="showNav?'active':''">
                    <div v-for="(item,index) in nav"><a href="javascript:;" :class="{'active':curpage==index}" @click="to2(item,index)" class="anchor-hd">{{item.content}}</a></div>
                </div>
            </div>
            
        </div>
        <div ref="nav-home" class="indexSection clearfix">
            <div class="height110 height_mobile_40"></div>
            <div class="indexBox">
                <div class="indexContent">
                    <h2><i class="icon iconfont icon-USDX"></i></h2>
                    <p>The Protocol for Decentralized<br/>
                        Stablecoin</p>
                    <a class="whitePaper" href="whitepaper/USDX Whitepaper 3.2V2.pdf" target="_blank">Whitepaper  Download</a>
                </div>

                <div class="indexBox-line">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
        <div ref="nav-about">
            <aboutusdx></aboutusdx>
        </div>
        <div ref="nav-phases">
            <phases></phases>
        </div>    

        <!--TEAM-->
        <div ref="nav-team" class="teamBox clearfix">
            <div class="height80 height_mobile_70"></div>
            <h2 class="title">
                <i class="line_icon left_line"></i>
                <i class="icon iconfont icon-team1"></i>
                <i class="line_icon right_line"></i>
            </h2>
            <div class="teamBg mobileHide">
                <i class="icon iconfont icon-team1"></i>
            </div>
            <div class="height60 height_mobile_120"></div>
                <div class="teamMember">
                    <!--team one-->
                    <div class="itemOne clearfix">
                        <div class="intro">
                            <h2>
                                <i class="icon iconfont icon-one big_number_font"></i>
                                &nbsp;<span class="small">/ </span><i class="small_number_font icon iconfont icon-four"></i>
                                &nbsp;&nbsp;&nbsp;&nbsp;<span class="title">Richard Tiutiun</span></h2>
                            <p class="mt2">Fanatical genius of blockchain <br/>technology and hacker born in Ukraine</p>
                            <p>Designed and developed XOR project<br/>and stablecoin lab after drop out from <br/> UC Berkley</p>
                            <p>Focus on the research of next generation <br/>of currency </p>
                        </div>
                        <div class="teamPic">
                            <img src="images/team_one.png"/>
                        </div>
                        <span class="bigCapitial"></span>
                    </div>
                    <div class="height56 height_moblie_10"></div>
                    <!--team two-->
                    <div class="itemTwo clearfix">
                        <div class="intro ">
                            <h2>
                                <i class="icon iconfont icon-two big_number_font"></i>
                                &nbsp;<span class="small">/ </span><i class="small_number_font icon iconfont icon-four"></i>
                                &nbsp;&nbsp;&nbsp;&nbsp;<span class="title">Lucas Porco</span></h2>
                            <p>Experienced lawyer focus on the<br/>compliance of blockchain and<br/>cryptocurrency </p>
                            <p>Ph.D candidate of Law at University of <br/>Toronto </p>
                            <p>Top-level participation in the design of <br/>legal frameworks for several <br/>cryptocurrencies </p>
                        </div>
                        <div class="teamPic">
                            <img src="images/team_two.png"/>
                        </div>
                        <span class="bigCapitial"></span>
                    </div>
                    <!--team three-->
                    <div class="itemThree clearfix">
                        <div class="intro">
                            <h2>
                                <i class="icon iconfont icon-three big_number_font"></i>
                                &nbsp;<span class="small">/ </span><i class="small_number_font icon iconfont icon-four"></i>
                                &nbsp;&nbsp;&nbsp;&nbsp;<span class="title">Michael Gord</span></h2>
                            <p>Professional blockchain consultant<br/>expert and product strategy expert</p>
                            <p>In charge of strategic planning, business<br/>expansion and cooperation with <br/>regulators, banks and other institutions</p>
                        </div>
                        <div class="teamPic">
                            <img src="images/team_three.png"/>
                        </div>
                        <span class="bigCapitial"></span>
                    </div>
                   <!--team four-->
                   <!--<div class="itemFour clearfix">
                        <div class="intro">
                            <h2>
                                <i class="icon iconfont icon-four big_number_font"></i>
                                &nbsp;<span class="small">/ </span><i class="small_number_font icon iconfont icon-four"></i>
                                &nbsp;&nbsp;&nbsp;&nbsp;<span class="title">Ada Tie</span></h2>
                            <p>Graduated from University of Toronto<br/>and London School of Economics</p>
                            <p>Not only a financial practitioner but also<br/>a brand expert</p>
                            <p>Rich brand and marketing experience in<br/>art curatorial, luxury marketing and<br/> private banking.</p>
                        </div>
                        <div class="teamPic">
                            <img src="images/team_four.png"/>
                        </div>
                        <span class="bigCapitial"></span>
                    </div>-->
                </div>
        </div>
        <div class="blueBg" ref="screen">
            <div ref="nav-advisors" class="hexagon-warp">
                <div class="advisorBox mobileHide">
                    <i class="icon iconfont icon-adivsor"></i>
                </div>
                <hexagon></hexagon>
            </div>
        </div>

        
        <div ref="nav-parteners">
            <div class="height80 height_mobile_70"></div>
            <parteners></parteners>
        </div>

        <footer class="footerBox">
            <div class="wrapper clearfix">
                <p class="bottomLogo">
                    <i class="icon iconfont icon-USDX-logo"></i>
                </p>
                <div class="clearfix linkBox">
                    <a href="https://twitter.com/NewMoneyUSDX"  class="icon icon_facebook"><i class="icon iconfont icon-twitter"></i></a>
                    <a href="https://www.facebook.com/NewMoneyUSDX" target="_blank" class="icon icon_f"><i class="icon iconfont icon-facebook"></i></a>
                    <!--<a href="javascript:;" target="_blank" class="icon icon_msg"><i class="icon iconfont icon-mailbox"></i></a>
                    <a href="javascript:;" target="_blank" class="icon icon_m"><i class="icon iconfont icon-medium"></i></a>-->
                    <a href="https://github.com/USDXProject" target="_blank" class="icon icon_github"><i class="icon iconfont icon-github"></i></a>
                    <!--<a href="javascript:;" target="_blank" class="icon icon_reddit"><i class="icon iconfont icon-reddit"></i></a>-->
                    <a href="https://t.me/NewMoneyUSDX" target="_blank" class="icon icon_medium"><i class="icon iconfont icon-emi"></i></a>
                </div>
                <p class="copyRight">©️USDX 2017.All Rights Reserved.</p>
            </div>
        </footer>
    </div>
</template>

<script type="text/javascript">
    import Hexagon from './hexagon';
    import Phases from './phases';
    import Parteners from './parteners';
    import Aboutusdx from './Aboutusdx';
    import homeData from '../data/home';
    import { scrollMove } from '../modules/method'

    export default {
        name:'home',
        data() {
            return {
                curpage: 0,
                nav: homeData.nav,
                showNav: false
            }
        },
        mounted() {
            this.$nextTick(() => {
                this.scroll();
                this.resize();
            })
        },
        methods:{
            resize() {
                this.setScreen();
                window.addEventListener('resize',this.setScreen);
            },
            setScreen() {
                var w = window.innerWidth;
                this.$refs["nav-home"].style.width = w + 'px';
                this.$refs["nav-home"].style.height = window.screen.height +'px';
                if (w > 720) {
                     this.$refs["screen"].style.height = window.screen.height +'px';
                } else {
                    this.$refs["screen"].style.height = 'auto';
                }
            },
            to2(item,index) {
                this.showNav = false;
                this.to(item,index);
            },
            navTab() {
                this.showNav = !this.showNav;
            },
            to(item,index){
                var T = this.$refs[item.ref].getBoundingClientRect().top;
                var t = document.documentElement.scrollTop||document.body.scrollTop;
                this.curpage = index;
                scrollMove({y:t+T})
            },
            scroll() {
                var arr = ['nav-home','nav-about','nav-phases','nav-team','nav-advisors','nav-parteners'];
                window.addEventListener('scroll', () => {
                    for (var i = 0; i < arr.length; i++) {
                        var rect = this.$refs[arr[i]].getBoundingClientRect();
                        if (rect.top>=0 && rect.top+rect.height>=0) {
                            this.curpage = i;
                            return ;
                        }
                    }
                    this.curpage = arr.length - 1;

                }, false);
            }
        },
        components: {
            Hexagon,
            Phases,
            Parteners,
            Aboutusdx
        }
    }
</script>

<style lang="scss">
    .indexBox{
        position: relative;
        z-index: 10;

        .indexBox-line div{
            position: absolute;
            left: 45%;
            width: 60px;
            height: 2px;
            background: linear-gradient(left, rgba(255,182,193, 1), rgba(255,182,193, 0));
            animation: tlf 3s ease infinite;
            opacity: 0;
            &:nth-child(1){
                top: 15%;
            }
            &:nth-child(2){
                top: 44%;
                animation-delay: 1s;
            }
            &:nth-child(3){
                top: 90%;
                animation-delay: 2s;
            }
        }
    }
    .hexagon-warp{
        padding-top: 30px;
        width: 80%;
        margin: 0 auto;
        box-sizing: border-box;
    }

    @keyframes tlf{
        0%{
            opacity: 0.1;
            transform: translate3d(0,0,0);
        }
        50%{
            opacity: 1;
            transform: translate3d(-350%,0,0);
        }
        100%{
            opacity: 0.1;
            transform: translate3d(-700%,0,0);
        }
    }
</style>
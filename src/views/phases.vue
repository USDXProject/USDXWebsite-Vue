<template>
    <div class="phases" :class="'active'+cur">
        <div class="phases-top">
            <p><i class="icon iconfont icon-PHASES"></i></p>
            <ul :class="'active'+cur">
                <li :class="cur==0?'active':''" @click="cur=0">Phase 1<br/>Genesis Phase</li>
                <li :class="cur==1?'active':''" @click="cur=1">Transition<br/>Pegging Day</li>
                <li :class="cur==2?'active':''" @click="cur=2">Phase 2<br/>Stable Phase</li>
                <li :class="cur==0?'active':''" @click="cur=0">Phase 1<br/>Genesis Phase</li>
                <li :class="cur==1?'active':''" @click="cur=1">Transition<br/>Pegging Day</li>
                <li :class="cur==2?'active':''" @click="cur=2">Phase 2<br/>Stable Phase</li>
            </ul>
        </div>
        <div class="phases-main">
            <div class="phases-l">
                <div v-show="cur==index" v-for="(item,index) in phases">
                    <h4 class="h4Titlte" v-html="item.h4"></h4>
                    <p class="phaseContent" v-html="item.p"></p>
                    <i class="phases-font icon iconfont"
                        :class="{'icon-one_big':cur==0,'icon-two_big':cur==1,'icon-three_big':cur==2}"></i>
                </div>
            </div>
            <div class="phases-r">
                <div v-show="cur==0" class="phase-line">
                    <img src="images/phases/line1.png" alt="">
                    <div class="toright"></div>
                </div>
                <div v-show="cur==1" class="phase-line">
                    <img src="images/phases/line2.png" alt="">
                    <div class="phase-line-box">
                        <img src="images/phases/1-5.png" alt="">
                        <img src="images/phases/1-5.png" alt="">
                        <img src="images/phases/1-5.png" alt="">
                        <img src="images/phases/1-6.png" alt="">
                    </div>
                </div>
                <div v-show="cur==2" class="phase-line">
                    <img src="images/phases/line3.png" alt="">
                    <img class="phase-line-baseimg" src="images/phases/line2.png" alt="">
                    <div class="toright"></div>
                </div>
                <!-- <div class="phases-tianping">
                    <img src="images/phases/tianping_base.png" alt="">
                </div>
                <div class="phases-tianping-main">
                    <div class="phases-tianping-main-line">
                        <img src="images/phases/line.png" alt="">
                    </div>
                    <div class="phases-tianping-main-l">
                        <img src="images/phases/tianping_tuopan.png" alt="">
                        <span v-show="cur!=1">
                            <img src="images/phases/1-5.png" alt="">
                        </span>
                        <i v-show="cur==1">
                            <img src="images/phases/1-5.png" alt="">
                            <img src="images/phases/1-5.png" alt="">
                            <img src="images/phases/1-5.png" alt="">
                        </i>
                    </div>
                    <div class="phases-tianping-main-r">
                        <img src="images/phases/tianping_tuopan.png" alt="">
                        <span v-show="cur!=1">
                            <img src="images/phases/1-6.png" alt="">
                        </span>
                        <i v-show="cur==1">
                            <img src="images/phases/1-6.png" alt="">
                            <img src="images/phases/1-6.png" alt="">
                            <img src="images/phases/1-6.png" alt="">
                        </i>
                    </div>
                </div> -->
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
    import phasesData from '../data/home';

    export default {
        data() {
            return {
                cur: 0,
                phases: phasesData.phases
            }
        },

    }
</script>

<style lang="scss">

    .phases{
        overflow: hidden;
        img{
            display: block;
            width: 100%;
        }
        transition: 0.6s;
        background: #181a1d url('../../images/phases/bg.png') no-repeat 0% 90%;
        background-size: 300%;

        &.active0{
            background-position-x: 0%;
        }
        &.active1{
            background-position-x: 33.33%;
        }
        &.active2{
            background-position-x: 66.66%;
        }
    }
    .phases-top{
        .icon-PHASES{font-size: 38px;}
        > ul{
            position: relative;
            margin: -270px auto 0;
            width: 300px;
            height: 300px;
            border: 1px solid #fff;
            border-radius: 50%;
            transform-origin: center center;
            transition: 0.6s;
            
            &.active0{
                transform: rotate(120deg);
            }
            &.active1{
                transform: rotate(180deg);
            }
            &.active2{
                transform: rotate(240deg);
            }

            li{
                position: absolute;
                top: 300px;
                left: 0;
                width: 100%;
                transform-origin: 150px -150px;
                text-align: center;
                cursor: pointer;
                opacity: 0.6;
                line-height: 1.2;
                font-size: 16px;
                @for $i from 1 to 7 {
                    &:nth-child(#{$i}){
                        transform: rotate(#{($i/1+1)*-60}deg);
                    }
                }
                &:active,&:hover,&.active{
                    opacity: 1;
                    text-decoration: underline;
                    &:before{
                        background-color: #04e0e0;
                    }
                }
                &:before{
                    content: "";
                    position: absolute;
                    top: -15px;
                    left: 50%;
                    width: 6px;
                    height: 6px;
                    background-color: #fff;
                    border-radius: 50%;
                }
            }
        }
        > p{
            text-align: center;
            font-size: 40px;
            line-height: 2;
        }
    }

    .phases-main{
        display: flex;
        align-item: center;
        justify-content: center;
        padding: 15% 10% 20%;
    }
    .phases-l{
        position: relative;
        flex: 1;
        padding: 0 10%;
        line-height: 1.5;
        display: flex;
        flex-direction: column;
        justify-content: center;
        div{
            margin-top: -143px;
            padding-left: 6px;
            width: 375px;
        }
        div:nth-child(2){margin-top: -104px;}
        div:last-child{margin-top: -43px;}
        .phases-font{
            position: absolute;
            left: 15%;
            top: -40px;
            font-size: 200px;
            font-weight: normal;
            line-height: 1;
            opacity: 0.1;
        }
        .icon-one_big{font-size: 324px;}
        .icon-two_big{font-size: 380px;top:-81px;}
        .icon-three_big{top:-70px;font-size: 387px;}
    }
    
    .phases-r{
        position: relative;
        width: 50%;
    }
    .phase-line{
        position: relative;
    }
    .phase-line-baseimg{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 10;
        background-size: 100% 100%;
    }
    .toright {
        position: absolute;
        top: 0;
        right: 0;
        width: 85%;
        height: 90%;
        background-color: rgb(24, 26, 29);
        animation: toright 6s infinite;
    }
    .phase-line-box{
        position: absolute;
        top: 50%;
        left: 50%;
        width: 10%;
        img{
            &:nth-child(2),&:nth-child(3),&:nth-child(4){
                margin-top: -100%;
            }
            &:nth-child(1){
                animation: to_c 2s infinite;
            }
            &:nth-child(2){
                animation: to_l 2s infinite;
            }
            &:nth-child(3){
                animation: to_r 2s infinite;
            }
            &:nth-child(4){
                animation: to_b 2s ease-in infinite;
            }
        }
    }

    .h4Titlte{font-size: 28px;font-weight: normal;}
    .phaseContent{
        font-size:16px;
        line-height: 22px;
        margin-top: 16px;
    }
    
    @keyframes toright{
        0%{width: 85%;}
        50%,100%{width: 0%;}
    }
    @keyframes to_c{
        0%{
            opacity: 0;
        }
        49%{
            opacity: 0;
        }
        50%,100%{
            opacity: 1;
        }
    }
    @keyframes to_l{
        0%{
            opacity: 0;
            transform: translate3d(0,0,0);
        }
        49%{
            opacity: 0;
        }
        50%{
            opacity: 1;
            transform: translate3d(0,0,0);
        }
        75%,100%{
            transform: translate3d(-150%,0,0);
        }
    }
    @keyframes to_r{
        0%{
            opacity: 0;
            transform: translate3d(0,0,0);
        }
        49%{
            opacity: 0;
        }
        50%{
            opacity: 1;
            transform: translate3d(0,0,0);
        }
        75%,100%{
            transform: translate3d(150%,0,0);
        }
    }
    @keyframes to_b{
        0%{
            opacity: 1;
            transform: translate3d(0,-200%,0);
        }
        49%{
            opacity: 1;
        }
        50%,100%{
            opacity: 0;
            transform: translate3d(0,50%,0);
        }
    }
    /*
    .phases-tianping{
        width: 35%;
        margin: 0 auto;
    }
    .phases-tianping-main{
        position: absolute;
        top: 13.7%;
        left: 0;
        width: 100%;
        height: 100%;
    }
    .phases-tianping-main-line{
        position: absolute;
        top: 3%;
        left: 20%;
        width: 60%;
        transform-origin: 50% 50%;
        animation: tianping1 3s linear infinite;
        
    }
    .phases-tianping-main-l,
    .phases-tianping-main-r{
        position: absolute;
        left: 0;
        top: 0;
        width: 41.5%;
        span{
            position: absolute;
            width: 40%;
            bottom: 6%;
            left: 30%;
        }
        i{
            position: absolute;
            width: 40%;
            bottom: 6%;
            left: 30%;
            img{
                float: left;
                width: 50%;
                &:nth-child(1){
                    margin-left: 25%;
                }
            }
        }
    }
    .phases-tianping-main-l{
        animation: tianping2 3s linear infinite;
    }
    .phases-tianping-main-r{
        left: auto;
        right: 0;
        animation: tianping3 3s linear infinite;
    }
    .icon-PHASES{font-size: 30px;}
    .h4Titlte{font-size: 33px;font-weight: normal;}
    .phaseContent{font-size: 14px;
        color: #fff;
        line-height: 20px;
        margin-top: 16px;
        width: 390px;
    }
    @keyframes tianping1{
        0%{
            transform: rotate(0deg);
        }
        25%{
            transform: rotate(-10deg);
        }
        50%{
            transform: rotate(0deg);
        }
        75%{
            transform: rotate(10deg);
        }
        100%{
            transform: rotate(0deg);
        }
    }
    @keyframes tianping2{
        0%{
            margin-top: 0%;
        }
        25%{
            margin-top: 4%;
        }
        50%{
            margin-top: 0%;
        }
        75%{
            margin-top: -4%;
        }
        100%{
            margin-top: 0%;
        }
    }
    @keyframes tianping3{
        0%{
            margin-top: 0%;
        }
        25%{
            margin-top: -4%;
        }
        50%{
            margin-top: 0%;
        }
        75%{
            margin-top: 4%;
        }
        100%{
            margin-top: 0%;
        }
    }*/
</style>
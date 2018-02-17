<template>
    <div class="support-box teamBox">
        <div class="height80 height_mobile_70"></div>
        <h2 class="title">
            <i class="line_icon left_line"></i>
            <i class="icon iconfont icon-rd_title"></i>
            <i class="line_icon right_line"></i>
        </h2>

        <div class="supportContent">
            <ul class="clearfix">
                <li>
                    <div class="nameBox">
                        <h2 class="name">Hash Hao</h2>
                        <p class="position">Researcher</p>
                    </div>
                    <div class="descBox">
                        <p>Graduated from Columbia <br/>University</p>
                        <p>Serial entrepreneur and <br/>Fintech expert</p>
                        <p>Has been successfully created <br/>and existed a series of <br/>ventures</p>
                        <p>Used to work at investment <br/>banks and hedge funds in <br/>New York and Beijing</p>
                    </div>
                </li>

                <li>
                    <div class="nameBox">
                        <h2 class="name">Steven Li</h2>
                        <p class="position">Researcher</p>
                    </div>
                    <div class="descBox">
                        <p>Graduated from University <br/>of Toronto</p>
                        <p>Serial entrepreneur and <br/>angel investor</p>
                        <p>Has founded and managed <br/>3 hedge funds</p>
                        <p>Used to be the investment <br/>director at Qihu360</p>
                    </div>
                </li>

                <li>
                    <div class="nameBox">
                        <h2 class="name">Connor Huang</h2>
                        <p class="position">Researcher</p>
                    </div>
                    <div class="descBox">
                        <p>Internet banking expert <br/>focused on risk <br/>management and<br/>monetary policy</p>
                        <p>Used to work at China <br/>Renaissance and Alibaba</p>
                        <p>Accumulated rich experience <br/>in investment banking and <br/>digital management</p>
                    </div>
                </li>

                <li>
                    <div class="nameBox">
                        <h2 class="name">Chen Nie</h2>
                        <p class="position">Development</p>
                    </div>
                    <div class="descBox">
                        <p>Graduated from University <br/>of Toronto</p>
                        <p>Lead engineer of BCG <br/>Digital Ventures</p>
                        <p>Experienced expert in <br/>Trading Strategy, Investment <br/>Analyst and Engineering</p>
                    </div>
                </li>
            </ul>

        </div>

    </div>
</template>

<script type="text/javascript">

    export default {
        data(){
            return {

            }
        },
        methods: {
            showItem(item,index) {
                if (item.title) {
                    this.cur = index;
                }
            }
        }
    }
</script>


<style lang="scss">
    .icon-rd_title{
        float: left;
        margin-left: 18px;
        margin-right: 18px;
        font-size: 22px;
    }

    .supportContent{
        background-color: #222529;
        margin: 0 auto;
        margin-top: 90px;
        width: 960px;
        ul{
            display: block;
            width: 100%;
            //padding-left: 8px;
            li{
                float: left;
                //width: 203px;
                width: 209px;
                margin-right: 41px;
                display: block;
                .nameBox{
                    display: block;
                    background: url("../../images/team/team_bg.png");
                    background-size: 203px 203px;
                    background-repeat: no-repeat;
                    width: 203px;
                    height: 133px;
                    text-align: center;
                    font-size: 24px;
                    color: #222428;
                    padding-top: 70px;
                    line-height: 25px;
                    .name{
                        font-weight: 600;

                    }
                    .position{
                        margin-top: 8px;
                        font-weight: normal;

                    }
                }
                .descBox{
                    margin-top: 28px;
                    text-align: center;
                    p{
                        font-size: 16px;
                        color: #999999;
                        line-height: 22px;
                        margin-top: 6px;

                    }
                }
            }
            li:nth-child(4){
                margin-right: 0px;
            }
        }
    }

</style>
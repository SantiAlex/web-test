<template>
    <div class="wrapper">
        <text class="title" v-on:click="getClick"> {{ key}}</text>
        <web :src="basic+key+param" class='page'></web>
    </div>
</template>
<script>
import dingtalk from 'dingtalk-javascript-sdk';
var modal = weex.requireModule('modal');

export default {
    name: 'home',
    data: function() {
        return {
            basic: 'http://cdn4.videos.motherlessmedia.com/videos/',
            key: '3B349BC',
            param: '.mp4?fs=opencloud',
        }
    },
    mounted: function() {
        const me = this
        dingtalk.ready(function() {
            const dd = dingtalk.apis;
            dd.biz.navigation.setRight({
                show: true,
                control: true,
                text: '设置',
            });
            dd.biz.navigation.setLeft({
                show: true,
                control: false,
                text: '返回',
                android: true
            });
            dingtalk.on('navRightButton', function() {
                me.$router.push('config');
            });


            dd.util.domainStorage.getItem({
                name: 'key', // 存储信息的key值
                onSuccess: function(info) {

                    me.key = info.value.key

                },
                onFail: function(err) {
                    alert(JSON.stringify(err));
                }
            });
            // dd.util.domainStorage.getItem({
            //     name: 'basic', // 存储信息的key值
            //     onSuccess: function(info) {
            //         me.basic = info.value.basic


            //     },
            //     onFail: function(err) {
            //         alert(JSON.stringify(err));
            //     }
            // });
            // dd.util.domainStorage.getItem({
            //     name: 'param', // 存储信息的key值
            //     onSuccess: function(info) {

            //         me.param = info.value.param

            //     },
            //     onFail: function(err) {
            //         alert(JSON.stringify(err));
            //     }
            // });


        });
    },
    methods: {
        getClick: function() {
            this.$router.push('config');
        }
    }
}
</script>
<style scoped>
.wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 750px;
    align-items: center;
}

.title {
    font-size: 60px;
    color: #505050;
    text-align: center;
}

.subtitle {
    display: block;
    font-size: 30px;
    color: #AAAAAA;
    text-align: center;
    margin-top: 20px;
}

.bind-vue-container {
    width: 702px;
    height: 88px;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    background-color: #4fc08d;
}

.bind-vue {
    font-size: 34px;
    color: #ffffff;
    text-align: center;
}

.page {
    width: 750px;
    height: 750px;
}
</style>
<template>
    <div class="wrapper">
        <text class="title" v-on:click="getClick"> {{key}}</text>
        <web :src="basic+key+param" class='page'></web>
        <text>{{basic}}</text>
        <text>{{key}}</text>
        <text>{{param}}</text>
        <text class="button" @click="pickTime">Pick One</text>
    </div>
</template>
<script>
import dingtalk from 'dingtalk-javascript-sdk';
const modal = weex.requireModule('modal');
const picker = weex.requireModule('picker')

export default {
    name: 'home',
    data: function() {
        return {
            basic: '',
            key: '',
            param: '',
            keys:{}
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
                name: 'keys', 
                onSuccess: function(info) {
                    modal.alert({
                        message:info.value
                    })
                    me.keys = JSON.parse(info.value)
                    
                },
                onFail: function(err) {
                    alert(JSON.stringify(err));
                }
            });
            dd.util.domainStorage.getItem({
                name: 'basic', 
                onSuccess: function(info) {

                    me.basic = info.value

                },
                onFail: function(err) {
                    alert(JSON.stringify(err));
                }
            });
            dd.util.domainStorage.getItem({
                name: 'param',
                onSuccess: function(info) {

                    me.param = info.value

                },
                onFail: function(err) {
                    alert(JSON.stringify(err));
                }
            });

        });
    },
    methods: {
        getClick: function() {
            this.$router.push('config');
        },
        pickTime() {
            picker.pick({
                items:this.keys
            }, event => {
                if (event.result === 'success') {
                    this.key = this.keys[event.data]
                }
            })
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
.button {
    font-size: 36px;
    width: 280px;
    color: #41B883;
    text-align: center;
    padding-top: 25px;
    padding-bottom: 25px;
    border-width: 2px;
    border-style: solid;
    border-color: rgb(162, 217, 192);
    background-color: rgba(162, 217, 192, 0.2);
  }
</style>
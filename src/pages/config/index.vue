<template>
    <div>
        <scroller>
            <div class='block'>
                <text class="title">basic</text>
                <textarea class="textarea" @input="basicchange"  @change="basicchange" @focus="basicchange" v-model='basic'></textarea>
            </div>
            <div class='block'>
                <text class="title">param</text>
                <textarea class="textarea" @input="paramchangechange"  @change="paramchange" @focus="paramchange" v-model='param'></textarea>
            </div>
            <div class='block'>
                <text class="title">keys</text>
                <textarea class="textarea big" @input="keyschange" @change="keyschange" @focus="keyschange" @blur="onblur" v-model='keys'></textarea>
            </div>


        </scroller>
    </div>
</template>
<script>
import dingtalk from 'dingtalk-javascript-sdk';

export default {
    name: 'home',
    data: function() {
        return {
            basic: '',
            keys: '',
            param: '',

        }
    },
    mounted: function() {
        const me = this
        dingtalk.ready(function() {
            const dd = dingtalk.apis;
            dd.biz.navigation.setRight({
                show: false,
            });
            dd.biz.navigation.setLeft({
                show: true,
                control: true,
                text: '返回',
                android: true
            });
            dingtalk.on('goBack', function() {
                me.$router.back()
            })

            dd.util.domainStorage.getItem({
                name: 'keys', // 存储信息的key值
                onSuccess: function(info) {
                    
                    me.keys = info.value
                    
                },
                onFail: function(err) {
                    alert(JSON.stringify(err));
                }
            });
            dd.util.domainStorage.getItem({
                name: 'basic', // 存储信息的key值
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
        basicchange() {
            const me = this
            dingtalk.ready(function() {
                const dd = dingtalk.apis;
                dd.util.domainStorage.setItem({
                    name: "basic",
                    value: me.basic
                })
            })
        },
        paramchange() {
            const me = this
            dingtalk.ready(function() {
                const dd = dingtalk.apis;
                dd.util.domainStorage.setItem({
                    name: "param",
                    value: me.param
                })
            })
        },
        keyschange() {
            const me = this
            dingtalk.ready(function() {
                const dd = dingtalk.apis;
                dd.util.domainStorage.setItem({
                    name: "keys",
                    value: me.keys
                })
            })
        },
        test() {
            const me = this
            dingtalk.ready(function() {
                const dd = dingtalk.apis;
                dd.util.domainStorage.getItem({
                    name: 'keys',
                    onSuccess: function(info) {
                        me.t = info.value
                    },
                    onFail: function(err) {
                        alert(JSON.stringify(err));
                    }
                });
            })

        },
        clear() {
            dingtalk.ready(function() {
                const dd = dingtalk.apis;
                dd.util.domainStorage.clearItems({})
            })
        }
    }
}
</script>
<style scoped>
.block {
    border-width: 1px;
    border-style: solid;
    border-color: #777;
    border-radius: 4px;
    margin: 20px;
}

.title {
    background-color: #999;
    font-size: 48px;
    padding-left: 20px;
}

.textarea {
    min-height: 200px;
}

.button {
    font-size: 36;
    width: 200;
    color: #41B883;
    text-align: center;
    padding-top: 10;
    padding-bottom: 10;
    border-width: 2;
    border-style: solid;
    margin-right: 20;
    border-color: rgb(162, 217, 192);
    background-color: rgba(162, 217, 192, 0.2);
}
.big{
    height:600px;
}
</style>
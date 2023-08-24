import Vue from "vue"
import MyButton from "./button/index.vue"
import MyDialog from "./dialog/index.vue"

let myPlugins = [
    MyButton,
    MyDialog
]


const install = function(){
    myPlugins.forEach((plugins) => {
        Vue.component(plugins.name, plugins)
    })
}

export default install
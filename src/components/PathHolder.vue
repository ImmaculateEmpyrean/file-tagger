<template>
    <div class="field has-addons">
        <div class="control">
            <input 
                class="input" type="text" 
                placeholder="enter a path here" 
                disabled
            >
        </div>
        <div class="control">
            <a 
                class="button is-link"
                @click="toggleInput"
            >
                <i class="fas fa-edit"></i>
            </a>
        </div>
        <div class="control">
            <a class="button is-danger">
                <i class="fas fa-trash-alt"></i>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: "PathHolder",
    props:{
        path:{
            type: String,
            default: "No Path"
        }
    },
    data() {
        return {
            pathInternal: "Internal No Path"
        }
    },
    methods:{
        toggleInput(){
            let pathInput = this.$el.querySelector('input[type=text]');
            pathInput.disabled = !pathInput.disabled;
        }
    },
    mounted(){
        this.pathInternal = this.path;
        let pathInput = this.$el.querySelector('input[type=text]');
        pathInput.value = this.pathInternal;
    }
}
</script>

<style lang="scss" scoped>
    @import 'bulma/bulma.sass';
</style>
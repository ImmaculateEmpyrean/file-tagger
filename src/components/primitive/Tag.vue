<template>
    <span class="tag is-medium">
        {{tagName}}
        <button @click="$emit('tag:deleted',tagName)" class="delete is-small"></button>
    </span>
</template>

<script>
export default {
    name: "Tag",
    props:{
        tagName:{
            type: String,
            default: "NoName"
        },
        tagColor:{
            type: String,
            default: "#000"
        }
    },
    mounted(){
        //add the specified color to the tag when Successfully Started Up..
        this.$el.style.backgroundColor=this.tagColor;
        this.$el.style.color="#fff";
    }
}
</script>
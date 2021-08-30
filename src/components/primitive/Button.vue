<template>
    <button @click="$emit('button:clicked')">
        {{buttonText}}
    </button>
</template>

<script>
export default {
    name:'Button',
    props:{
        buttonText:{
            type: String,
            default: "button"
        }
    }
}
</script>


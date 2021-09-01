<template>
    <div class="field has-addons">
        <div class="control">
            <input class="input" type="text" placeholder="SourcePath">
        </div>
        <div class="control">
            <a class="button is-link">
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
    name: "PathHolder"
}
</script>

<style lang="scss" scoped>
    @import 'bulma/bulma.sass';
</style>
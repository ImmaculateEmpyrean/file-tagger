<template>
    <div class="card">
        <header class="card-header">
           <p class="card-header-title last-modified">
                Last Modified - {{lastModified}}
           </p>
        </header>
        <div class="card-content">
            <div class="media">
                <div class="media-left">
                    <figure class="image is-48x48">
                        <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                    </figure>
                </div>
                <div class="media-content path-size">
                    <p class="title is-4">{{path}}</p>
                    <p class="subtitle is-6">{{size}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "FileCard",
    props:{
        lastModified:{
            type: String,
            default: "never"
        },
        path:{
            type: String,
            default: "D:/game/othercide.exe"
        },
        size:{
            type: String,
            default: "500 MB"
        }
    }
}
</script>

<style lang="scss" scoped>
    .last-modified{
        justify-content: flex-end;
    }
</style>
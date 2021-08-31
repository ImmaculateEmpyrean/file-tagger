<template>
    <div class="card-container">
        <!-- start writing a bulma card -->
        <div class="card">
            <!-- the header tells me when the file was last modified -->
            <header class="card-header">
            <p class="card-header-title last-modified">
                    Last Modified - {{lastModified}}
            </p>
            </header>
            <!-- the card content contains the main information about the file -->
            <div class="card-content">
                <div class="media">
                    <div class="media-left">
                        <!-- icon of the file -->
                        <figure class="image is-48x48 main-icon">
                            <!-- this must be inserted dynamically by javascript.. i cannot know which icon before hand -->
                            <i class="fas fa-file"></i> 
                        </figure>
                    </div>
                    <!-- the path is arguably the most important parameter of any file -->
                    <div class="media-content path-size">
                        <p class="title is-4">{{path}}</p>
                        <p class="subtitle is-6">{{size}}</p>
                    </div>
                </div>
                <!-- the tags is the whole point of this application! -->
                <div class="content tags-container">
                    <Tag />
                    <Tag />
                    <Tag />
                    <Tag />
                </div>
            </div>
        </div>
        <!-- ended writing a bulma card -->
    </div>
</template>

<script>
import Tag from '../components/primitive/Tag.vue';

export default {
    name: "FileCard",
    components:{
        Tag
    },
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
    },
    methods:{
        setCardWidth(){
            let cardContainer = this.$el;
            if(window.innerWidth > 1000){
                cardContainer.style.minWidth = "1000px";
                cardContainer.style.maxWidth = "1000px";
            }  else {
                cardContainer.style.minWidth = `${window.innerWidth}px`
                cardContainer.style.maxWidth = `${window.innerWidth}px`
            }
        }
    },
    mounted(){
        this.setCardWidth();
        window.addEventListener('resize',this.setCardWidth);
    }
}
</script>

<style lang="scss" scoped>
    @import '../assets/scss/setting.scss';

    .last-modified{
        justify-content: flex-end;
    }

    .card-container{
        max-width: 1000px;
        //min-width: 1000px;
        margin: 0 auto;
    }

    .tags-container{
        display: flex;
        column-gap: $spacing-small;
    }

    figure.main-icon > * {
        width: 100%;
        height: 100%;
    }
</style>
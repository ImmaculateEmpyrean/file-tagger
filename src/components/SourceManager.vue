<template>
    <div id="SourceManager">
        <div class="modal is-active">
            <div class="modal-background"></div>
                <div class="modal-card">
                    <header class="modal-card-head">
                        <p class="modal-card-title">Source</p>
                    </header>
                    <section class="modal-card-body">
                        <p class="title is-5 is-spaced">Source paths can be added and edited or deleted at will here.</p>
                        <p class="subtitle is-6">If a file has to be tracked by this application, then it must be inside one of the source directories listed below..</p>

                        <Button 
                            id="new-source-button" class="button is-small is-link" 
                            buttonText="New"
                            @button:clicked="addNewPathEntry"
                        />

                        <!-- input componnets are to be added here in runtime as I dont Know How Many To Add At Run Time -->
                        <PathHolder />

                    </section>
                    <footer class="modal-card-foot">
                        <button 
                            class="button is-success"
                            @click="closeModal"
                        >
                            Save changes
                        </button>
                    </footer>
                </div>
        </div>
    </div>
</template>

<script>
import Button from './primitive/Button.vue';
import PathHolder from './PathHolder.vue';

export default {
    name: "SourceManager",
    components:{
        PathHolder,
        Button
    },
    methods:{
        closeModal(){
            this.$emit('modal:close');
        },
        addNewPathEntry(){
            console.log('functionality to be implemented');
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '../assets/scss/setting.scss';

    #new-source-button{
        margin-bottom: $spacing-normal;
    }
</style>
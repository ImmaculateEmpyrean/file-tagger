<template>
    <div id="SourceManager">
        <div class="modal is-active">
            <div class="modal-background"></div>
                <div class="modal-card">
                    <header class="modal-card-head">
                        <p class="modal-card-title">Source</p>
                        <button class="delete" aria-label="close"></button>
                    </header>
                    <section class="modal-card-body">
                        <p class="title is-5 is-spaced">
                            Source paths can be added and edited or deleted at will here.
                        </p>
                        <p class="subtitle is-6">If a file has to be tracked by this application, then it must be inside one of the source directories listed below..</p>

                        <!-- input componnets are to be added here in runtime as I dont Know How Many To Add At Run Time -->
                        <PathHolder />

                    </section>
                    <footer class="modal-card-foot">
                        <button class="button is-success">Save changes</button>
                    </footer>
                </div>
        </div>
    </div>
</template>

<script>
import PathHolder from './PathHolder.vue';

export default {
    name: "SourceManager",
    components:{
        PathHolder
    }
}
</script>
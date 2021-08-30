<template>
    <div class="MainMenu">
        <!-- start creating the button required to toggle main menu on and off -->
        <svg 
            class="main-button" 
            @click="handler"
            viewBox="-12 5 150 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="50" y="35" width="75" height="25" rx="7" fill="#E12A2A"/>
            <rect width="75" height="25" rx="7" fill="#E12A2A"/>
        </svg>
        <!-- ended creating the button required to toggle main menu on and off -->

        <!-- start creating the menu which responds to the damn button -->
        <ul class="menu hidden">
            <li><Button Button-text="Help"/></li>
        </ul>
        <!-- ended creating the menu which responds to the damn button -->
    </div>
</template>

<script>
import Button from './primitive/Button.vue';

export default {
    name: "MainMenu",
    components:{
        Button
    },
    data(){
        return {
           menuOpen: false 
        }
    },
    methods:{
        handler(){
            let mainButton = this.$el.querySelector('.main-button');
            let menu = this.$el.querySelector('.menu');

            mainButton.classList.toggle('color-inverted');
            mainButton.classList.toggle('rotated');

            menu.classList.toggle('hidden');
            
            this.menuOpen = !this.menuOpen;
        }
    }
}
</script>

<style scoped lang="scss">
    .main-button{
        // transition is set so that the button may organically change color while the menu is animating inside
        transition: background-color 2s, color 2s, transform 2s;

        position: relative; //positon is made relative so that z-index may be obeyed
        border: 2px solid black;
        border-radius: 50%;

        width: 75px;
        height: 75px;

        z-index: 1;

        &.color-inverted{
            color: black;
            background: white;
        }

        // a minor animation to add some flavour 
        &.rotated{  transform: rotateZ(90deg)  }
    }

    .menu{
        // transition is set so that the menu can be animated inside
        transition: transform 2s;
        
        // the position is fixed as menu is expected to be visible even when I scroll down 
        position: fixed;
        width: 35vw;
        height: 100vh;
        
        // the software theme is based only on three colors black white and accentuate.. 
        background: black;

        left: 0;
        top: 0;

        // this property is added to facilitate hiding and showing the window using javascript 
        transform: translateX(0vw);
        
        // add this class using javascript to hide the main menu
        &.hidden{ transform: translateX(-35vw); }

        z-index: 0;
    }
</style>

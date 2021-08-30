<template>
  <div id="home-view">
    <div id="main-toolbar">
      <MainMenu />
      <Button class="button is-link is-large"/>
      <Button />
      <SearchBar />
    </div>

    <!-- these two modals are to be shown only when the corresponding buttons are pressed -->
    <SourceManager v-if="showSourceModal"/>
    <FilterManager v-if="showFilterModal"/>

  </div>
</template>

<script>
import MainMenu       from '../components/MainMenu.vue';
import SearchBar      from '../components/SearchBar.vue';
import FilterManager  from '../components/FilterManager.vue';
import SourceManager  from '../components/SourceManager.vue';

import Button         from '../components/primitive/Button.vue';

export default {
  name: 'Home',
  components:{
    MainMenu,
    SearchBar,
    FilterManager,
    SourceManager,
    Button
  },
  data (){
    return {
      showSourceModal: false,
      showFilterModal: false
    }
  }
}
</script>
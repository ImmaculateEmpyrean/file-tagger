<template>
  <div id="home-view">

    <!-- start creating the main tool-bar -->
    <div id="main-toolbar">
      <!-- the main menu component is not expected to play a major role in version-1 -->
      <MainMenu />

      <!-- version 1 has only two functional buttons positioned prominently on the main-toolbar -->
      <div class="functional-buttons">
        <Button 
          id="SourceManagerButton"
          class="button is-primary is-large"
          buttonText="Source"/>
        <Button 
          id="FilterManagerModal"
          class="button is-primary is-large"
          buttonText="Filters"/>
      </div>

      <!-- the search bar is responsible for accepting substring to match against files.. -->
      <SearchBar />
    </div>
    <!-- ended creating the main tool-bar -->

    <div id="filters-row">  
      Filters Added -
      <FilterRowTag />
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
import FilterRowTag   from '../components/primitive/FilterRowTag.vue';

export default {
  name: 'Home',
  components:{
    MainMenu,
    SearchBar,
    FilterManager,
    SourceManager,
    Button,
    FilterRowTag
  },
  data (){
    return {
      showSourceModal: false,
      showFilterModal: false
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/scss/setting.scss';

  #main-toolbar{
    display: flex;
    margin: $spacing-small $spacing-normal;

    justify-content: space-between;
    align-items: center;

    #MainMenu{
      flex: 0 0 15%;
    }

    .functional-buttons{
      display: flex;
      align-items: center;

      #SourceManagerButton{margin-right: $spacing-small;}
      #FilterManagerModal{  margin: 0 $spacing-small; }
    }
  
    #SearchBar{
      flex: 0 0 35%;
    }
  }

  #filters-row{
    display: flex;
    align-items: center;
    column-gap: $spacing-small;

    padding: $spacing-small $spacing-normal;
    border-bottom: 2px solid black;
  }
</style>
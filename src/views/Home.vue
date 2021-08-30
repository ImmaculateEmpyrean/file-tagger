<template>
  <div id="home-view">
    <div id="main-toolbar">
      <MainMenu />

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
      <SearchBar />
    </div>

    <div id="filters-row">
      <span class="filter-tags">
          Filters Added -
          <span class="tag is-warning is-medium">
          Test
          <button class="delete is-small"></button>
          </span>
          <span class="tag is-link is-medium">
          Test2
          <button class="delete is-small"></button>
          </span>
          <span class="tag is-danger is-medium">
          Test3
          <button class="delete is-small"></button>
          </span>
          <span class="tag is-success is-medium">
          Test4
          <button class="delete is-small"></button>
          </span>
      </span>
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

<style lang="scss" scoped>
  @import '../assets/scss/setting.scss';

  #main-toolbar{
    display: flex;
    margin: $spacing-small $spacing-normal;

    justify-content: space-between;
    align-items: center;

    //border-bottom: 2px solid black;

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
    padding: $spacing-small $spacing-normal;
    border-bottom: 2px solid black;

    .filter-tags{
      display: flex;
      column-gap: $spacing-small;
      align-items: center;
    }
  }
</style>
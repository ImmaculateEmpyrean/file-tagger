<template>
  <div id="nav">
    <router-view/>
  </div>
</template>

<style lang="scss">
  @import 'bulmaswatch/Materia/_variables.scss';

  @import 'bulma/sass/utilities/initial-variables';
  @import 'bulma/sass/utilities/functions';

  $family-primary: 'Raleway', sans-serif;
  
  @import 'bulma/bulma.sass';
  @import "bulmaswatch/Materia/_overrides.scss";

</style>
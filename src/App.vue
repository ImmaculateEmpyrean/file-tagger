<template>
  <div id="nav">
    <router-view/>
  </div>
</template>

<style lang="scss">
  @import 'bulmaswatch/Darkly/_variables.scss';

  @import 'bulma/sass/utilities/initial-variables';
  @import 'bulma/sass/utilities/functions';

  $family-primary: 'Raleway', sans-serif;
  
  @import 'bulma/bulma.sass';
  @import "bulmaswatch/Darkly/_overrides.scss";

</style>
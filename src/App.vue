<template>
    <router-view></router-view>
  <!--<v-app>-->
    <!--<v-toolbar app>-->
      <!--<v-toolbar-title class="headline text-uppercase">-->
        <!--<span>Vuetify</span>-->
      <!--</v-toolbar-title>-->
      <!--<v-spacer></v-spacer>-->
      <!--<v-btn-->
        <!--flat-->
        <!--href="https://github.com/vuetifyjs/vuetify/releases/latest"-->
        <!--target="_blank"-->
      <!--&gt;-->
        <!--<span class="mr-2">Latest Release</span>-->
      <!--</v-btn>-->
    <!--</v-toolbar>-->

    <!--<v-content>-->
      <!--<HelloWorld/>-->
    <!--</v-content>-->
  <!--</v-app>-->
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      //
    }
  }
}
</script>

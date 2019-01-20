<template>
  <div class="container">
    <div id="app">
      <v-app id="inspire">
        <v-container fluid grid-list-md fill-height>
          <v-layout row wrap>
            <v-flex d-flex xs6>
              <v-card color="pink" dark justify-center>
                <v-card-text class="px-0 text-lg-center justify center">George Bluth<br>
                  <img src="https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg">
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex d-flex xs6>
              <v-layout row wrap>
                <v-flex v-for="i in 12" :key="i" xs6>
                  <v-card color="blue" dark tile>
                    <v-card-text class="px-0 text-lg-center">Janet Weaver<br><img src="https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"></v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
              <v-flex xs12 sm4 text-xs-center>
                <div>
                  <v-btn large v-on:click="toOddNumber">Odd</v-btn>
                </div>
              </v-flex>
            </v-flex>
          </v-layout>
        </v-container>
      </v-app>
    </div>
  </div>
</template>

<script>
  export default {
    data: () => {
        return {
            show: true,
            date: null
        }
    },
      methods: {
          toOddNumber() {
              //this.show = false;
              this.$router.push({
                  name: 'odd'
              });
              //setTimeout(() => this.$router.push('/odd'), 300);
          }
      }
  }
</script>

<style>

</style>

<template>
    <v-container fluid grid-list-md text-xs-center>
        <v-layout row wrap >
            <v-flex d-flex xs6 md6>

                <v-card color="blue" light>
                    <div style="text-align: center;margin-top: 5%">
                        <p >Text</p>
                    </div>
                    <div style="margin-top: 50%;margin-left: 1%;
              margin-right: 1%">
                        <p class="text-xs-left">Text
                            <span style="float:right;">Text</span>
                        </p>
                        <img src="https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg">
                    </div>
                    <div style="margin-top: 95%;margin-bottom: 5%">
                        <p class="text-xs-center">Text</p>
                    </div>
                </v-card>
            </v-flex>

            <v-flex d-flex xs3 md3 v-for="n in 2"
                    :key="n">
                <v-flex d-flex>
                    <v-layout row wrap>
                        <v-flex d-flex v-for="n in 6" xs12
                                :key="n">
                            <v-card color="pink" light>
                                <v-card-text>Text</v-card-text>
                                <img src="https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg">
                            </v-card>
                        </v-flex>
                    </v-layout>
                </v-flex>
            </v-flex>
            <v-btn v-on:click="toOddNumber">NIEPARZYSTE</v-btn>
            <v-btn v-on:click="toEvenNumber">PARZYSTE</v-btn>
        </v-layout>
    </v-container>
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
              this.$router.push('/odd');
              //setTimeout(() => this.$router.push('/odd'), 300);
          },
          toEvenNumber() {
              this.$router.push('/even');
          }
      }
  }
</script>

<style>

</style>

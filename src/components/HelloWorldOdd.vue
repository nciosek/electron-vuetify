<template>
    <v-container fluid grid-list-md>
        <v-layout>
            <v-flex d-flex xs6 sm6 md6>
                <v-card color="pink" dark>
                    <v-card-title primary class="title"></v-card-title>
                    <v-card-text>
                    </v-card-text>
                </v-card>
            </v-flex>

            <v-flex d-flex  v-for="n in 2">
                <v-layout row wrap>
                    <v-flex
                            v-for="n in 6"
                            xs12
                    >
                        <v-card
                                color="blue"
                                dark
                        >
                            <v-card-text></v-card-text>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "HelloWorldOdd"
    }
</script>

<style scoped>

</style>

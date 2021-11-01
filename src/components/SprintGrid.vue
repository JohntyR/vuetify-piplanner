<template>
  <v-container>
    <v-row>
      <v-col
        v-for="n in 6"
        :key="n"
        cols="12"
        sm="2"
      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
          <v-card-text>
            <v-card-title>Sprint {{ n }}</v-card-title>
            <v-row
              align="center"
              class="mx-0"
            >
              <div class="grey--text">
                Capacity: 15
              </div>
            </v-row>
            <v-row
              align="center"
              class="mx-0"
            >
              <div class="grey--text">
                Load: 0
              </div>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {

}
</script>

<style>

</style>
<template>
<div>
  <v-container> <!-- Sprint Headers -->
    <v-row>
      <v-col>
        <v-card
          height="100%"
        >
          <v-card-title>
            Q1 2022
          </v-card-title>
        </v-card>
      </v-col>
      <v-col
        v-for="n in $store.state.numSprints"
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
<!-- Features -->
  <v-container
    v-for="feature in $store.state.features"
    :key="feature.id"
  > 
    <Feature
      :feature="feature"
    ></Feature>
  </v-container>
  
  <!-- Add Feature btn -->
  <v-btn 
      class="mx-2"
      fab
      dark
      color="indigo"
      @click="addFeature()"
    >
      <v-icon dark>
        mdi-plus
      </v-icon>
    </v-btn>
  </div>
</template>

<script>
  import Feature from '../components/Feature.vue'

export default {
  components: {
    Feature,
  },
  data: () => ({
    
  }),
  methods: {
    addFeature() {
      this.$store.commit('addFeature');
    }
  }
}
</script>

<style>

</style>
<template>
<div>
  <SprintHeaders />
  
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
  import SprintHeaders from '../components/SprintHeaders.vue'

export default {
  components: {
    Feature,
    SprintHeaders
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
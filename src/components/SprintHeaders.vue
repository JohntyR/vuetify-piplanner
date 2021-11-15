<template>
  <v-container> 
    <v-row>
      <v-col>
        <v-card
          height="100%"
          outlined
        >
          <v-card-title>
            Q1 2022
          </v-card-title>
        </v-card>
      </v-col>
      <v-col
        v-for="(sprintHeader, index) in sprintHeaderList"
        :key="sprintHeader.id"
        cols="12"
        sm="2"
      >
        <SprintHeader 
          :sprint="sprintHeader"
          :sprintIndex = "index"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SprintHeader from"../components/SprintHeader.vue"
export default {
  components: {
    SprintHeader,
  },
  computed: {
    sprintHeaderList: {
      get() {
        return this.$store.state.sprintCapacities
      }
    },
  }
}
</script>

<style>

</style>
<template>
<div>
  <SprintGrid />
  <v-btn
      class="mx-2"
      fab
      dark
      color="indigo"
    >
      <v-icon dark>
        mdi-plus
      </v-icon>
    </v-btn>
</div>
</template>

<script>
  import SprintGrid from '../components/SprintGrid.vue'

  export default {
    name: 'Home',

    components: {
      SprintGrid,
    },
  }
</script>

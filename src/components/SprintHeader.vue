<template>
  <v-card
    class="pa-2"
    outlined
  >
    <v-card-text>
      <v-card-title>Sprint {{ sprint.id }}</v-card-title>
      <v-row
        align="center"
        class="mx-0"
      >
        <div class="grey--text">
          Capacity: {{ sprint.Capacity }}
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
</template>

<script>
export default {
  props: ["sprint"]
}
</script>

<style>

</style>
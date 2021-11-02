<template>
  <v-row>
    <v-col>
      <v-card>
        <v-card-text>
          <v-card-title>
            {{ feature.title }}
          </v-card-title>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col
      v-for="s in 5"
      :key="s"
    >
      <v-card
        rounded
        height="100%"
      >
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: ["feature"],
}
</script>

<style>

</style>
<template>
  <v-chip
    class="ma-2"
    :class="workItem.colour"
    label
    text-color="white"
  >
    <v-icon left>
      {{ workItem.icon }}
    </v-icon>
    {{ workItem.title }}
  </v-chip>
</template>

<script>
export default {
  props: ["workItem"]
}
</script>

<style>

</style>
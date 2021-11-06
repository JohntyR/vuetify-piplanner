<template>
  <v-list-item>
    <v-chip
      class="ma-2 work-item"
      :class="workItem.colour"
      label
      text-color="white"
      width=100%
    >
      <v-icon left>
        {{ workItem.icon }}
      </v-icon>
      {{ workItem.title }}
    </v-chip>
  </v-list-item>
</template>

<script>
export default {
  props: ["workItem"]
}
</script>

<style>
.work-item{
  width:100%;
}
</style>
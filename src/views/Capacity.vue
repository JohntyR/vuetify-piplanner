<template>
<div
  class="ma-4"
>
   <v-form
    ref="form"
  >
  <div
    v-for="sprint in capacityList"
    :key="sprint.id"
    class="mb-4"
  >
    <v-text-field
      label="Sprint Capacity"
      hide-details="auto"
      :value="sprint.Capacity"
    >
    </v-text-field>
  </div>
    <v-btn
      color="success"
      class="mr-4"
    >
      Validate
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
    >
      Reset Form
    </v-btn>

    <v-btn
      color="warning"
    >
      Reset Validation
    </v-btn>
  </v-form>
</div>
</template>

<script>
export default {
  computed: {
    capacityList: {
      get() {
        return this.$store.state.sprintCapacities
      }
    }
  }
}
</script>

<style>

</style>
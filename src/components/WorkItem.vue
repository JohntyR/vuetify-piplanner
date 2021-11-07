<template>
  <v-list-item
  class="px-3"
  >
    <v-chip
      class="work-item"
      :class="workItem.colour"
      label
      text-color="white"
      width=100%
      :close="isNotTemplate"
      @click:close="remove()"
    >
      <v-icon left>
        {{ workItem.icon }}
      </v-icon>
      {{ workItem.title }}
      <v-text-field
        v-if="isNotTemplate && workItem.title !='Dep'"
        v-model="workItemEstimate"
        class="px-2 centered-input"
        @blur="updateWorkItemEstimate"
      >{{ workItem.estimate }}</v-text-field>
    </v-chip>
  </v-list-item>
</template>

<script>
export default {
  data() {
    return {
      isNotTemplate: false,
      featureID: null, 
      sprintID: null,
      workItemEstimate: null,
    }
  },
  mounted() {
    if (!this.$store.getters.getTemplateWorkItemIds.includes(this.workItem.id)) {
      this.isNotTemplate = true
    }
    this.featureID = this.featureIDprop
    this.sprintID = this.sprintIDprop
    this.workItemEstimate = this.workItem.estimate
  },
  props: ["workItem", "featureIDprop", "sprintIDprop"],
  methods: {
    remove () {
      let payload = {
        featureID: this.featureID,
        sprintID: this.sprintID,
        workItemID: this.workItem.id
      }
      this.$store.dispatch('deleteSprintWorkItems', payload)
    },
    updateWorkItemEstimate() {
      let payload = {
        featureID: this.featureID,
        sprintID: this.sprintID,
        workItemID: this.workItem.id,
        estimate: this.workItemEstimate,
      }
      console.log(payload);
      this.$store.dispatch('updateWorkItemEstimate', payload)
    }
  },
}
</script>

<style scoped>
  .work-item{
    width:100%;
  }
  .centered-input >>> input {
    text-align: center;
    padding-bottom: 0;
  }
</style>
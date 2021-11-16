<template>
  <v-list-item class="px-3">
    <v-chip
      class="work-item"
      :class="workItem.colour"
      label
      text-color="white"
      width="100%"
      :close="isNotTemplate"
      @click:close="remove()"
    >
      <v-icon left>
        {{ workItem.icon }}
      </v-icon>
      <v-menu
        v-model="menu"
        :close-on-content-click="false"
        :nudge-width="200"
        offset-x
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="rgba(255, 0, 0, 0)"
            dark
            v-bind="attrs"
            v-on="on"
            elevation="0"
            :class="{ 'disable-events': !isNotTemplate }"
          >
            {{ workItem.title }}
          </v-btn>
        </template>
        <v-card>
          <v-text-field
            label="description"
            required
            :value="workItem.description"
            class="mx-2"
          ></v-text-field>
        </v-card>
      </v-menu>
      <v-text-field
        v-if="isNotTemplate && workItem.title != 'Dep'"
        v-model="workItemEstimate"
        class="px-2 centered-input"
        @blur="updateWorkItemEstimate"
        >{{ workItem.estimate }}</v-text-field
      >
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
      menu: false,
    };
  },
  mounted() {
    if (
      !this.$store.getters.getTemplateWorkItemIds.includes(this.workItem.id)
    ) {
      this.isNotTemplate = true;
    }
    this.featureID = this.featureIDprop;
    this.sprintID = this.sprintIDprop;
    this.workItemEstimate = this.workItem.estimate;
  },
  props: ["workItem", "featureIDprop", "sprintIDprop"],
  methods: {
    remove() {
      let payload = {
        featureID: this.featureID,
        sprintID: this.sprintID,
        workItemID: this.workItem.id,
      };
      this.$store.dispatch("deleteSprintWorkItems", payload);
    },
    updateWorkItemEstimate() {
      let payload = {
        featureID: this.featureID,
        sprintID: this.sprintID,
        workItemID: this.workItem.id,
        estimate: this.workItemEstimate,
      };
      this.$store.dispatch("updateWorkItemEstimate", payload);
    },
    //TODO: add item to update description 
  },
};
</script>

<style scoped>
.work-item {
  width: 100%;
}
.centered-input {
  max-width: 25%;
}
.centered-input >>> input {
  text-align: center;
  padding-bottom: 0;
}
.v-chip >>> span {
  justify-content: space-around;
  width: 100%;
}
.disable-events {
  pointer-events: none;
}
</style>
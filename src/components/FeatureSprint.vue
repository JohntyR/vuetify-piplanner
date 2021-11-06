<template>
<v-card
  rounded
  height="100%"
>
  <v-list
    height="100%"
  >
    <draggable
      v-model="workItemList"
      class="list-group" 
      group="workItemList"
    >
      <workItem 
        v-for="workItem in workItemList" 
        :key="workItem.id"
        :workItem="workItem"
      />
    </draggable>
  </v-list>
</v-card>
</template>

<script>
import draggable from "vuedraggable"
import WorkItem from '../components/WorkItem.vue'
export default {
  props: ["sprint", "featureID"],
  data() {
    return {
      sprintID: null
    }
  },
  beforeMount() {
    this.sprintID = this.sprint.id
    this.fID = this.featureID
  },
  mounted() {
  },
  components: {
    draggable,
    WorkItem
  },
  computed: {
      workItemList: {
        get() {
          //console.log(Date.now()); // change ids of items to datestrings
          return this.$store.getters.getSprintWorkItems(this.featureID, this.sprintID)
        },
        set(value) {
          console.log('firing set method');
          let payload = {
            value: value,
            featureID: this.featureID,
            sprintID: this.sprintID,
          }
          this.$store.dispatch('updateSprintWorkItems', payload)
        }
      }
    }
}
</script>

<style>
.list-group {
  height: 100%;
}
</style>
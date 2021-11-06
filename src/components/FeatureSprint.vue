<template>
<v-card
  rounded
  height="100%"
>
  <draggable
    v-model="workItemList"
  >
    <div v-for="workItem in workItemList" :key="workItem.id">
      <WorkItem 
        :workItem="workItem"
      />
    </div>
  </draggable>
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
          console.log(Date.now());
          return this.$store.getters.getSprintWorkItems(this.featureID, this.sprintID)
        },
        set(value) {
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

</style>
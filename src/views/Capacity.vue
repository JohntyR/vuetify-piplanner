<template>
  <div class="ma-10 capacity-card">
    <v-card  max-width="50%" hover>
      <v-tabs v-model="tab" background-color="primary" dark right>
        <v-tab v-for="item in items" :key="item.tab">
          {{ item.tab }}
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item v-for="item in items" :key="item.tab">
          <v-card flat>
            <v-form>
              <v-container>
                <v-row
                  v-for="member in team"
                  :key="member.teamMember"
                >
                  <v-col cols="12" md="3" >
                    <v-text-field
                      label="Team Member"
                      required
                      :value="member.teamMember"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" md="3" >
                    <v-text-field
                      label="Days Off"
                      required
                      :value="member.daysOff"
                    ></v-text-field>
                  </v-col>

                  <v-col class="d-flex" cols="12" md="3">
                    <v-select
                      :items="Activities"
                      label="Activity"
                      :value="member.activity"
                    ></v-select>
                  </v-col>

                  <v-col cols="12" md="3" >
                    <v-text-field
                      label="Capacity"
                      required
                      :value="member.capacity"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab: null,
      items: [
        { tab: "One", content: "Tab 1 Content" },
        { tab: "Two", content: "Tab 2 Content" },
        { tab: "Three", content: "Tab 3 Content" },
        { tab: "Four", content: "Tab 4 Content" },
        { tab: "Five", content: "Tab 5 Content" },
      ],
      Activities: ['Development', 'QA'],
      team: [
        {teamMember: "John", daysOff: 0, activity: null, capacity: 0},
        {teamMember: "Dave", daysOff: 0, activity: null, capacity: 0},
        {teamMember: "Will", daysOff: 0, activity: null, capacity: 0},
        {teamMember: "Mike", daysOff: 0, activity: null, capacity: 0},
      ]
    };
  },
  computed: {
    capacityList: {
      get() {
        return this.$store.state.sprintCapacities;
      },
    },
  },
};
</script>

<style>
  .capacity-card {
    display: flex;
    justify-content: center;
  }
</style>
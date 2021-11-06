<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      permanent
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            PI Planner Upgrade
          </v-list-item-title>
          <v-list-item-subtitle>
            subtext
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to" 
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      
      <v-divider></v-divider>
        <v-list
        dense
        nav
        >
        <v-list-item
          v-for="workItem in workItems"
          :key="workItem.title"
        >
          <draggable
            v-model="workItems"
            :group="{ pull: 'clone', put: 'false' }"
          >
            <WorkItem 
              :workItem="workItem"
            />
          </draggable>
        </v-list-item>
        </v-list>

    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import draggable from "vuedraggable"
import WorkItem from './components/WorkItem.vue'
  export default {
    data: () => ({ 
      drawer: null,
      items: [
        { title: "Todo", icon: "mdi-format-list-checks", to: "/", colour: "blue darken-4" },
        { title: "About", icon: "mdi-help-box", to: "/about", colour: "teal darken-3" },
      ],
    }),
    components: {
      draggable,
      WorkItem
    },
    computed: {
      workItems: {
        get() {
          return this.$store.state.workItems
        },
        set(value) {
          this.$store.commit('updateWorkItems', value)
        }
      }
    }
  }
</script>
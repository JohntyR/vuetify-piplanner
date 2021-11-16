<template>
  <v-row>
    <v-col>
      <v-sheet outlined :color="borderColour" rounded>
        <v-card height="100%" outlined elevation="0">
          <v-card-text>
            <v-text-field
              solo
              v-model="featureTitle"
              @blur="updateFeatureTitle"
            ></v-text-field>
            <v-select
              v-model="featureTshirt"
              :items="items"
              :value="featureTshirt"
              label="T-shirt"
              @change="updateFeatureTShirt"
            ></v-select>
          </v-card-text>
        </v-card>
      </v-sheet>
    </v-col>
    <v-col v-for="sprint in sprints" :key="sprint.id">
      <FeatureSprint :sprint="sprint" :featureID="feature.id" />
    </v-col>
  </v-row>
</template>

<script>
import FeatureSprint from "../components/FeatureSprint.vue";

export default {
  props: ["feature"],
  data() {
    return {
      featureTitle: null,
      featureTshirt: null,
      featureID: null,
      items: ["50", "100", "300"],
    };
  },
  beforeMount() {
    this.featureID = this.feature.id; //in before mount so it happens prior to computed.
  },
  mounted() {
    this.featureTitle = this.feature.title;
    this.featureTshirt = this.feature.tShirt;
  },
  methods: {
    updateFeatureTitle() {
      let payload = {
        id: this.feature.id,
        title: this.featureTitle,
      };

      this.$store.commit("updateFeatureTitle", payload);
    },
    updateFeatureTShirt() {
      let payload = {
        id: this.feature.id,
        tShirt: this.featureTshirt,
      };

      this.$store.commit("updateFeatureTShirt", payload);
    },
  },
  components: {
    FeatureSprint,
  },
  computed: {
    sprints: {
      get() {
        return this.$store.getters.getFeatureSprints(this.featureID);
      },
    },
    borderColour: {
      get() {
        return this.$store.getters.getRandomFeatureBorderColour(this.featureID);
      },
    },
  },
};
</script>

<style>
</style>
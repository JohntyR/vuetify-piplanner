<template>
  <v-row>
    <v-col>
      <v-card>
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
    </v-col>
    <v-col
      v-for="s in $store.state.numSprints"
      :key="s"
    >
      <v-card
        rounded
        height="100%"
      >
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: ["feature"],
  data() {
    return {
      featureTitle: null,
      featureTshirt: null,
      items: ['50', '100', '300'],
    }
  },
  mounted() {
    this.featureTitle = this.feature.title;
    this.featureTshirt = this.feature.tShirt;
  },
  methods: {
    updateFeatureTitle() {
      let payload = {
        id: this.feature.id,
        title: this.featureTitle
      }

      this.$store.commit('updateFeatureTitle', payload);
    },
    updateFeatureTShirt() {
      let payload = {
        id: this.feature.id,
        tShirt: this.featureTshirt
      }

      this.$store.commit('updateFeatureTShirt', payload);
    }
  },
}
</script>

<style>

</style>
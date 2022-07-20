<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-action>
            <NuxtLink to="/planets" style="text-decoration: none;">
              <v-icon large>
                mdi-chevron-left
              </v-icon>
            </NuxtLink>
          </v-card-action>
        </v-card>
      </v-col>
    </v-row>
    <v-row v-if="isLoading">
      <v-col cols="12">
        <v-progress-linear
          indeterminate
          color="primary"
        ></v-progress-linear>
      </v-col>
    </v-row>
    <div v-if="!isLoading">
      <v-row>
        <v-col cols="7">
          <v-card class="planetCard">
            <v-card-title v-text="'Basic Info'"></v-card-title>
            <v-divider></v-divider>
            <v-container>
              <h4><b>Name: </b>{{ planetData.name }}</h4>
              <h4><b>Population: </b>{{ planetData.population }}</h4>
              <h4><b>Rotation Period: </b>{{ planetData.rotation_period }}</h4>
              <h4><b>Orbital Period: </b>{{ planetData.orbital_period }}</h4>
            </v-container>
          </v-card>
        </v-col>
        <v-col cols="5">
          <v-card class="planetCard">
            <v-card-title v-text="'Dimensions'"></v-card-title>
            <v-divider></v-divider>
            <v-container>
              <h4><b>Diameter: </b>{{ planetData.diameter }}</h4>
              <h4><b>Gravity: </b>{{ planetData.gravity }}</h4>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <v-card class="planetCard">
            <v-card-title v-text="'Composition'"></v-card-title>
            <v-divider></v-divider>
            <v-container>
              <h4><b>Terrain: </b>{{ planetData.terrain }}</h4>
              <h4><b>Surface Water: </b>{{ planetData.surface_water }}</h4>
              <h4><b>Climate: </b>{{ planetData.climate }}</h4>
            </v-container>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card class="planetCard">
            <v-card-title v-text="'More Info'"></v-card-title>
            <v-divider></v-divider>
            <v-container>
              <h4><b>Residents: </b>{{ planetData.residents.length }}</h4>
              <h4><b>Films: </b>{{ planetData.films.length }}</h4>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>
<script>
  import { mapActions } from 'vuex';
  export default {
    async asyncData({ params }) {
      const id = params.id;
      return {
        id,
      };
    },
    data: () => ({
      isLoading: false,
    }),
    computed: {
      planetData() {
        return this.$store.state.planetData;
      },
    },
    methods: {
      ...mapActions([
        'getPlanetData',
      ]),
      fetchData() {
        this.isLoading = true;
        this.getPlanetData(this.id).then(() => {
          this.isLoading = false;
        });
      }
    },
    created() {
      this.fetchData();
    },
  };
</script>
<style>
  .planetCard {
    min-height: 250px;
  }
</style>

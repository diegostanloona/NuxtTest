<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-action>
            <NuxtLink to="/people" style="text-decoration: none;">
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
          <v-card class="starshipCard">
            <v-card-title v-text="'Basic Info'"></v-card-title>
            <v-divider></v-divider>
            <v-container>
              <h4><b>Name: </b>{{ starshipData.name }}</h4>
              <h4><b>Model: </b>{{ starshipData.model }}</h4>
              <h4><b>Manufacturer: </b>{{ starshipData.manufacturer }}</h4>
              <h4><b>Cost: </b>{{ starshipData.cost_in_credits }}</h4>
            </v-container>
          </v-card>
        </v-col>
        <v-col cols="5">
          <v-card class="starshipCard">
            <v-card-title v-text="'Measurements'"></v-card-title>
            <v-divider></v-divider>
            <v-container>
              <h4><b>Length: </b>{{ starshipData.length }}</h4>
              <h4><b>Max Atmosphering Speed: </b>{{ starshipData.max_atmosphering_speed }}</h4>
              <h4><b>Crew: </b>{{ starshipData.crew }}</h4>
              <h4><b>Passengers: </b>{{ starshipData.passengers }}</h4>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <v-card class="starshipCard">
            <v-card-title v-text="'Features'"></v-card-title>
            <v-divider></v-divider>
            <v-container>
              <h4><b>Cargo Capacity: </b>{{ starshipData.cargo_capacity }}</h4>
              <h4><b>Consumables: </b>{{ starshipData.consumables }}</h4>
              <h4><b>Hyperdrive Rating: </b>{{ starshipData.hyperdrive_rating }}</h4>
              <h4><b>MGLT: </b>{{ starshipData.MGLT }}</h4>
              <h4><b>Class: </b>{{ starshipData.starship_class }}</h4>
            </v-container>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card class="starshipCard">
            <v-card-title v-text="'More Info'"></v-card-title>
            <v-divider></v-divider>
            <v-container>
              <h4><b>Pilots: </b>{{ starshipData.pilots.length }}</h4>
              <h4><b>Films: </b>{{ starshipData.films.length }}</h4>
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
      starshipData() {
        return this.$store.state.starshipData;
      },
    },
    methods: {
      ...mapActions([
        'getStarshipData',
      ]),
      fetchData() {
        this.isLoading = true;
        this.getStarshipData(this.id).then(() => {
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
  .starshipCard {
    min-height: 250px;
  }
</style>

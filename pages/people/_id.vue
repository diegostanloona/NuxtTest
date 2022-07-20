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
          <v-card class="personCard">
            <v-card-title v-text="'Basic Info'"></v-card-title>
            <v-divider></v-divider>
            <v-container>
              <h4><b>Name: </b>{{ personData.name }}</h4>
              <h4><b>Birth Year: </b>{{ personData.birth_year }}</h4>
              <h4><b>Gender: </b>{{ personData.gender }}</h4>
            </v-container>
          </v-card>
        </v-col>
        <v-col cols="5">
          <v-card class="personCard">
            <v-card-title v-text="'Measurements'"></v-card-title>
            <v-divider></v-divider>
            <v-container>
              <h4><b>Height: </b>{{ personData.height }}</h4>
              <h4><b>Mass: </b>{{ personData.mass }}</h4>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <v-card class="personCard">
            <v-card-title v-text="'Appearance'"></v-card-title>
            <v-divider></v-divider>
            <v-container>
              <h4><b>Hair Color: </b>{{ personData.hair_color }}</h4>
              <h4><b>Skin Color: </b>{{ personData.skin_color }}</h4>
              <h4><b>Eye Color: </b>{{ personData.eye_color }}</h4>
            </v-container>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card class="personCard">
            <v-card-title v-text="'More Info'"></v-card-title>
            <v-divider></v-divider>
            <v-container>
              <h4><b>Films: </b>{{ personData.films.length }}</h4>
              <h4><b>Species: </b>{{ personData.species.length }}</h4>
              <h4><b>Vehicles: </b>{{ personData.vehicles.length }}</h4>
              <h4><b>Starships: </b>{{ personData.starships.length }}</h4>
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
      personData() {
        return this.$store.state.personData;
      },
    },
    methods: {
      ...mapActions([
        'getPersonData',
      ]),
      fetchData() {
        this.isLoading = true;
        this.getPersonData(this.id).then(() => {
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
  .personCard {
    min-height: 250px;
  }
</style>

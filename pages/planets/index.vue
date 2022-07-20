<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-action>
            <NuxtLink to="/" style="text-decoration: none;">
              <v-icon large>
                mdi-chevron-left
              </v-icon>
            </NuxtLink>
          </v-card-action>
          <v-img
            src="https://www.worldatlas.com/upload/39/cb/38/shutterstock-306306104.jpg"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="300px"
          >
            <v-card-title v-text="'Planets'"></v-card-title>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
    <v-row style="margin-top: .8em;">
      <v-col cols="10">
        <v-text-field
          placeholder="Search"
          @change="handleSearch"
          style="margin-top: 0; padding-top: 0;"
        ></v-text-field>
      </v-col>
      <v-col cols="2">
        <v-btn
          :disabled="page===1"
          @click="decreasePage"
        >
          Back
        </v-btn>
        <v-btn
          :disabled="page===10"
          @click="increasePage"
        >
          Next
        </v-btn>
      </v-col>
    </v-row>
    <v-row style="margin-top: 0;">
      <v-col cols="12" v-if="!isLoading">
        <PlanetsTable :planets="planetsData" />
      </v-col>
      <v-col cols="12" v-if="isLoading">
        <v-progress-linear
          indeterminate
          color="primary"
        ></v-progress-linear>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
  import { mapActions } from 'vuex';
  import PlanetsTable from '~/components/planets/planetsTable.vue';
  export default {
    components: {
      PlanetsTable,
    },
    data: () => ({
      isLoading: false,
      page: 1,
      search: '',
    }),
    computed: {
      planetsData() {
        return this.$store.state.planetsData;
      },
    },
    methods: {
      ...mapActions([
        'getPlanetsData',
      ]),
      fetchData() {
        this.isLoading = true;
        this.getPlanetsData({ search: this.search, page: this.page }).then(() => {
          this.isLoading = false;
        });
      },
      increasePage() {
        this.page++;
        this.fetchData();
      },
      decreasePage() {
        this.page > 1 && this.page--;
        this.fetchData();
      },
      handleSearch(evt) {
        this.search = evt;
        this.fetchData();
      },
    },
    created() {
      this.fetchData();
    },
  };
</script>

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
            src="https://media.istockphoto.com/photos/grow-your-network-grow-your-career-picture-id1023551988?k=20&m=1023551988&s=170667a&w=0&h=eOJcHCWR3TWX3RQwjAgD7vv9qC7aULAydgU69uZe830="
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="300px"
          >
            <v-card-title v-text="'People'"></v-card-title>
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
        <PeopleTable :people="peopleData" />
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
  import PeopleTable from '~/components/people/peopleTable.vue';
  export default {
    components: {
      PeopleTable,
    },
    data: () => ({
      isLoading: false,
      page: 1,
      search: '',
    }),
    computed: {
      peopleData() {
        return this.$store.state.peopleData;
      },
    },
    methods: {
      ...mapActions([
        'getPeopleData',
      ]),
      fetchData() {
        this.isLoading = true;
        this.getPeopleData({ search: this.search, page: this.page }).then(() => {
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

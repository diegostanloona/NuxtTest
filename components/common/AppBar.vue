<template>
  <div>
    <v-app-bar
      absolute
      class="appBar"
    >
      <v-app-bar-nav-icon
        @click="toggleNavList();"
      ></v-app-bar-nav-icon>

      <v-toolbar-title class="title">
        Nuxt App
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-navigation-drawer
      v-model="showNavList"
      absolute
      bottom
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          active-class="no_highlight"
        >
          <NuxtLink to="/" style="text-decoration: none;">
            <v-list-item>
              <v-list-item-title>
                  Home
              </v-list-item-title>
            </v-list-item>
          </NuxtLink>
          <NuxtLink to="/people" style="text-decoration: none;">
            <v-list-item>
              <v-list-item-title>
                  People
              </v-list-item-title>
            </v-list-item>
          </NuxtLink>
          <NuxtLink to="/planets" style="text-decoration: none;">
            <v-list-item>
              <v-list-item-title>
                  Planets
              </v-list-item-title>
            </v-list-item>
          </NuxtLink>
          <NuxtLink to="/starships" style="text-decoration: none;">
            <v-list-item>
              <v-list-item-title>
                  Starships
              </v-list-item-title>
            </v-list-item>
          </NuxtLink>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
  export default {
    data: () => ({
      showNavList: false,
    }),
    methods: {
      toggleNavList() {
        this.showNavList = !this.showNavList;
      },
    },
  }
</script>
<style>
  .no_highlight {
    background: transparent;
    color: #FFF !important;
  }
  .no_highlight::before {
    opacity: 0 !important;
  }
</style>
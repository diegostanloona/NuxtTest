<template>
  <v-app dark>
    <AppBar />
    <v-main>
      <v-container
        style="margin-top: 3em"
      >
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from '~/components/common/AppBar.vue';
export default {
    name: "DefaultLayout",
    components: { AppBar }
}
</script>

<template>
  <v-container fluid>
    <v-row dense>
      <v-col
        v-for="item in items"
        :key="item.title"
        :cols="item.cols"
      >
        <v-card>
          <v-img
            :src="item.src"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="300px"
          >
            <v-card-title v-text="item.title"></v-card-title>
          </v-img>

          <v-card-actions style="min-height: 40px">
            <NuxtLink v-if="item.url" :to="item.url" class="see_more_link">
              See more
            </NuxtLink>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import AppBar from '~/components/common/AppBar.vue'
export default {
  components: {
    AppBar,
  },
  name: 'IndexPage',
  data: () => ({
    items: [
      {
        title: 'People',
        src: 'https://media.istockphoto.com/photos/grow-your-network-grow-your-career-picture-id1023551988?k=20&m=1023551988&s=170667a&w=0&h=eOJcHCWR3TWX3RQwjAgD7vv9qC7aULAydgU69uZe830=',
        cols: 4,
        url: '/people',
      },
      {
        title: 'Planets',
        src: 'https://www.worldatlas.com/upload/39/cb/38/shutterstock-306306104.jpg',
        cols: 8,
        url: '/planets',
      },
      {
        title: 'Starships',
        src: 'https://www.designnews.com/sites/designnews.com/files/alamy%20spaceship.jpg',
        cols: 7,
        url: '/starships',
      },
      {
        title: 'More soon',
        src: '',
        cols: 5,
      },
    ]
  })
}
</script>
<style>
  .see_more_link {
    text-decoration: none;
  }
</style>
<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-center">
            Name
          </th>
          <th class="text-center">
            Model
          </th>
          <th class="text-center">
            Manufacturer
          </th>
          <th class="text-center">
            Cost
          </th>
          <th class="text-center">
            Length
          </th>
          <th class="text-center">
            Crew
          </th>
          <th class="text-center">
            Passengers
          </th>
          <th class="text-center">
            Class
          </th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="starship in starships"
          :key="starship.url"
        >
          <td class="text-center">{{ starship.name }}</td>
          <td class="text-center">{{ starship.model }}</td>
          <td class="text-center">{{ starship.manufacturer }}</td>
          <td class="text-center">{{ starship.cost_in_credits }}</td>
          <td class="text-center">{{ starship.length }}</td>
          <td class="text-center">{{ starship.crew }}</td>
          <td class="text-center">{{ starship.passengers }}</td>
          <td class="text-center">{{ starship.starship_class }}</td>
          <td class="text-center">
            <NuxtLink :to="starship.url" style="text-decoration: none;">
              <v-icon>
                mdi-chevron-right
              </v-icon>
            </NuxtLink>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>
<script>
  export default {
    props: [
      'starships',
    ],
  }
</script>
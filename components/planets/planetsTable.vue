<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-center">
            Name
          </th>
          <th class="text-center">
            Rotation period
          </th>
          <th class="text-center">
            Orbital period
          </th>
          <th class="text-center">
            Diameter
          </th>
          <th class="text-center">
            Climate
          </th>
          <th class="text-center">
            Terrain
          </th>
          <th class="text-center">
            Gravity
          </th>
          <th class="text-center">
            Population
          </th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="planet in planets"
          :key="planet.url"
        >
          <td class="text-center">{{ planet.name }}</td>
          <td class="text-center">{{ planet.rotation_period }}</td>
          <td class="text-center">{{ planet.orbital_period }}</td>
          <td class="text-center">{{ planet.diameter }}</td>
          <td class="text-center">{{ planet.climate }}</td>
          <td class="text-center">{{ planet.terrain }}</td>
          <td class="text-center">{{ planet.gravity }}</td>
          <td class="text-center">{{ planet.population }}</td>
          <td class="text-center">
            <NuxtLink :to="planet.url" style="text-decoration: none;">
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
      'planets',
    ],
  }
</script>
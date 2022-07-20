<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-center">
            Name
          </th>
          <th class="text-center">
            Height
          </th>
          <th class="text-center">
            Mass
          </th>
          <th class="text-center">
            Birth year
          </th>
          <th class="text-center">
            Gender
          </th>
          <th class="text-center">
            Films
          </th>
          <th class="text-center">
            Vehicles
          </th>
          <th class="text-center">
            Starships
          </th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="person in people"
          :key="person.url"
        >
          <td class="text-center">{{ person.name }}</td>
          <td class="text-center">{{ person.height }}</td>
          <td class="text-center">{{ person.mass }}</td>
          <td class="text-center">{{ person.birth_year }}</td>
          <td class="text-center">{{ person.gender }}</td>
          <td class="text-center">{{ person.films }}</td>
          <td class="text-center">{{ person.vehicles }}</td>
          <td class="text-center">{{ person.starships }}</td>
          <td class="text-center">
            <NuxtLink :to="person.url" style="text-decoration: none;">
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
      'people',
    ],
  }
</script>
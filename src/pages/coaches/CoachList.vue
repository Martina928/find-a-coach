<template>
  <div>
    <h1>CoachList</h1>
    <section>
      <div class="controls">
        <button>Refresh</button>
        <router-link to="/register">Register as coach</router-link>
      </div>
      <ul v-if="hasCoach">
        <CoachInfo 
          v-for="coach in filteredCoachesList" 
          :key="coach.id"
          :id="coach.id"
          :firstName="coach.firstName"
          :lastName="coach.lastName"
          :areas="coach.areas"
          :rate="coach.rate"></CoachInfo>
      </ul>
      <h3 v-else>No coaches found.</h3>
    </section>
  </div>
</template>

<script>
import CoachInfo from '../../components/coaches/CoachInfo.vue';

export default {
  computed:{
    filteredCoachesList() {
      // ['namespaced/propertyName']
      return this.$store.getters['coaches/coachesList']
    },
    hasCoach() {
      return this.$store.getters['coaches/hasCoach']
    }
  },
  components: {
    CoachInfo
  }
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
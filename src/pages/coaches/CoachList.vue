<template>
  <div>
    <h1>CoachList</h1>
    <section>
      <div class="controls">
        <button>Refresh</button>
        <router-link to="/register">Register as coach</router-link>
      </div>
      <ul v-if="hasCoach">
        <li v-for="coach in filteredCoachesList" :key="coach.id">
          {{ coach.firstName }}
        </li>
      </ul>
      <h3 v-else>No coaches found.</h3>
    </section>
  </div>
</template>

<script>
export default {
  computed:{
    filteredCoachesList() {
      // ['namespaced/propertyName']
      return this.$store.getters['coaches/coachesList']
    },
    hasCoach() {
      return this.$store.getters['coaches/hasCoach']
    }
  }
}
</script>
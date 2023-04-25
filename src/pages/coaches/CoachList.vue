<template>
  <div>
    <section>
      <CoachFilter @changeFilter="updateCoachList"></CoachFilter>
    </section>

    <section>
      <BaseCard>
        <div class="controls">
          <BaseButton mode="outline">Refresh</BaseButton>
          <BaseButton v-if="!isCoach" isLink to="/register">Register as coach</BaseButton>
        </div>
        <ul v-if="hasCoach">
          <CoachInfo
            v-for="coach in filteredCoachesList"
            :key="coach.id"
            :id="coach.id"
            :firstName="coach.firstName"
            :lastName="coach.lastName"
            :areas="coach.areas"
            :rate="coach.rate"
          ></CoachInfo>
        </ul>
        <h3 v-else>No coaches found.</h3>
      </BaseCard>
    </section>
  </div>
</template>

<script>
import CoachInfo from '../../components/coaches/CoachInfo.vue';
import CoachFilter from '../../components/coaches/CoachFilter.vue';

export default {
  data() {
    return {
      activeFilter: {
        frontend: true,
        backend: true,
        career: true,
      }
    }
  },
  computed: {
    filteredCoachesList() {
      // ['namespaced/propertyName']
      const coachList =  this.$store.getters['coaches/coachesList'];
      // 用 activeFilter 去過濾
      return coachList.filter((coach) => {
        for(const key in this.activeFilter) {
          if(this.activeFilter[key]) {
            return coach.areas.includes(key);
          }
        }
      })
    },
    hasCoach() {
      return this.$store.getters['coaches/hasCoach'];
    },
    isCoach() {
      return this.$store.getters['coaches/isCoach'];
    }
  },
  methods: {
    updateCoachList(filter) {
      this.activeFilter = filter;
    }
  },
  components: {
    CoachInfo,
    CoachFilter
  }
};
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
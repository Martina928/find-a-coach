<template>
  <div>
    <section>
      <BaseCard>
        <h2>{{ fullName }}</h2>
        <h3>${{ rate }}/hour</h3>
      </BaseCard>
    </section>

    <section>
      <BaseCard>
        <header>
          <h2>Interested? Reach out now!</h2>
          <BaseButton :isLink="true" :to="contactLink">Contact</BaseButton>
        </header>
        <!-- for render ContactCoach router view -->
        <router-view></router-view>
      </BaseCard>
    </section>

    <section>
      <BaseCard>
        <BaseBadge v-for="area in areas" :key="area" :type="area" :text="area"></BaseBadge>
        <p>{{ description }}</p>
      </BaseCard>
    </section>
  </div>
</template>

<script>
export default {
  // for router load selected coach id
  props: ['id'],
  data() {
    return {
      selectedCoach: null
    };
  },
  computed: {
    fullName() {
      return `${this.selectedCoach.firstNama} ${this.selectedCoach.lastName}`;
    },
    contactLink() {
      return `${this.$route.path}/contact`;
    },
    areas() {
      return this.selectedCoach.areas;
    },
    rate() {
      return this.selectedCoach.hourlyRate;
    },
    description() {
      return this.selectedCoach.description;
    }
  },

  // life cycle hook -> created
  created() {
    this.selectedCoach = this.$store.getters['coaches/coachesList'].find(
      coach => coach.id === this.id
    );
  }
};
</script>
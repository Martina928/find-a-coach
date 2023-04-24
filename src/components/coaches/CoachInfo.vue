<template>
  <li>
    <h3>{{ fullName }}</h3>
    <h4>{{ rate }}</h4>
    <div>
      <BaseBadge v-for="area in areas" :key="area" :type="area" :text="area"></BaseBadge>
    </div>
    <div class="actions">
      <!-- 隱式 prop 綁定 -->
      <BaseButton isLink :to="coachContactPath">Contact</BaseButton>
      <BaseButton isLink :to="coachDetailPath">View Detail</BaseButton>
    </div>
  </li>
</template>

<script>
export default {
  props: ['id', 'firstName', 'lastName', 'rate', 'areas'],
  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
    coachContactPath() {
      // 取得當前路由
      return `${this.$route.path}/${this.id}/contact`; // coaches/:id/contact
    },
    coachDetailPath() {
      return `${this.$route.path}/${this.id}`;
    }
  }
}
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>
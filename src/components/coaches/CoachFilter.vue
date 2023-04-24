<template>
  <BaseCard>
    <h2>Find Your Coach</h2>
    <span class="filter-option">
      <input type="checkbox" id="frontend" checked @change="setFilter"/>
      <label for="frontend">Frontend</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="backend" checked @change="setFilter"/>
      <label for="backend">Backend</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="career" checked @change="setFilter"/>
      <label for="career">Career</label>
    </span>
  </BaseCard>
</template>

<script>
export default {
  emits: ['changeFilter'],
  data() {
    return {
      filter: {
        frontend: true,
        backend: true,
        career: true
      }
    }
  },
  methods: {
    setFilter() {
      const inputId = event.target.id;
      const isActive = event.target.checked;
      const updatedFilter = {
        ...this.filter,
        [inputId]: isActive // 有變的值去取代原本的值
      };
      this.filter = updatedFilter;
      this.$emit('changeFilter', this.filter); // 把過濾結果傳給父層
    }
  }
}

</script>

<style scoped>
h2 {
  margin: 0.5rem 0;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}
</style>
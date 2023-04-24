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
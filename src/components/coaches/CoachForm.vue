<template>
  <form @submit.prevent="submitForm">
    <div class="form-control">
      <label for="firstName">First Name</label>
      <input type="text" id="firstName" v-model.trim="firstName"/>
    </div>
    <div class="form-control">
      <label for="lastName">Last Name</label>
      <input type="text" id="lastName" v-model.trim="lastName"/>
    </div>
    <div class="form-control">
      <label for="description">Description</label>
      <textarea name="description" id="description" rows="5" v-model.trim="description"></textarea>
    </div>
    <div class="form-control">
      <label for="rate">Hourly Rate</label>
      <input type="number" id="rate" v-model.number="rate"/>
    </div>
    <div class="form-control">
      <h3>Areas of Expertise</h3>
      <div>
        <input type="checkbox" id="frontend" value="frontend" v-model="areas"/>
        <label for="frontend">Frontend Development</label>
      </div>
      <div>
        <input type="checkbox" id="backend" value="backend" v-model="areas"/>
        <label for="backend">Backend Development</label>
      </div>
      <div>
        <input type="checkbox" id="career" value="career" v-model="areas"/>
        <label for="career">Career Advisory</label>
      </div>
    </div>

    <BaseButton>Register</BaseButton>
  </form>
</template>

<script>
export default {
  emits: ['saveCoach'],
  data() {
    return {
      firstName: '',
      lastName: '',
      description: '',
      rate: null,
      areas: [],
    };
  },
  methods: {
    submitForm() {
      const newCoach = {
        first: this.firstName,
        last: this.lastName,
        des: this.description,
        rate: this.rate,
        areas: this.areas
      }

      console.log(newCoach);
      // 將 data 傳給父層，從父層更改 store 中的狀態
      this.$emit('saveCoach', newCoach);
    }
  }
}
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline-block;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>
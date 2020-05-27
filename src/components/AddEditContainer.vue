<template>
  <div>
    <b-row>
      <b-col sm="7" offset="3">
        <b-form @submit="onSubmit" v-if="show">
          <b-form-group
            id="input-group-title"
            label="Title:"
            label-for="title"
          >
            <b-form-input
              id="title"
              v-model="form.title"
              required
              placeholder="Enter title"
            ></b-form-input>
          </b-form-group>

          <b-form-group 
            id="input-description" 
            label="Task Description :" 
            label-for="description"
          >
            <b-form-textarea
              id="description"
              v-model="form.description"
              required
              placeholder="Enter task description"
              rows="8"
            ></b-form-textarea>
          </b-form-group>

          <b-form-group 
            id="input-deadline" 
            label="Deadline :" 
            label-for="deadline"
          >
            <b-form-input
              id="deadline"
              v-model="form.deadline"
              required
              placeholder="Enter task deadline"
            ></b-form-input>
          </b-form-group>          

          <b-button type="submit" variant="primary">Submit</b-button>
        </b-form>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          title: '',
          description: '',
          deadline: ''
        },
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      }
    }
  }
</script>
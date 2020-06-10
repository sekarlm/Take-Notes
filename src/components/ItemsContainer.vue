<template>
  <div class="container">
    <b-row class="row-container">
      <b-col
        class="col-container"
        sm="7"
        offset="3"
      >
        <b-jumbotron class="task-container">
          <b-list-group class="group-task">
            <b-list-group-item
              v-for="(todo, index) in todos"
              id="list-task"
              :key="todo.id"
              class="flex-column align-items-start"
            >
              <div
                v-if="!todo.editing"
                class="item-container"
              >
                <div
                  id="header-task-list"
                  class="d-flex w-100 justify-content-between"
                >
                  <h5 class="mb-1">
                    {{ todo.title }}
                  </h5>
                  <div class="btn-group">
                    <b-button
                      class="edit-btn"
                      size="sm"
                      @click="editTodo(todo)"
                    >
                      <b-icon
                        icon="pencil"
                        variant="primary"
                      />
                    </b-button>
                    <b-button
                      class="delete-btn"
                      size="sm"
                      @click="deleteTodo(index)"
                    >
                      <b-icon
                        icon="trash"
                        variant="danger"
                      />
                    </b-button>
                  </div>
                </div>

                <p class="mb-1">
                  {{ todo.description }}
                </p>

                <small>Deadline : {{ todo.deadline }}</small>
              </div>

              <div
                v-else
                class="edit-container"
                @blur="doneEdit(todo)"
              >
                <b-form-input
                  id="title-edit"
                  v-model="todo.title"
                />
                <b-form-textarea
                  id="description-edit"
                  v-model="todo.description"
                  rows="5"
                />
                <b-form-input
                  id="deadline-edit"
                  v-model="todo.deadline"
                />
                <b-button
                  class="done-btn"
                  variant="outline-primary"
                  @click="doneEdit(todo)"
                >
                  Done
                </b-button>
              </div>
            </b-list-group-item>
          </b-list-group>

          <hr class="my-4">
          <b-button
            v-b-modal.modal-add-notes
            class="add-btn"
            block
            variant="primary"
          >
            Add New Task
          </b-button>
        </b-jumbotron>

        <b-modal
          id="modal-add-notes"
          ref="modal"
          title="Submit Your Note"
          @show="resetModal"
          @hidden="resetModal"
          @ok="handleOk"
        >
          <b-form
            ref="form"
            @submit.stop.prevent="handleSubmit"
          >
            <b-form-group
              :state="todo_state"
              label="Title"
              label-for="title-input"
              invalid-feedback="Title is required"
            >
              <b-form-input
                id="title-input"
                v-model="todo_input.title"
                :state="todo_state"
                required
              />
            </b-form-group>

            <b-form-group
              label="Task Description"
              label-for="description-input"
            >
              <b-form-textarea
                id="title-input"
                v-model="todo_input.description"
                rows="8"
              />
            </b-form-group>

            <b-form-group
              label="Deadline"
              label-for="deadline-input"
              description="example : 05 Dec 2020"
            >
              <b-form-input
                id="title-input"
                v-model="todo_input.deadline"
              />
            </b-form-group>
          </b-form>
        </b-modal>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import moment from 'moment'

export default {
    name: 'Items',
    data() {
        return {
            todo_input: {
                'id': null,
                'title': 'Helo',
                'description': '',
                'deadline': null,
                'editing': false
            },
            todo_state: null,
            todos: [
                {
                    'id': 0,
                    'title': 'Finish Coding Assignment',
                    'description': 'Make web application using VueJs. It is a web application to record college assignments. It can add new task, delete and edit existing task.',
                    'deadline': this.format_date('28 May 2020'),
                    'editing': false
                },
                {
                    'id': 1,
                    'title': 'Finish Machine Learning Assignment',
                    'description': 'Learn NLP with PyTorch. NLP or Natural Language Processing is a pseudoscientific approach to communication, personal development, and psychotherapy created by Richard Bandler',
                    'deadline': this.format_date('30 May 2020'),
                    'editing': false
                }
            ],
            show: true,
            modalShow: false
        }
    },
    methods: {
        format_date(value) {
            if(value) {
                return moment(String(value)).format('YYYY-MM-DD')
            }
        },
        deleteTodo(id) {
            // alert(id)
            this.todos.splice(id, 1)
            // console.log(this.todos)
        },
        editTodo(todo) {
            todo.editing = true
        },
        doneEdit(todo) {
            todo.editing = false
        },
        checkFormValidity() {
            const valid = this.$refs.form.checkValidity()
            this.todo_state = valid
            return valid
        },
        resetModal() {
            this.todo_input = {
                'id': null,
                'title': '',
                'description': '',
                'deadline': null
            }
            this.todo_state = null
        },
        handleOk(bvModalEvt) {
            bvModalEvt.preventDefault()
            this.handleSubmit(this.todos.id)
        },
        handleSubmit(id) {
            if (!this.checkFormValidity()) {
                return
            }
            this.todo_input.id = id++
            this.todo_input.deadline = this.format_date(this.todo_input.deadline)
            this.todos.push(this.todo_input)
            
            this.$nextTick(() => {
                this.$bvModal.hide('modal-add-notes')
            })
        }
    }
}
</script>

<style scoped>
.task-container {
    background-color: white;
    height: 100%;
}
.delete-btn, .edit-btn {
    border-color: white;
    background-color: white;
}
#header-task-list {
    margin-bottom: 10px;
}
#header-task-list h5 {
    font-weight: bold;
}
.edit-container {
    margin: 10px 2px;
}
#title-edit, #description-edit, #deadline-edit {
    margin-bottom: 10px;
}
</style>
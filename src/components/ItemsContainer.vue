<template>
    <div>
        <b-row>
            <b-col sm="7" offset="3">
                <b-jumbotron>
                    <b-list-group>
                        <b-list-group-item 
                        to="/details"
                        v-for="todo in todos"
                        :key="todo.id"
                        class="flex-column align-items-start">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1">{{ todo.title }}</h5>
                                <div class="btn-group">
                                    <b-button size="sm" class="btn" variant="outline-primary">Edit</b-button>
                                    <b-button size="sm" class="btn" variant="outline-danger">Delete</b-button>
                                </div>
                            </div>

                            <p class="mb-1">
                                {{ todo.description.substring(0,50)+".." }}
                            </p>

                            <small>Deadline : {{ todo.deadline }}</small>
                        </b-list-group-item>
                    </b-list-group>
                    <hr class="my-4">
                    <b-button v-b-modal.modal-prevent-closing variant="primary">Add Notes</b-button>
                </b-jumbotron>

                <b-modal
                    id="modal-prevent-closing"
                    ref="modal"
                    title="Submit Your Note"
                    @show="resetModal"
                    @hidden="resetModal"
                    @ok="handleOk"
                >
                    <form ref="form" @submit.stop.prevent="handleSubmit">
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
                            ></b-form-input>
                        </b-form-group>

                        <b-form-group
                            label="Task Description"
                            label-for="description-input"
                        >
                            <b-form-textarea
                                id="title-input"
                                v-model="todo_input.description"
                                rows="8"
                            ></b-form-textarea>
                        </b-form-group>

                        <b-form-group
                            label="Deadline"
                            label-for="deadline-input"
                            description="example : 05 Dec 2020"
                        >
                            <b-form-input
                                id="title-input"
                                v-model="todo_input.deadline"
                            ></b-form-input>
                        </b-form-group>
                    </form>
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
                'title': '',
                'description': '',
                'deadline': null
            },
            todo_state: null,
            todos: [
                {
                    'id': 1,
                    'title': 'Finish Coding Assignment',
                    'description': 'Make web application using VueJs. It is a web application to record college assignments. It can add new task, delete and edit existing task.',
                    'deadline': this.format_date('28 May 2020')
                },
                {
                    'id': 2,
                    'title': 'Finish Machine Learning Assignment',
                    'description': 'Learn NLP with PyTorch. NLP or Natural Language Processing is a pseudoscientific approach to communication, personal development, and psychotherapy created by Richard Bandler',
                    'deadline': this.format_date('30 May 2020')
                }
            ]
        }
    },
    methods: {
        format_date(value) {
            if(value) {
                return moment(String(value)).format('YYYY-MM-DD')
            }
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
            this.handleSubmit()
        },
        handleSubmit() {
            if (!this.checkFormValidity()) {
                return
            }
            this.todo_input.id = this.todos.id++
            this.todo_input.deadline = this.format_date(this.todo_input.deadline)
            this.todos.push(this.todo_input)
            
            this.$nextTick(() => {
                this.$bvModal.hide('modal-prevent-closing')
            })
        }
    }
}
</script>

<style scoped>
</style>
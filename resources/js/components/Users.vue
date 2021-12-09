<template>
    <div class="container">
        <div class="row mt-5">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Users Table</h3>
                        <div class="card-tools">
                            <!-- <button class="btn btn-success" data-toggle="modal">
                                Add New <i class="fas fa-user-plus fa-fw"></i>
                            </button> -->
                            <b-button v-b-modal.addUser variant="success">Add New <i class="fas fa-user-plus fa-fw"></i> </b-button>
                        </div>
                    </div>
                    <!-- /.card-header -->

                    <div>{{ this.output }}</div>
                    <b-table
                        hover
                        head-variant="dark"
                        id="pages-table"
                        :items="items"
                        :fields="fields"
                    >
                        <template slot="actions" slot-scope="user">
                            <button
                                class="btn btn-dark"
                                @click="update(user)"
                                :ref="'btn' + user.index"
                            >
                                Update
                            </button>
                            <button
                                class="btn btn-dark"
                                @click="update(user)"
                                :ref="'btn' + user.index"
                            >
                                Delete
                            </button>
                        </template>
                    </b-table>
                </div>

                <!-- /.card-body -->
            </div>
            <!-- /.card -->
        </div>
        <!-- Model -->
        <b-modal
            id="addUser"
            ref="modal"
            centered
            title="Add User Info"
            @show="resetModal"
            @hidden="resetModal"
            @ok="handleOk"
        >
            <form ref="form" @submit.stop.prevent="handleSubmit">
                <b-form-group
                    label="Name"
                    label-for="name-input"
                    invalid-feedback="Name is required"
                    :state="nameState"
                >
                    <b-form-input
                        id="name-input"
                        v-model="name"
                        :state="nameState"
                        required
                    ></b-form-input>
                </b-form-group>
            </form>
        </b-modal>
    </div>

    <!-- Model  -->
    <!-- <div
            class="modal fade"
            id="addNew"
            tabindex="-1"
            role="dialog"
            aria-labelledby="addNewLabel"
            aria-hidden="true"
        >
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="addNewLabel">Add New</h5>
                        <h5 class="modal-title" id="addNewLabel">
                            Update User's Info
                        </h5>
                        <button
                            type="button"
                            class="btn btn-secondary"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form @submit.prevent="createUser">
                        <div class="model-body">
                            <div class="form-group">
                                <input
                                    id="name"
                                    v-model="form.name"
                                    type="text"
                                    name="name"
                                    class="form-control"
                                    placeholder="Name"
                                />
                                <HasError :form="form" field="name" />
                            </div>

                            <div class="form-group">
                                <input
                                    id="email"
                                    v-model="form.email"
                                    type="email"
                                    email="email"
                                    class="form-control"
                                    placeholder="Email Address"
                                />
                                <HasError :form="form" field="email" />
                            </div>
                            <div class="form-group">
                                <textarea
                                    v-model="form.bio"
                                    type="text"
                                    bio="bio"
                                    placeholder="Short Bio for user (Optional)"
                                ></textarea>
                                <div
                                    v-if="form.errors.has('bio')"
                                    v-html="form.errors.get('bio')"
                                />
                            </div>


                            

                            <div class="form-group">
                                <select
                                    name="usertype"
                                    v-model="form.usertype"
                                    id="usertype"
                                    class="form-control"
                                    :class="{
                                        'is-valid': form.error.has('usertype'),
                                    }"
                                >
                                    <option value="">Select User Role</option>
                                    <option value="admin">Admin</option>
                                    <option value="user">Standard User</option>
                                    <option value="author">Author</option>
                                </select>
                                <has-error
                                    :form="form"
                                    field="type"
                                ></has-error>
                            </div>

                            <div class="form-group">
                                <textarea
                                    v-model="form.password"
                                    type="text"
                                    password="password"
                                    placeholder="Password"
                                ></textarea>
                                <div
                                    v-if="form.errors.has('password')"
                                    v-html="form.errors.get('password')"
                                />
                            </div>
                        </div>
                        <div class="model-footer">
                            <button
                                type="button"
                                class="btn btn-danger"
                                data-dismiss="model"
                            >
                                Close
                            </button>
                            <button type="button" class="btn btn-primary">
                                Create
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div> -->
    <!-- </div> -->
</template>

<script>
export default {
    data() {
        return {
            name: "",
            nameState: null,
            submittedNames: [],
            output: null,
            items: [
                {
                    id: 1,
                    name: "Tony",
                },
                {
                    id: 2,
                    name: "John",
                },
                {
                    id: 3,
                    name: "Paul",
                },
            ],
            fields: [
                {
                    key: "id",
                    label: "ID",
                    sortable: true,
                },
                { key: "name" },
                { key: "email" },
                { key: "password" },
                { key: "type" },
                { key: "modify" },
            ],
            // form: new Form({
            //     name: "",
            //     email: "",
            //     password: "",
            //     usertype: "",
            //     bio: "",
            //     photo: "",
            // }),
        };
    },
    method: {
        update(user) {
            // I need to disable the button here
            this.output = data;
            data.item.name = "Dave";
            this.$refs["btn" + data.index].disabled = true;
        },

        // createUser() {
        //     this.form.post("api/user");
        // },
        checkFormValidity() {
            const valid = this.$refs.form.checkValidity();
            this.nameState = valid;
            return valid;
        },
        resetModal() {
            this.name = "";
            this.nameState = null;
        },
        handleOk(bvModalEvt) {
            // Prevent modal from closing
            bvModalEvt.preventDefault();
            // Trigger submit handler
            this.handleSubmit();
        },
        handleSubmit() {
            // Exit when the form isn't valid
            if (!this.checkFormValidity()) {
                return;
            }
            // Push the name to submitted names
            this.submittedNames.push(this.name);
            // Hide the modal manually
            this.$nextTick(() => {
                this.$bvModal.hide("addUser");
            });
        },
    },

    mounted() {
        console.log("Component mounted.");
    },
};
</script>

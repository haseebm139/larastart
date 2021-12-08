<template>
    <div class="container">
        <div class="row mt-5">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Users Table</h3>

                        <div class="card-tools">
                            <button class="btn btn-success" data-toggle="modal" data-target="#addNew" >Add New <i class="fas fa-user-plus fa-fw"></i></button>
                        </div>
                    </div>
                    <!-- /.card-header -->
                    <div class="card-body table-responsive p-0">
                        <table class="table table-hover text-nowrap">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Type</th>
                                    <th>Modify</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>183</td>
                                    <td>John Doe</td>
                                    <td>11-7-2014</td>
                                    <td>
                                        <span class="tag tag-success"
                                            >Approved</span
                                        >
                                    </td>
                                    <td>
                                        <a href="#">
                                            <i class="fas fa-edit blue"></i
                                        ></a>
                                        /
                                        <a href="#">
                                            <i class="fas fa-trash red"></i
                                        ></a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <!-- /.card-body -->
                </div>
                <!-- /.card -->
            </div>
        </div>

        <!-- Model  -->
        <div
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
                <div class="model-body">
                    <div class="form-group">
                         <input id="name" v-model="form.name" type="text" name="name" class="form-control" placeholder="Name">
                         <HasError :form="form" field="name" /></div>

                    <div class="form-group">
                        <input id="email" v-model="form.email" type="text" email="email" class="form-control" placeholder="Email Address">
                         <HasError :form="form" field="email" /></div>
                    </div>

                    <div class="form-group">
                        <textarea v-model="form.bio" type="text" bio="bio" placeholder="Short Bio for user (Optional)"></textarea>
                        <div v-if="form.errors.has('bio')" v-html="form.errors.get('bio')" />
                    </div>

                    <div class="form-group">
                        <select name="name" v-model="form.type" id="type" class="form-control" :class="{
                            'is-valid' : form.error.has('type')}">
                            <option value="">Select User Role</option>    
                            <option value="admin">Admin</option>    
                            <option value="user">Standard User</option>    
                            <option value="author">Author</option>    
                        </select>
                        <has-error :form="form" field="type"></has-error>
                    </div>

                    <div class="form-group">
                        <textarea v-model="form.password" type="text" password="password" placeholder="Password"></textarea>
                        <div v-if="form.errors.has('password')" v-html="form.errors.get('password')" />
                    </div>

                </div>

                    <div class="model-footer">
                        <button type="button" class="btn btn-danger"
                        data-dismiss= "model">Close</button>
                        <button type="button" class="btn btn-primary"
                        >Create</button>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

    data() {
        return {
            form: new Form({
                name: '',
                email:'',
                password: '',
                type: '',
                bio: '',
                photo: '',
            })
        }
    },
    
    mounted() {
        console.log("Component mounted.");
    },
};
</script>

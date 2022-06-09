<template>
<main>
<div
        class="modal fade"
        id="exampleModalToggle"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabindex="-1"
        >
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalToggleLabel">Post</h5>
                <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                ></button>
            </div>
            <div class="modal-body">
                <div class="row g-0">
                <form id="MyForm" action="#" class="col-12 w-75 m-auto">
                    <div class="input-group">
                    <i class="fa-solid fa-user input-group-text"></i>
                    <input
                        type="text"
                        class="form-control"
                        name="title"
                        id="title"
                        v-model="post.title"
                        required
                        :state="nameState"
                    />
                    </div>
                    <div class="form-group col-12 my-2">
                    <textarea
                        name="description"
                        id="description"
                        cols="30"
                        rows="10"
                        class="form-control g-0"
                        placeholder="Description"
                        v-model="post.description"
                        required
                        :state="nameState"
                    >
                    </textarea>
                    </div>
                    <div class="form-group-col-12">
                    <label for="editions"> Edition: </label>
                    <select
                    class="form-select"
                        id="editions"
                        name="editions"
                        v-model="post.edition"
                        required
                        :state="nameState"
                    >
                        <option
                        :value="edition"
                        v-for="edition in postdata.editions"
                        :key="edition"
                        :state="nameState"
                        >
                        {{ edition }}
                        </option>
                    </select>
                    </div>
                    <div class="col-12">
                    <label>Share On</label>
                    <div v-for="media in postdata.shareon" :key="media">
                        <input
                        type="checkbox"
                        name="socialmedia"
                        id="socialmedia"
                        :value="media"
                        :state="nameState"
                        v-model="post.shareon"
                        />
                        &nbsp; &nbsp; &nbsp; {{ media }}
                    </div>
                    </div>
                    <div class="col-12">
                    <label>Category</label>
                    <div v-for="category in postdata.categories" :key="category">
                        <input
                        type="radio"
                        name="category"
                        id="category"
                        :value="category"
                        v-model="post.category"
                        :state="nameState"
                        />
                        &nbsp; &nbsp; &nbsp;
                        <label :state="nameState"> {{ category }}</label>
                    </div>
                    </div>
                    <div class="col-12">
                    <label for="share immediately"> share immediately </label>
                    <br />
                    <input
                        type="checkbox"
                        v-model="post.shareimmediately"
                        true-value="immediatly"
                        false-value="later"
                        :state="nameState"
                    />
                    </div>
                </form>
                </div>
            </div>
            <div class="modal-footer">
                <button
                class="btn btn-primary"
                data-bs-target="#exampleModalToggle2"
                data-bs-toggle="modal"
                >
                Next
                </button>
            </div>
            </div>
        </div>
        </div>
        <div
        class="modal fade"
        id="exampleModalToggle2"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel2"
        tabindex="-1"
        >
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalToggleLabel2">Your Data</h5>
                <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                ></button>
            </div>
            <div class="modal-body">
                <div class="container p-5">
                <!-- End of the form-->
                <div class="row g-0">
                    <div class="col-12">
                    <label>Title: {{ post.title }} </label>
                    </div>
                </div>
                <div class="row g-0">
                    <div class="col-12" style="white-space: pre">
                    <label>Description: {{ post.description }} </label>
                    </div>
                </div>
                <div class="row g-0">
                    <div class="col-12" style="white-space: pre">
                    <label>Edition: {{ post.edition }} </label>
                    </div>
                </div>
                <div class="row g-0">
                    <div class="col-12" style="white-space: pre">
                    <label>Share On: </label>
                    <ul>
                        <li v-for="media in post.shareon" :key="media">{{ media }}</li>
                    </ul>
                    </div>
                </div>

                <div class="row g-0">
                    <div class="col-12" style="white-space: pre">
                    <label>category: {{ post.category }} </label>
                    </div>
                </div>
                <div class="row g-0">
                    <div class="col-12" style="white-space: pre">
                    <label>Immediately: {{ post.shareimmediately }} </label>
                    </div>
                </div>
                </div>
            </div>
            <div class="modal-footer">
                <button
                class="btn btn-primary"
                data-bs-target="#exampleModalToggle"
                data-bs-toggle="modal"
                >
                Edit Data Again
                </button>
            </div>
            </div>
        </div>
        </div>
        <!-- End Of Modal -->
        <a class="btn btn-primary" data-bs-toggle="modal" href="#exampleModalToggle" role="button">Open first modal</a>
</main>
</template>

<script>
export default {
    data() {
        return {
            post: {
                title: '',
                category: '',
                description: '',
                shareimmediately: false,
                shareon: [],
                edition: '',
                nameState:null,
                
            },
            postdata: {
                categories:["IOT", "OpenSource", "PD", "MobileCross"],
                shareon:["Facebook", "Twitter", "LinkedIn"],
                editions:["First", "Second", "Third"]
            }
        }
    },
    methods: {
      checkFormValidity() {
        const valid = this.$refs.form.checkValidity()
        this.nameState = valid
        return valid
      },
      resetModal() {
        this.title = ''
                this.category= '',
                this.description= '',
                this.shareimmediately= false,
                this.shareon= [],
                this.edition= '',
        this.nameState = null
      },
      handleOk(bvModalEvent) {
        // Prevent modal from closing
        bvModalEvent.preventDefault()
        // Trigger submit handler
        this.handleSubmit()
      },
      handleSubmit() {
        // Exit when the form isn't valid
        if (!this.checkFormValidity()) {
          return
        }
        // Push the name to submitted names
        this.submittedNames.push(this.name)
        // Hide the modal manually
        this.$nextTick(() => {
          this.$bvModal.hide('modal-prevent-closing')
        })
      }
    }
}
</script>
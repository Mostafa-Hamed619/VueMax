<template>
    <form @submit.prevent="SubmitForm">
        <base-dialog :show="!!error" title="An error occurred!" @close="handleError" >
            {{ error }}
        </base-dialog>
        <base-dialog :show="isLoading" fixed>
            <p>...Authenticating</p>
            <base-spinner></base-spinner>
        </base-dialog>
        <base-card>
         <div class="form-control">
            <label for="email"> Email</label>
            <input type="email" v-model.trim="email" id="email" />
        </div>    

        <div class="form-control">
            <label for="password">Password</label>
            <input type="password" v-model="password" id="password" />
        </div>
        <p v-if="!this.formIsValid"> Please enter a valid email and password</p>
        <base-button>{{ this.submitButtonCaption }}</base-button>
        <base-button mode="flat" type="submit" @click="switchAuthMode">{{ this.switchModelButtonCaption }}</base-button>
        </base-card>
       
    </form>    
</template>

<script>
import BaseDialog from '../../components/ui/BaseDialog.vue';
export default{
  components: { BaseDialog },
    data(){
        return{
            email: '',
            password: '',
            formIsValid: true,
            mode: 'login',
            isLoading: false,
            error: null
        }
    },
    computed:{
        submitButtonCaption(){
            if(this.mode === 'login'){
                return 'Login';
            }
            else{
                return 'Sign Up';
            }
        },
        switchModelButtonCaption(){
            if(this.mode === 'login'){
                return 'Create new account';
            }
            else{
                return 'Login with existing account';
            }
        }
    },
    methods:{
        switchAuthMode(){
            if(this.mode === 'login'){
                this.mode = 'signup';
            }
            else{
                this.mode = 'login';
            }
        },
        async SubmitForm(){
            this.formIsValid = true;
            if(this.email === '' || !this.email.includes('@') || this.password === '' || this.password.length < 6){
                this.formIsValid = false;
                return;
            }
            this.isLoading = true;

            try{
                    if(this.mode === 'login'){
                        await this.$store.dispatch('auth/login',{
                        email:this.email,
                        password: this.password});
            }
            else{
               await this.$store.dispatch('auth/signup',{
                    email: this.email,
                    password: this.password
                })
            }
            this.$router.replace('/coaches');
            }
                catch(error){
                    this.error = error.message || 'Failed to authenticate. Please try again later.';
                }
                finally{
            this.isLoading = false;
                }
            
        },
        handleError(){
            this.error = null;
        }
    }
}

</script>

<style scoped>
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}


</style>
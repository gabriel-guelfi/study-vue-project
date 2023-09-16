<template>
  <div class="modal-content">
    <h2>Signup Form</h2>

    <form @submit.prevent="submitForm">
      <div class="form-group">
        <AccountIcon />
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="formData.name" required>
      </div>

      <div class="form-group">
        <EmailIcon />
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="formData.email" required>
      </div>

      <div class="form-group">
        <LockIcon />
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="formData.password" required>
      </div>

      <button type="submit">
        <AccountPlusIcon />Sign Up
      </button>
      <RouterLink to="/login">&lt; Go back to Login</RouterLink>
    </form>
  </div>
</template>

<script>
import HttpService from 'axios'
import AccountIcon from 'vue-material-design-icons/Account'
import EmailIcon from 'vue-material-design-icons/Email'
import LockIcon from 'vue-material-design-icons/Lock'
import AccountPlusIcon from 'vue-material-design-icons/AccountPlus'
export default {
  name: "sign-component",
  components: {
    AccountIcon,
    EmailIcon,
    LockIcon,
    AccountPlusIcon,
  },
  data() {
    return {
      formData: {
        name: '',
        email: '',
        password: ''
      }
    };
  },
  methods: {
    submitForm() {
      var $signup = this;

      HttpService.post("http://localhost:3000/user", this.formData)
        .then(function (response) {
          if (response.status == 201) alert("Seus dados foram salvos com sucesso");
          $signup.$router.push({
            name: "login"
          })
        });
    }
  },
  mounted() {
    let firstUser = JSON.parse(localStorage.getItem("user-data"))
    if (firstUser) this.$router.push({
      name: "home"
    })
  }
}
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
  background-color: #FFFFFF;
  padding: 20px;
  border-radius: 4px;
  max-width: 600px;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 20px auto;
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}

h2 {
  margin-bottom: 20px;
  text-align: center;
}

form {
  display: flex;
  flex-direction: column;
}

.form-group {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.form-group label {
  margin-left: 10px;
  flex-shrink: 0;
  width: 100px;
}

input[type="text"],
input[type="email"],
input[type="password"] {
  flex-grow: 1;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 16px;
  margin-top: 5px;
  outline-color: #0000FF;
}

button[type="submit"] {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  background-color: #0000FF;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;
}

button[type="submit"]:hover {
  background-color: #007BFF;
}

.material-icons {
  margin-right: 5px;
}

.signup-button {
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.signup-button:hover {
  background-color: #0056b3;
}
</style>

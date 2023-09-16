<template>
  <div class="modal-content">
    <h2>Login Form</h2>

    <form @submit.prevent="login">
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
        <LoginIcon />Login
      </button>
      <RouterLink to="/signup">Create an account</RouterLink>
    </form>
  </div>
</template>
  
<script>
import HttpService from 'axios'
import EmailIcon from 'vue-material-design-icons/Email'
import LockIcon from 'vue-material-design-icons/Lock'
import LoginIcon from 'vue-material-design-icons/Login'
export default {
  name: "sign-component",
  components: {
    EmailIcon,
    LockIcon,
    LoginIcon,
  },
  data() {
    return {
      formData: {
        email: '',
        password: ''
      }
    };
  },
  methods: {
    login() {
      var $login = this;

      var url = "http://localhost:3000/user?email=" + this.formData.email + "&password=" + this.formData.password;

      HttpService.get(url)
        .then(function (response) {
          if (response.status != 404 && response.data.length > 0) {
            let user = response.data[0];
            localStorage.setItem("user-data", JSON.stringify(user));
            $login.$router.push({
              name: "home"
            });

          }
          else alert("Não foi possível logar com as credenciais fornecidas.");
        });
    }
  },
  mounted() {
    let loggedUser = JSON.parse(localStorage.getItem("user-data"))
    if (loggedUser) this.$router.push({
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
  
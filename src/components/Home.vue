<template>
  <h1>Welcome, {{ loggedUser.name }}</h1>
</template>

<script>
export default {
  name: "home-component",
  data() {
    return {
      loggedUser: {
        name: null,
        email: null,
        password: null
      }
    }
  },
  mounted() {
    let loggedUser = JSON.parse(localStorage.getItem("user-data"));
    if (!loggedUser) this.$router.push({
      name: "login"
    })

    else this.loggedUser = loggedUser;
  }
}
</script>
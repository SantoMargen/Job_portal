<template>
  <div
    id="login"
    class="container d-flex justify-content-center align-items-center"
    style="height: 90vh"
  >
    <div
      class="card w-50"
      style="background-color: #293b5f; border-radius: 10px"
    >
      <div class="row justify-content-center align-items-center mx-5 my-5">
        <form @submit.prevent="handlerLogin">
          <h2 class="mb-4 text-light">Login</h2>
          <div class="input-group mb-3">
            <input
              type="email"
              class="form-control my-2"
              placeholder="Email"
              v-model="email"
            />
          </div>
          <div class="input-group mb-3">
            <input
              type="password"
              class="form-control my-2"
              placeholder="Password"
              v-model="password"
            />
          </div>
          <div class="d-grid gap-2">
            <button
              class="btn text-light my-4"
              type="submit"
              style="background-color: #222831"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Login',
  components: {},
  data () {
    return {
      email: '',
      password: '',
      params: {
        client_id:
          '117663313183-scd00bumo3kdbqdm0dk5lv1ioilnekjc.apps.googleusercontent.com'
      },
      renderParams: {
        width: 90,
        height: 35,
        longtitle: false
      }
    }
  },
  computed: {
    isLogged () {
      return this.$store.state.isLogged
    }
  },
  methods: {
    async handlerLogin () {
      const payload = {
        email: this.email,
        password: this.password
      }
      await this.$store.dispatch('handlerLogin', payload)
      if (this.isLogged) {
        this.$router.push('/')
      }
    },
    async onSuccess (googleUser) {
      await this.$store.dispatch('googleLogin', googleUser)
      if (this.isLogged) {
        this.$router.push('/')
      }
    }
  }
}
</script>
<style></style>

<template>
  <div class="signup container">
    <form class="card-panel" @submit.prevent="signup">
      <h2 class="deep-purple-text center">Signup</h2>
      <div class="field">
        <label for="email">E-mail:</label>
        <input type="email" name="email" v-model="email" />
      </div>
      <div class="field">
        <label for="password">Password:</label>
        <input type="password" name="password" v-model="password" />
      </div>
      <div class="field">
        <label for="nickname">Nickname:</label>
        <input type="text" name="nickname" v-model="nickname" />
      </div>
      <div class="field center">
        <button class="btn-large deep-purple">Signup</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Signup",
  data() {
    return {
      email: null,
      password: null,
      nickname: null
    };
  }
};
</script>

<style>
.signup {
  margin-top: 60px;
  max-width: 500px;
}

.signup h2 {
  font-size: 2.4em;
}

.signup .field {
  margin-bottom: 16px;
}
</style>
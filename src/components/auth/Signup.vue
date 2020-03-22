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
      <p v-if="feedback" class="red-text">{{ feedback }}</p>
      <div class="field center">
        <button class="btn-large deep-purple">Signup</button>
      </div>
    </form>
  </div>
</template>

<script>
import slugify from "slugify";
import db from "@/firebase/init";
import firebase from "firebase";
import functions from "firebase/functions";

export default {
  name: "Signup",
  data() {
    return {
      email: null,
      password: null,
      nickname: null,
      feedback: null,
      slug: null
    };
  },
  methods: {
    signup() {
      if (this.nickname && this.email && this.password) {
        this.slug = slugify(this.nickname, {
          replacement: "-",
          remove: /[$*_+~.()'"!\-:@]/g,
          lower: true
        });
        let checkNickname = firebase.functions().httpsCallable("checkNickname");
        checkNickname({
          slug: this.slug
        }).then(result => {
          if (!result.data.unique) {
            this.feedback = "This nickname is alreade taken!";
          } else {
            firebase
              .auth()
              .createUserWithEmailAndPassword(this.email, this.password)
              .then(cred => {
                console.log(cred.uid);
                db.collection("users")
                  .doc(this.slug)
                  .set({
                    nickname: this.nickname,
                    geolocation: null,
                    user_id: cred.user.uid
                  });
              })
              .then(() => {
                this.$router.push({ name: "GMap" });
              })
              .catch(err => {
                console.log(err);
                this.feedback = err.message;
              });
            this.feedback = "This nickname is available to use";
          }
        });

        console.log(this.slug);
        this.feedback = null;
      } else {
        this.feedback = "You must enter all fields.";
      }
    }
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
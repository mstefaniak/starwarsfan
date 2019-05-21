<template>
  <div class="review-form-wrapper">
    <h2>{{ movie.title }}</h2>
    <div
      v-if="submitted"
      class="review-msg review-msg__success">
      <p>For your review thank you. Yeesssssss.</p>
    </div>
    <form
      v-else
      class="review-form"
      @submit="onSubmit">
      <h3>Your review add</h3>

      <div class="review-form-row">
        <input
          class="review-form-field review-form-field__input"
          type="text"
          v-model="name"
          placeholder="Your name (optional)" />
      </div>
      <div class="review-form-row">
        <textarea
           class="review-form-field review-form-field__textarea"
           v-model="review"
           placeholder="Your review">
        </textarea>
      </div>
      <div class="review-form-row review-form-row__stars">
        <vue-stars
          name="demo"
          active-color="#ffdd00"
          inactive-color="#999999"
          shadow-color="#ffff00"
          hover-color="#dddd00"
          :max="5"
          :value="3"
          :readonly="false"
          char="★"
          v-model="stars"
        />
      </div>
      <div class="review-form-row">
        <input class="btn btn-submit" type="submit" value="Submit" />
      </div>
    </form>
    <button
      class="btn btn-back__secondary review-back"
      @click="goBack">Back go</button>
  </div>
</template>

<script>
import { VueStars } from 'vue-stars';
import { getters, mutations } from '@/store';

export default {
  name: 'reviewForm',
  data() {
    return {
      movie: {},
      name: '',
      review: '',
      stars: 3,
      submitted: false,
    };
  },
  components: { 'vue-stars': VueStars },
  methods: {
    goBack() {
      return window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/');
    },
    onSubmit(e) {
      e.preventDefault();
      mutations.addReview(this.$route.params.id, {
        name: this.name,
        review: this.review,
        stars: this.stars,
      });
      this.submitted = true;
    },
  },
  created() {
    this.movie = getters.getMovieById(this.$route.params.id);
  },
};
</script>

<style>
  label {
    display: block;
    margin: 1em 0 0.5em;
    font-size: 0.9em;
    font-weight: bold;
  }

  .review-form {
    width: 80vw;
    max-width: 500px;
    margin: 1em auto;
  }

  .review-form-row {
    margin: 1em 0;
  }

  .review-form-field {
    width: 100%;
  }

  .review-form-row__stars {
    font-size: 1.75em;
  }

  .review-form-row__stars label {
    margin-top: 0;
  }

  .review-form-field__input {
    height: 40px;
    line-height: 40px;
    padding: 0 1em;
  }

  .review-form-field__textarea {
    padding: 1em;
  }

  .review-msg {
    color: #458B00;
  }
</style>

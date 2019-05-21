<template>
  <div class="review">
    <strong>{{review.name}}</strong> gave <strong>{{review.stars}}/5</strong> note and said: <i>{{review.review}}</i>
  </div>
</template>

<script>
export default {
  name: 'review',
  props: {
    review: {
      type: Object,
    },
  },
};
</script>

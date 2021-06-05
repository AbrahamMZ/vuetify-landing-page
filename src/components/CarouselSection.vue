<template>
  <section>
    <v-card elevation="24" max-width="900" class="mx-auto my-12">
      <v-carousel
        continuous
        cycle
        hide-delimiter-background
        vertical-delimiters
        :vertical="$vuetify.breakpoint.mobile"
        delimiter-icon="mdi-heart"
        :height="$vuetify.breakpoint.mobile ? '220px' : '500px'"
      >
        <v-carousel-item v-for="(item, i) in 9" :key="i">
          <v-img
            :src="require(`@/assets/img/carousel-${i + 1}.jpeg`)"
            aspect-ratio="1.7"
          ></v-img>
        </v-carousel-item>
      </v-carousel>
    </v-card>
  </section>
</template>
<script>
export default {
  data() {
    return {
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4",
      ],
      slides: ["First", "Second", "Third", "Fourth", "Fifth"],
    };
  },
  computed: {
    maxHeigth() {
      const height = this.$vuetify.breakpoint.mobile ? "50vh" : "83vh";
      return `calc(${height} - ${this.$vuetify.application.top}px)`;
    },
  },
};
</script>

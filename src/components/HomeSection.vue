<template>
  <section id="hero">
    <v-parallax
      dark
      height="750"
      gradient="to right, rgba(10, 10, 10, .3), rgba(0, 0, 0, 0)"
      src="@/assets/img/carousel-2.jpeg"
    >
      <!-- <v-img
      src="@/assets/img/bgHero2.jpg"
      height="750"
      aspect-ratio="0.5"
      class="pa-0 ma-0"
    > -->
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="center">
            <v-col cols="12" md="6" xl="8">
              <!-- <h1 class="display-2 font-weight-bold mb-4 text-title"> -->
              <h1 style="font-size: xxx-large;">
                Nuestra Boda <br />
                Kary & Chris <br />
                <span style="color: palevioletred; font-size: 2rem;">
                  Septiembre 11, 2021
                </span>
              </h1>
              <!-- <h1 class="font-weight-light"></h1> -->

              <div class="video d-flex align-center py-4">
                <a @click.stop="dialog = true" class="playBut">
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/"
                    x="0px"
                    y="0px"
                    width="60px"
                    height="60px"
                    viewBox="0 0 213.7 213.7"
                    enable-background="new 0 0 213.7 213.7"
                    xml:space="preserve"
                  >
                    <polygon
                      class="triangle"
                      id="XMLID_18_"
                      fill="none"
                      stroke-width="7"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      points="73.5,62.5 148.5,105.8 73.5,149.1 "
                    />

                    <circle
                      class="circle"
                      id="XMLID_17_"
                      fill="none"
                      stroke-width="7"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      cx="106.8"
                      cy="106.8"
                      r="103.3"
                    />
                  </svg>
                </a>
                <p class="subheading ml-2 mb-0">
                  Dale Play
                  <v-icon color="white">mdi-heart-circle-outline</v-icon>
                </p>
              </div>
              <v-btn
                rounded
                outlined
                large
                dark
                @click="$vuetify.goTo('#ubicacion')"
                class="mt-5"
              >
                Ubicacion
                <v-icon class="ml-2">mdi-arrow-down</v-icon>
              </v-btn>
            </v-col>
            <v-col cols="12" md="6" xl="4" class="hidden-sm-and-down"> </v-col>
          </v-row>
        </v-col>
      </v-row>
      <div class="svg-border-waves text-white">
        <v-img src="@/assets/img/borderWaves.svg" />
      </div>
      <!-- </v-img> -->
    </v-parallax>
    <v-container fluid id="features" class="mt-2">
      <v-row align="center" justify="center">
        <v-col
          cols="12"
          sm="6"
          class="text-center"
          v-for="(feature, i) in features"
          :key="i"
        >
          <v-hover v-slot:default="{ hover }">
            <v-card
              class="card"
              shaped
              :elevation="hover ? 10 : 4"
              :class="{ up: hover }"
            >
              <v-img
                :src="feature.img"
                max-width="100px"
                class="d-block ml-auto mr-auto"
                :class="{ 'zoom-efect': hover }"
              ></v-img>
              <h1 class="font-weight-bold" v-text="feature.title"></h1>
              <h4 class="text-invitacion" v-text="feature.text"></h4>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
    <v-dialog v-model="dialog" max-width="640px">
      <v-card>
        <youtube
          :video-id="videoId"
          @ready="ready"
          @playing="playing"
        ></youtube>
      </v-card>
    </v-dialog>
    <div class="svg-border-waves">
      <img src="~@/assets/img/wave2.svg" />
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      videoId: "PGeCnGtMRVg",
      features: [
        {
          img: require("@/assets/img/wedding-arch.png"),
          title: "Inivitacion",
          text: `Cuando se encuentran dos almas, que con tanto tiempo se han buscado y 
            se vuelven semejantes, surge una union eterna,
            que comienza en la tierra y perdura en el cielo.
            Nos complace invitarles a nuestra Boda Sabado 11 de Septiembre del 2021 a las 2:00 PM`,
        },
      ],
    };
  },
  watch: {
    dialog(value) {
      if (!value) {
        this.pause();
      }
    },
  },
  computed: {
    maxHeigth() {
      const height = this.$vuetify.breakpoint.mobile ? "50vh" : "100vh";
      return `calc(${height})`;
    },
  },
  methods: {
    ready(event) {
      this.player = event.target;
    },
    playing(event) {
      // The player is playing a video.
    },
    change() {
      // when you change the value, the player will also change.
      // If you would like to change `playerVars`, please change it before you change `videoId`.
      // If `playerVars.autoplay` is 1, `loadVideoById` will be called.
      // If `playerVars.autoplay` is 0, `cueVideoById` will be called.
      this.videoId = "another video id";
    },
    stop() {
      this.player.stopVideo();
    },
    pause() {
      this.player.pauseVideo();
    },
  },
};
</script>

<style lang="scss">
.circle {
  stroke: white;
  stroke-dasharray: 650;
  stroke-dashoffset: 650;
  -webkit-transition: all 0.5s ease-in-out;
  opacity: 0.3;
}

.playBut {
  /*  border: 1px solid red;*/
  display: inline-block;
  -webkit-transition: all 0.5s ease;

  .triangle {
    -webkit-transition: all 0.7s ease-in-out;
    stroke-dasharray: 240;
    stroke-dashoffset: 480;
    stroke: white;
    transform: translateY(0);
  }

  &:hover {
    .triangle {
      stroke-dashoffset: 0;
      opacity: 1;
      stroke: white;
      animation: nudge 0.7s ease-in-out;

      @keyframes nudge {
        0% {
          transform: translateX(0);
        }
        30% {
          transform: translateX(-5px);
        }
        50% {
          transform: translateX(5px);
        }
        70% {
          transform: translateX(-2px);
        }
        100% {
          transform: translateX(0);
        }
      }
    }

    .circle {
      stroke-dashoffset: 0;
      opacity: 1;
    }
  }
}
</style>

<style>
.btn-play {
  transition: 0.2s;
}

.svg-border-waves .v-image {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3rem;
  width: 100%;
  overflow: hidden;
}

#hero {
  z-index: 0;
}
.svg-border-waves img {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  margin-bottom: -2px;
  z-index: -1;
}

.card {
  min-height: 300px;
  padding: 10px;
  transition: 0.5s ease-out;
}

.card .v-image {
  margin-bottom: 15px;
  transition: 0.75s;
}

.card h1 {
  margin-bottom: 10px;
}

h1 {
  font-family: "Bad Script", cursive;
}
.text-invitacion {
  font-family: "Bad Script", cursive;
  font-size: large;
}

.zoom-efect {
  transform: scale(1.1);
}

.up {
  transform: translateY(-20px);
  transition: 0.5s ease-out;
}

.text-title {
  font-family: "Bad Script", cursive;
}
</style>

<style>
section {
  position: relative;
}
</style>

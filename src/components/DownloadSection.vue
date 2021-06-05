<template>
  <section id="download">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="center">
            <v-col sm="4" class="hidden-xs-only">
              <v-img
                src="@/assets/img/wedding.svg"
                class="d-block ml-auto mr-auto"
                max-width="350px"
              />
            </v-col>
            <v-col cols="12" sm="8" class="white--text text-left">
              <!-- <h1 class="font-weight-light display-2 mb-2" style="text"> -->
              <h1 class="title-mesa mb-2" style="text">
                Visita nuesta Mesa de Regalos
              </h1>
              <h1 class="font-weight-light">
                El mejor regalos que nos puedes dar es tu presencia, pero si
                queires obserquiarnos al mas puedes hacer de la siguiente forma
              </h1>
              <v-btn
                rounded
                href="https://mesaderegalos.liverpool.com.mx/milistaderegalos/50444223"
                target="_blank"
                large
                color="pink"
                class="mt-4"
                dark
              >
                <v-icon class="mr-2">
                  mdi-gift
                </v-icon>
                Mesa Regalos liverpool
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
#download {
  background-image: url("~@/assets/img/anillos.jpg");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 500px;
}

#download .container,
#download .row {
  height: 100%;
}
.title-mesa {
  font-family: "Bad Script", cursive;
  font-size: 4rem;
  color: rgb(238, 3, 168);
  text-align: start;
  margin-top: 2rem;
  margin-bottom: 2rem;
}
</style>

<template>
  <section id="invitacion">
    <v-row justify="center" class="text-center mt-12 mb-6">
      <v-hover v-slot:default="{ hover }" close-delay="200">
        <v-card
          :elevation="hover ? 16 : 2"
          :href="require(`@/assets/pdf/invitaciones_kyc.pdf`)"
          target="_blank"
        >
          <v-img
            :src="require(`@/assets/img/invitacion.jpeg`)"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,0), rgba(0,0,0,.3)"
          >
            <v-expand-transition>
              <div
                v-if="hover"
                class="d-flex transition-fast-in-fast-out white darken-2 v-card--reveal display-3 white--text"
                style="height: 100%;"
              >
                <v-icon size="64">
                  mdi-launch
                </v-icon>
              </div>
            </v-expand-transition>
          </v-img>
        </v-card>
      </v-hover>
    </v-row>
    <v-row justify="center" class="text-center mb-12">
      <v-btn
        rounded
        color="pink"
        dark
        class="mt-4"
        :href="require(`@/assets/pdf/invitaciones_kyc.pdf`)"
        target="_blank"
      >
        Descargar
      </v-btn>
    </v-row>
  </section>
</template>
<script>
export default {};
</script>
<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
</style>

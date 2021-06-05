<template>
  <section id="ubicacion" class="pb-8">
    <h1
      class="title-ubicacion-mobile"
      :class="!$vuetify.breakpoint.mobile ? 'title-md' : ''"
    >
      Ubicacion de la ceremonia y evento: <br />
      La ceremonia se llevara a acabo en el salon "El escondite" a las 14:00
      hrs.
    </h1>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1571.1236131648338!2d-100.78699581090149!3d20.51512994958942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842cb08851111ced%3A0x9e9baecec425d483!2sEl%20Escondite!5e0!3m2!1ses-419!2smx!4v1619500365766!5m2!1ses-419!2smx"
      height="500"
      width="100%"
      style="border: 0;"
      allowfullscreen=""
      loading="lazy"
    ></iframe>
  </section>
</template>
<script>
export default {};
</script>
<style>
.title-ubicacion-mobile {
  font-family: "Bad Script", cursive;
  font-size: 1rem;
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.title-md {
  font-size: 2rem;
}
</style>

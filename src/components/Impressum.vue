<script setup>
  // Path: src/components/Menu.vue
  import Menu from './Menu.vue'
</script>
<template>
  <div class="flex flex-col pb-10">
    <Menu />
    <div class="px-8 sm:px-20">
      <h1 class="mt-20 mb-10 text-2xl text-amber-500 sm:mt-44 sm:text-6xl">Impressum</h1>
      <h2 class="text-lg text-amber-500">Diensteanbieter</h2>
      <p>Michael Großklos</p>
      <p>Köllerbachweg 6</p>
      <p>66763</p>
      <p>Germany</p>
      <h2 class="mt-5 text-2xl text-amber-500">Kontaktmöglichkeiten</h2>
      <p class="mt-2">E-Mail-Adresse:</p>
      <p><a href="mailto:mail@grossklos.com">mail@grossklos.com</a></p>
      <p class="mt-5">Telefon:</p>
      <p>+49 (0) 6831/516 87 08</p>

      <h2 class="mt-8 text-2xl text-amber-500">Online-Streitbeilegung (OS)</h2>
      <p
        >Online-Streitbeilegung: Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS)
        bereit, die Sie unter
        <a
          href="https://ec.europa.eu/consumers/odr/"
          target="_blank"
          >https://ec.europa.eu/consumers/odr/</a
        >
        finden. Verbraucher haben die Möglichkeit, diese Plattform für die Beilegung ihrer Streitigkeiten zu nutzen.
      </p>
    </div>
  </div>
</template>
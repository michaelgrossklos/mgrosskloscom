<template>
  <!-- KONTAKT -->
  <section
    id="kontakt"
    class="bg-black px-10 lg:py-20 lg:px-40"
  >
    <div class="relative bg-transparent">
      <div class="relative w-full lg:grid lg:grid-cols-5">
        <div class="bg-transparent py-16 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
          <div class="">
            <h2 class="mb-5 text-5xl text-amber-600 lg:text-6xl">Kontakt</h2>
            <h2 class="text-2xl font-bold tracking-tight text-gray-300 lg:text-3xl">Kontaktieren Sie mich</h2>
            <p class="mt-3 text-lg leading-6 text-gray-300">Melden Sie sich gerne jederzeit unter:</p>
            <dl class="mt-8 text-base text-gray-300">
              <div> </div>
              <div class="mt-6 flex flex-col gap-5">
                <dt class="sr-only">Telefon</dt>
                <dd class="flex">
                  <PhoneIcon
                    aria-hidden="true"
                    class="h-6 w-6 flex-shrink-0 text-gray-300"
                  />
                  <span class="ml-3">+49 (0) 6831/516 87 08</span>
                </dd>
                <dd class="flex">
                  <EnvelopeIcon
                    aria-hidden="true"
                    class="h-6 w-6 flex-shrink-0 text-gray-300"
                  />
                  <span class="ml-3"
                    ><a
                      class="text-gray-300 underline"
                      href="mailto:mail@grossklos.com"
                      >mail@grossklos .com</a
                    ></span
                  >
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div class="bg-transparent py-16 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
          <div class="mx-auto">
            <div class="">
              <h2
                id="impressum"
                class="mb-5 text-5xl text-amber-600 lg:text-6xl"
                >Impressum</h2
              >
              <p class="text-gray-300">Michael Großklos</p>
              <p class="text-gray-300">c/o Postflex #3092</p>
              <p class="text-gray-300">48268 Greven</p>
              <p class="text-gray-300">Germany</p>
              <h2 class="mt-5 text-2xl text-gray-300">Kontaktmöglichkeiten</h2>
              <p class="mt-2 text-gray-300">E-Mail-Adresse:</p>
              <p
                ><a
                  class="text-gray-300 underline"
                  href="mailto:mail@grossklos.com"
                  >mail@grossklos.com</a
                ></p
              >
              <p class="mt-5 text-gray-300">Telefon:</p>
              <p class="text-gray-300">+49 (0) 6831/516 87 08</p>

              <h2 class="mt-8 text-2xl text-gray-300">Online-Streitbeilegung (OS)</h2>
              <p class="text-gray-300"
                >Online-Streitbeilegung: Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung
                (OS) bereit, die Sie unter
                <a
                  class="text-gray-300 underline"
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  >https://ec.europa.eu/consumers/odr/</a
                >
                finden. Verbraucher haben die Möglichkeit, diese Plattform für die Beilegung ihrer Streitigkeiten zu
                nutzen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

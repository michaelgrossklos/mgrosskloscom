<script setup>
import {EnvelopeIcon, PhoneIcon} from '@heroicons/vue/20/solid'
import Menu from './Menu.vue'
import Footer from './Footer.vue'

</script>

<template>
  <Menu/>
  <section
      class="h-full border-y border-y-amber-500 lg:pt-0 md:pt-0 pt-5 lg:pb-0 bg-hero-home bg-cover lg:bg-left bg-center
      lg:bg-contain md:bg-gray-900 bg-gray-900 lg:bg-amber-500 bg-no-repeat bg-blend-overlay">
    <div
        class="relative lg:bg-gradient-to-l py-20 md:bg-gradient-to-t bg-gradient-to-t from-black md:via-transparent lg:via-amber-900 to-transparent">

      <div
          class="flex flex-row items-center md:justify-center md:items-center md:px-0 md:pb-10 lg:pb-0 pb-0 justify-between">
        <div class="lg:w-1/2 lg:block sm:hidden md:hidden hidden"></div>
        <div
            class="flex lg:w-1/2 w-full h-full md:items-center lg:items-start md:py-0 lg:mt-0 md:mt-0 py-10 md:px-10 lg:mt-20 flex-col lg:justify-center md:gap-20 gap-8 lg:gap-10 lg:py-20 lg:pr-44 leading-loose text-gray-300"
        >

          <div
              class="lg:right-0 flex flex-col lg:flex-row md:py-20 md:flex-col lg:mt-0 md:mt-10 gap-5 flex-nowrap items-center lg:items-center lg:py-10">

            <img
                class="invert-63 w-20 lg:w-28"
                src="/src/assets/webentwicklung_michael_grossklos.svg"
                alt="">

            <div class="lg:flex lg:flex-col">
              <h1 class="lg:text-6xl text-4xl md:text-6xl lg:text-left text-center font-extrabold text-amber-500">
                Webentwicklung</h1>
              <h2 class="lg:text-5xl text-center lg:text-left text-2xl">Michael Gro&szlig;klos</h2>
            </div>
          </div>
          <div class="w-full md:px-0 px-10 flex flex-col lg:gap-5 md:gap-5 lg:items-start md:items-center">
            <h3 class="lg:pt-20 text-lg lg:text-4xl md:text-3xl"><span class="text-amber-500">Webseiten?</span>
              Kann
              ich!</h3>
            <h3 class="text-lg lg:text-4xl md:text-3xl"><span class="text-amber-500">Programmierung?</span> Kann ich
              auch!</h3>
            <h3 class="text-lg lg:text-4xl md:text-3xl"><span class="text-amber-500">Screencasts?</span> Natürlich
              !</h3>
          </div>
          <div
              class="lg:mt-20 text-5xl text-white px-5 lg:px-0 lg:flex-none flex flex-col md:items-center md:justify-center items-center lg:justify-start lg:items-start justify-center">
            <p class="text-center text-amber-500 text-4xl lg:mt-20 lg:text-6xl">Was können Sie?</p>
            <button
                class="mt-3 items-center lg:w-full md:w-full flex flex-col md:mx-0 rounded-md border border-transparent bg-amber-500 py-3 px-10 text-center text-black hover:bg-amber-600"
                type="button"
            >
              <a class="lg:text-4xl text-2xl text-black flex flex-col" href="#kontakt">
                <span class="text-sm">Hier klicken um</span>
                mich zu kontaktieren
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>


  <!-- PORTFOLIO -->
  <section id="portfolio" class="bg-black lg:pt-20 py-10">
    <h2
        class="text-extabold text-center px-10 md:px-10 lg:px-44 lg:pt-20 text-3xl lg:text-6xl text-amber-500">
      Portfolio
    </h2>
    <div
        class="mx-auto md:mt-10 mt-10 lg:mt-20 w-full lg:grid lg:columns-2 md:grid md:columns-1 md:px-0 lg:px-0 lg:gap-3 gap-10 pb-1.5">


      <!-- EMMENTALER -->
      <div
          class="hidden md:hidden lg:block break-inside-avoid bg-gray-400 relative group overflow-hidden ">
        <img
            alt=""
            class="top-0 left-0 md:h-[300px] lg:h-[600px] h-[300px] w-full object-cover object-left-top grayscale transition duration-300 ease-in-out group-hover:grayscale-0"
            src="/src/assets/portfolio/emmentaler-color.png"
        />

        <div
            class="lg:z-10 z-0 relative lg:absolute top-0 right-0 lg:duration-300 flex items-center justify-center p-5 lg:p-20 bg-amber-500 w-full lg:w-2/3 text-amber-50 opacity-0 group-hover:h-full lg:h-0 h-full group-hover:opacity-90"
        >
          <div class="opacity-0 group-hover:opacity-100 duration-300 delay-300">
            <h2 class="text-2xl font-extrabold">Emmentaler Webseite Relaunch</h2>
            <p><a href="https://emmentaler.ch" target="_blank">https://emmentaler.ch</a></p>
            <p class="text-md font-light mt-7">Technologien: <br>WORDPRESS | ELEMENTOR | JAVASCRIPT | CSS | PHP</p>
            <p class="mt-7 text-md font-bold">
              Aufgaben:

            </p>
            <ul class="text-sm">
              <li>Technische Umsetzung der Designvorlage</li>
              <li>Programmierung individueller Wordpress Plugins</li>
              <li>Programmierung individueller Elementor Widgets</li>
              <li>Programmierung eines Gewinnspiels</li>
              <li>Programmierung individueller Rezeptanpassungen</li>
              <li>Programmierung individueller Suchfunktionen</li>
              <li>Allgemeine technische Betreuung</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- MOBILE -->
      <div class="lg:hidden break-inside-avoid bg-gray-400 relative md:block overflow-hidden">
        <img
            alt=""
            class="top-0 left-0 h-[300px] md:h-[300px] w-full object-cover md:object-center-top object-left-top"
            src="/src/assets/portfolio/emmentaler-color.png"
        />

        <div
            class="relative top-0 right-0flex border-t-8 border-t-black items-center justify-center px-5 py-14 bg-amber-500 w-full text-amber-50"
        >

          <h2 class="text-2xl font-extrabold">Emmentaler Webseite Relaunch</h2>
          <p><a href="https://emmentaler.ch" target="_blank">https://emmentaler.ch</a></p>
          <p class="text-md font-light mt-7">Technologien: <br>WORDPRESS | ELEMENTOR | JAVASCRIPT | CSS | PHP</p>
          <p class="mt-7 text-md font-bold">
            Aufgaben:

          </p>
          <ul class="text-sm">
            <li>Technische Umsetzung der Designvorlage</li>
            <li>Programmierung individueller Wordpress Plugins</li>
            <li>Programmierung individueller Elementor Widgets</li>
            <li>Programmierung eines Gewinnspiels</li>
            <li>Programmierung individueller Rezeptanpassungen</li>
            <li>Programmierung individueller Suchfunktionen</li>
            <li>Allgemeine technische Betreuung</li>
          </ul>
        </div>
      </div>

      <!-- LOCALSEARCH -->
      <div
          class="hidden lg:block lg:pt-0 lg:top-0 bg-gray-400 lg:my-0 lg:py-0 relative group overflow-hidden">
        <img
            alt=""
            class="lg:h-[600px] lg:w-full lg:h-full lg:pt-0 lg:mt-0
            lg:top-0 lg:object-cover lg:object-center-top grayscale
            transition duration-300 ease-in-out group-hover:grayscale-0"
            src="/src/assets/portfolio/localsearch.png"
        />

        <div
            class="z-10 absolute top-0 right-0 duration-300  lg:mt-0 lg:top-0 flex items-center justify-center p-20 bg-amber-500 w-2/3 text-amber-50 opacity-0 group-hover:h-full h-0 group-hover:opacity-90"
        >
          <div class="opacity-0 group-hover:opacity-100 duration-300 delay-300">
            <h2 class="text-2xl font-extrabold">Localsearch Webseite Relaunch</h2>
            <p><a href="https://localsearch.ch" target="_blank">https://localsearch.ch</a></p>
            <p class="text-md font-light mt-7">Technologien: <br>WORDPRESS | ELEMENTOR | JAVASCRIPT | CSS | PHP</p>
            <p class="mt-7 text-md font-bold">
              Aufgaben:

            </p>
            <ul class="text-sm">
              <li>Technische Umsetzung der Designvorlage</li>
              <li>Programmierung individueller Wordpress Plugins</li>
              <li>Programmierung individueller Elementor Widgets</li>
              <li>Programmierung individueller Filterfunktionen</li>
              <li>Allgemeine technische Betreuung</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- MOBILE -->
      <div class="lg:hidden top-0 mt-0 break-inside-avoid bg-gray-400 relative overflow-hidden">
        <img
            alt=""
            class="top-0 left-0 h-[300px] w-full object-cover object-left-top"
            src="/src/assets/portfolio/localsearch.png"
        />

        <div
            class="relative top-0 right-0 flex border-t-8 border-t-black items-center justify-center px-5 py-14 bg-amber-500 w-full text-amber-50"
        >

          <h2 class="text-2xl font-extrabold">Localsearch Webseite Relaunch</h2>
          <p><a href="https://localsearch.ch" target="_blank">https://localsearch.ch</a></p>
          <p class="text-md font-light mt-7">Technologien: <br>WORDPRESS | ELEMENTOR | JAVASCRIPT | CSS | PHP</p>
          <p class="mt-7 text-md font-bold">
            Aufgaben:

          </p>
          <ul class="text-sm">
            <li>Technische Umsetzung der Designvorlage</li>
            <li>Programmierung individueller Wordpress Plugins</li>
            <li>Programmierung individueller Elementor Widgets</li>
            <li>Programmierung individueller Filterfunktionen</li>
            <li>Allgemeine technische Betreuung</li>
          </ul>
        </div>
      </div>


      <!-- CARITAS -->
      <div class="hidden lg:block break-inside-avoid bg-gray-400 relative group overflow-hidden">
        <img
            alt=""
            class="top-0 left-0 h-[500px] w-full object-cover object-left-top grayscale transition duration-300 ease-in-out group-hover:grayscale-0"
            src="/src/assets/portfolio/caritas-dortmund.png"
        />

        <div
            class="z-10 absolute top-0 right-0 duration-300 flex items-center justify-center p-20 bg-amber-500 w-2/3 text-amber-50 opacity-0 group-hover:h-full h-0 group-hover:opacity-90"
        >
          <div class="opacity-0 group-hover:opacity-100 duration-300 delay-300">
            <h2 class="text-2xl font-extrabold">Multible Arbeiten an der Webseite</h2>
            <p><a href="https://caritas-dortmund.de" target="_blank">https://caritas-dortmund.de</a></p>
            <p class="text-md font-light mt-7">Technologien: <br>WORDPRESS | ELEMENTOR | JAVASCRIPT | CSS</p>
            <p class="mt-7 text-md font-bold">
              Aufgaben:
            <ul class="text-sm">
              <li>Programmierung individueller Wordpress Plugins</li>
              <li>Programmierung individueller Elementor Widgets</li>
              <li>Programmierung individueller Filterfunktionen</li>
              <li>Integration von dynamischen Maps</li>
            </ul>
            </p>
          </div>
        </div>
      </div>

      <!-- MOBILE -->
      <div class="lg:hidden break-inside-avoid bg-gray-400 relative overflow-hidden">
        <img
            alt=""
            class="top-0 left-0 h-[300px] w-full object-cover object-left-top"
            src="/src/assets/portfolio/caritas-dortmund.png"
        />

        <div
            class="relative top-0 right-0flex border-t-8 border-t-black items-center justify-center px-5 py-14 bg-amber-500 w-full text-amber-50"
        >

          <h2 class="text-2xl font-extrabold">Multible Arbeiten an der Webseite</h2>
          <p><a href="https://caritas-dortmund.de" target="_blank">https://caritas-dortmund.de</a></p>
          <p class="text-md font-light mt-7">Technologien: <br>WORDPRESS | ELEMENTOR | JAVASCRIPT | CSS</p>
          <p class="mt-7 text-md font-bold">
            Aufgaben:
          <ul class="text-sm">
            <li>Programmierung individueller Wordpress Plugins</li>
            <li>Programmierung individueller Elementor Widgets</li>
            <li>Programmierung individueller Filterfunktionen</li>
            <li>Integration von dynamischen Maps</li>
          </ul>
          </p>
        </div>
      </div>

      <!-- DESIGNASPEKT -->
      <div class="hidden lg:block break-inside-avoid bg-gray-400 relative group overflow-hidden">
        <img
            alt=""
            class="top-0 left-0 h-[700px] w-full object-cover object-left-top grayscale transition duration-300 ease-in-out group-hover:grayscale-0"
            src="/src/assets/portfolio/designaspekt.png"
        />

        <div
            class="z-10 absolute top-0 right-0 duration-300 flex items-center justify-center p-20 bg-amber-500 w-2/3 text-amber-50 opacity-0 group-hover:h-full h-0 group-hover:opacity-90"
        >
          <div class="opacity-0 group-hover:opacity-100 duration-300 delay-300">
            <h2 class="text-2xl font-extrabold">Multible Arbeiten an der Webseite</h2>
            <p><a href="https://designaspekt.de" target="_blank">https://designaspekt.de</a></p>
            <p class="text-md font-light mt-7">Technologien: <br>WORDPRESS | ELEMENTOR</p>
            <p class="mt-7 text-md font-bold">
              Aufgaben:
            <ul class="text-sm">
              <li>Technische Umsetzung der Designvorlage</li>
              <li>Monatliche Wartung</li>
              <li>Programmierung individueller Wordpress Plugins</li>
            </ul>
            </p>
          </div>
        </div>
      </div>


      <!-- MOBILE -->
      <div class="lg:hidden break-inside-avoid bg-gray-400 relative mt-1 overflow-hidden">
        <img
            alt=""
            class="top-0 left-0 h-[300px] w-full object-cover object-left-top"
            src="/src/assets/portfolio/designaspekt.png"
        />

        <div
            class="relative top-0 right-0flex border-t-8 border-t-black items-center justify-center px-5 py-14 bg-amber-500 w-full text-amber-50"
        >

          <h2 class="text-2xl font-extrabold">Multible Arbeiten an der Webseite</h2>
          <p><a href="https://designaspekt.de" target="_blank">https://designaspekt.de</a></p>
          <p class="text-md font-light mt-7">Technologien: <br>WORDPRESS | ELEMENTOR</p>
          <p class="mt-7 text-md font-bold">
            Aufgaben:

          </p>
          <ul class="text-sm">
            <li>Technische Umsetzung der Designvorlage</li>
            <li>Monatliche Wartung</li>
            <li>Programmierung individueller Wordpress Plugins</li>
          </ul>
        </div>
      </div>

      <!-- LOEWEN TUGGENBERG -->
      <div class="hidden lg:col-span-2 lg:block break-inside-avoid bg-black lg:px-0 relative group overflow-hidden">
        <img
            alt=""
            class="top-0 left-0 h-[700px] w-full object-cover object-left-top grayscale transition duration-300 ease-in-out group-hover:grayscale-0"
            src="/src/assets/portfolio/loewen-tuggen.png"
        />

        <div
            class="z-10 absolute top-0 lg:right-0 duration-300 flex items-center lg:mr-0 justify-center p-20 bg-amber-500 w-1/2 text-amber-50 opacity-0 group-hover:h-full h-0 group-hover:opacity-90"
        >
          <div class="opacity-0 group-hover:opacity-100 duration-300 delay-300">
            <h2 class="text-2xl font-extrabold">Launch der Loewen Tuggen Webseite</h2>
            <p><a href="https://loewen-tuggen.ch" target="_blank">https://loewen-tuggen.ch</a></p>
            <p class="text-md font-light mt-7">Technologien: <br>WORDPRESS | ELEMENTOR | CSS | JAVASCRIPT</p>
            <p class="mt-7 text-md font-bold">
              Aufgaben:

            </p>
            <ul class="text-sm">
              <li>Technische Umsetzung der Designvorlage</li>
              <li>Programmierung individueller Wordpress Plugins</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- MOBILE -->
      <div class="lg:hidden break-inside-avoid bg-gray-400 relative mt-3 overflow-hidden">
        <img
            alt=""
            class="top-0 right-0 h-[300px] w-full object-cover object-center-top"
            src="/src/assets/portfolio/loewen-tuggen.png"
        />

        <div
            class="relative top-0 right-0flex border-t-8 border-t-black items-center justify-center px-5 py-14 bg-amber-500 w-full text-amber-50"
        >

          <h2 class="text-2xl font-extrabold">Launch der Loewen Tuggen Webseite</h2>
          <p><a href="https://loewen-tuggen.ch" target="_blank">https://loewen-tuggen.ch</a></p>
          <p class="text-md font-light mt-7">Technologien: <br>WORDPRESS | ELEMENTOR | CSS | JAVASCRIPT</p>
          <p class="mt-7 text-md font-bold">
            Aufgaben:

          </p>
          <ul class="text-sm">
            <li>Technische Umsetzung der Designvorlage</li>
            <li>Programmierung individueller Wordpress Plugins</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- WARUM ICH -->
  <section
      class="h-full border-y border-y-amber-500 bg-warumich-home bg-cover lg:bg-contain bg-gray-900 -mt-10 py-10 lg:py-0 lg:bg-amber-500 bg-blend-overlay bg-center lg:bg-right-bottom bg-no-repeat"
      id="warumich">
    <div class="relative lg:bg-gradient-to-r from-black via-amber-900 to-transparent">

      <div
          class="flex lg:w-2/3 flex-col lg:justify-center lg:gap-5 bg-transparent lg:py-20 p-10 lg:px-44 leading-normal gap-4 lg:leading-loose text-gray-300"
      >
        <h1 class="bold pb-10 text-3xl lg:text-6xl text-amber-500 drop-shadow-md">Warum ich?</h1>
        <p class="">Das ist natürlich eine berechtigte Frage. Warum sollten Sie gerade mich
          wählen um
          ihre
          Webseite oder Applikation zu
          erstellen?</p>

        <p class="">Unter anderem, weil ich bereits mit 12 Jahren (1988), mein erstes Computerprogramm
          programmiert
          habe.
          Damals auf einem ATARI 520ST. Der PC Virus hatte mich gepackt. Einige Zeit darauf nutze ich auch das Internet,
          das damals kaum bekannt war.
        </p>
        <p class=""> Meine erste erfolgreiche Webseite baute ich dann im Jahre 2004. MakeAShortlink.de war die
          Domain.
          Erfolgreich deshalb, da Sie Erwähnung in einer -zumindest zu dieser Zeit renommierten Fachzeitschrift
          namens c’t (<a href="https://www.heise.de/select/ct/archiv/2004/9">Ausgabe 90/2004, Seite 218</a>) fand.
        </p>
        <p class=""> Die damalige Webseite können Sie sich in der <a
            href="https://web.archive.org/web/20040623031411/http://www.makeashortlink.de/home.php">WayBackMachine, hier
          ansehen.</a></p>
        <p class="">
          Seither enwickle ich Webseiten und Webaplicationen. Damals mit PHP und auch ActionScript (Flash). Heute
          selbstvertändlich mit dem aktuellen Stand der Technik entsprechenden Technologien.
        </p>
        <p class="">
          Mein Schwerpunkt liegt dabei auf Wordpress und dessen Erweiterungsfähigeit und auf Elementor, welches auch
          Möglichkeiten der Erweiterung in Form vom Addons und individuellen Widgets bietet.
        </p>
        <p class="">
          Allerdings bin ich auch nicht auf Wordpress beschränkt, sondern entwickle auch in anderen Technologien wie
          z.B. Vue.js in Verbindung mit Vite. Diese Seite wurde z.B. mit Vue.js und Vite erstellt.
        </p>
      </div>
    </div>
  </section>

  <Footer/>
</template>
<script setup>
  import Menu from '../components/Menu.vue'
  import Footer from '../components/Footer.vue'

  const videos = [
    {
      title: 'OBER Business App',
      description:
        'Im Auftrag von Ortwin Kartmann (Erfinder und Gründer von Sofortüberweisun.de) habe ' +
        'ich in der Coronazeit einen Screencast für eine neue Erfindung Herrn Kartmanns produziert.',
      url: 'https://www.youtube-nocookie.com/embed/B2Bof7xCTWM',
    },
    {
      title: 'CSU Kreativ tutorials',
      description:
        'Im Auftrag der Partei CSU produzierte ich eine Tutorialreihe zur Erklärung eines Hilfsmittels zur Erstellung von Printmedien für deren Ortsvereine.',
      url: 'https://www.youtube-nocookie.com/embed/9OvtFTGcPJs',
    },
    {
      title: 'Rose Dental GmbH',
      description:
        'Rose Entwickelt eine Verwaltungssoftware, speziell für Zahnarztpraxen. Ich wurde mit einem Videokurs von über 25 Videos beauftragt, welche die Handhabung der Software detailliert erklären.',
      url: 'https://www.youtube-nocookie.com/embed/znLSU86JvKo',
    },
    {
      title: 'Leet Programming Warehouse Manager',
      description:
        'Als Cloudlösung entwickelt Leet Programming eine Warehouse Manager App. Auch hier musste den Kunden die Handhabung erklärt werden, was ich gerne übernommen habe.',
      url: 'https://www.youtube-nocookie.com/embed/-TzcqVm9Xoo',
    },
    {
      title: 'Jonas Ernährungsprogramm',
      description:
        'Im Kundenauftrag erstelle ich auch komplette Videokurse. In diesem Fall handelte es sich um ein Ernährungsberatungsprogramm. Die Präsentation wurde mir dabei bereitgestellt.',
      url: 'https://www.youtube-nocookie.com/embed/EuhO1RKUFNk',
    },
    {
      title: 'My Pergola',
      description:
        'Auch Videos in welchen ich kein so gennantes Voice Over einspreche werden von mir produziert. In diesem Fall handelt es sich um ein Produktvideo für einen Onlineshop von Pergolas.',
      url: 'https://www.youtube-nocookie.com/embed/66T_3hO_lmI',
    },
    {
      title: 'BBA-Nord Webexanmeldung (Mobile App)',
      description:
        'Im Rahmen der durch die Corona-Pandemie zunehmenden Digitalisierung, blieb es nich aus, dass man Nutzern erklären musste, wie sie Online-Meeting-apps nutzen.',
      url: 'https://www.youtube-nocookie.com/embed/4etTH-TSnx4',
    },
    {
      title: 'Fitmeals',
      description:
        'Der Onlineshop Fitmeals bietet eine Vielzahl an Fitnessprodukten an. Auch hier wurde ich mit der Erstellung eines Produktvideos beauftragt, um zu erklären wie man sich ein Partnerkonto anlegen kann.',
      url: 'https://www.youtube-nocookie.com/embed/Fe-C_PwBpEU',
    },
  ]
</script>
<template>
  <Menu />

  <div class="z-1 relative h-full w-full overflow-hidden">
    <section
      class="lg:bg-right-center boder-0 h-full border-y-amber-500 bg-gray-900 bg-hero-screencasts bg-cover bg-center bg-no-repeat pt-5 bg-blend-overlay md:h-full md:border-0 md:bg-contain md:bg-center md:pt-0 lg:h-full lg:border-y lg:bg-amber-500 lg:bg-cover lg:bg-contain lg:pt-0 lg:pt-20"
    >
      <div
        class="relative h-full gap-5 bg-gradient-to-t from-black to-transparent p-8 md:gap-5 md:py-20 lg:bg-gradient-to-r lg:via-amber-900 lg:px-44 lg:leading-loose"
      >
        <div
          class="flex flex-col items-center justify-between gap-5 md:w-full md:flex-col md:gap-5 md:px-10 lg:right-0 lg:w-2/3 lg:items-start lg:gap-5"
        >
          <h1
            class="mt-20 mb-10 text-center text-3xl font-bold text-amber-500 drop-shadow-md md:mb-5 md:mt-12 md:text-4xl lg:mb-0 lg:gap-5 lg:pb-10 lg:text-6xl"
            >Screencasts &amp; Tutorials</h1
          >
          <p class="break-normal drop-shadow-md">
            Screencasts sind sehr hilfreich, wenn Sie Ihren Kunden komplexe Sachverhalte erklären müssen. Sehr häufig
            werden solche Video-Tutorials erstellt, um Software oder Webseitenfunktionen zu erklären. Natürlich könnte
            man das gleich selbst übernehmen. Aus meiner Erfahrung weiss ich allerdings, dass man häufig nicht das
            nötige Wissen oder Equipment hat, um solche Erklär-Videos professionell zu erstellen.
          </p>
          <p class="pb-20 md:pb-0 lg:pb-0">
            Aus meiner Jarelangen Erfahrung weiss ich, dass Screencasts nicht nur einen neutralen Blick auf die Sache
            benötigen, sondern auch mit entsprechender Professionalität erstellt werden müssen. Ich habe schon hunderte
            Screencasts für die unterschiedlichsten Kunden erstellt. Darunter waren Videos für Onlineshops, Mobile Apps,
            Webseitenfunktionen, Online Apps, Software und vielem mehr. Sogar ganze Onlinekurse wurden bei mir in
            Auftrag gegeben.
          </p>
        </div>
      </div>
    </section>

    <!-- PORTFOLIO -->
    <section class="py-10 md:py-10 lg:p-44">
      <h2
        id="portfolio"
        class="mt-20 px-5 text-center text-3xl leading-normal text-amber-500 md:mt-20 md:text-center md:leading-normal lg:mt-20 lg:text-left lg:text-5xl lg:leading-relaxed"
      >
        Auszug aus meinen Screencasts <br />& Video-Tutorials
      </h2>
      <div class="mt-20 flex flex-col md:flex md:flex-col md:gap-0 lg:grid lg:grid-cols-2 lg:gap-5">
        <!-- VIDEOS -->
        <div
          v-for="video in videos"
          class="flex flex-col gap-5 rounded border-t-4 border-amber-500 bg-gradient-to-t from-amber-500 via-amber-900 to-black pt-10 first:border-0 md:flex md:flex-col md:border-t-4 md:border-amber-500 lg:border-0 lg:p-10"
        >
          <div class="flex flex-row items-center gap-5">
            <h4 class="mt-10 px-5 text-2xl font-bold text-amber-500 md:mt-20 lg:mt-0">{{ video.title }}</h4>
          </div>
          <p class="h-20 px-5 md:h-10">{{ video.description }}</p>
          <iframe
            :src="
              video.url +
              '?ecver=1&cc_load_policy=1&modestbranding=1&volume=60&end=350iv_load_policy=3&rel=0&showinfo=0&autohide=1&color=white&hl=de&theme=dark&controls=0'
            "
            allowFullScreen="allowFullScreen"
            allowtransparency="true"
            class="mt-20 w-full lg:rounded"
            height="350"
          >
          </iframe>
        </div>
      </div>
    </section>

    <!-- SERVICES -->
    <section
      class="border-y border-y-amber-500 bg-gray-900 bg-lizenzrecht-screencasts bg-cover bg-center bg-no-repeat py-20 bg-blend-overlay lg:bg-amber-500 lg:bg-right lg:py-0"
    >
      <div class="relative leading-loose lg:bg-gradient-to-r lg:from-black lg:via-amber-900 lg:to-transparent">
        <div
          class="z-5 flex w-full flex-col justify-center bg-gradient-to-r from-black via-black to-transparent text-gray-300 md:p-10 lg:gap-10 lg:py-44 lg:px-44"
        >
          <h2
            id="services"
            class="text-extabold text-3xl text-amber-500 lg:text-5xl"
          >
            Services
          </h2>
          <p class="pb-10">
            Ich habe bereits hunderte Screencasts der unterschiedlichsten Art produziert. Mein Service umfasst dabei
            folgendes Angebot:
          </p>
          <!-- Begin Grid -->
          <div
            class="grid grid-cols-1 gap-10 px-5 md:grid md:grid-cols-1 md:grid-cols-2 md:gap-10 md:px-0 lg:grid lg:grid-cols-2 lg:px-0"
          >
            <!-- SCRIPTERSTELLUNG -->
            <div class="flex flex-col gap-5 rounded rounded-2xl bg-amber-500 bg-opacity-20 p-10">
              <div class="flex flex-col items-center gap-5 md:flex-col lg:flex-row">
                <div class="rounded-full bg-black p-4 opacity-50">
                  <svg
                    class="h-10 w-10 fill-current text-amber-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clip-rule="evenodd"
                      d="M18.97 3.659a2.25 2.25 0 00-3.182 0l-10.94 10.94a3.75 3.75 0 105.304 5.303l7.693-7.693a.75.75 0 011.06 1.06l-7.693 7.693a5.25 5.25 0 11-7.424-7.424l10.939-10.94a3.75 3.75 0 115.303 5.304L9.097 18.835l-.008.008-.007.007-.002.002-.003.002A2.25 2.25 0 015.91 15.66l7.81-7.81a.75.75 0 011.061 1.06l-7.81 7.81a.75.75 0 001.054 1.068L18.97 6.84a2.25 2.25 0 000-3.182z"
                      fill-rule="evenodd"
                    />
                  </svg>
                </div>

                <h4 class="text-3xl font-bold text-amber-500 md:text-2xl">Skripterstellung</h4>
              </div>
              <p class="z-100 text-md leading-normal">
                Die Basis eines jeden Screencasts ist ein Skript. In einem Solchen wird nicht nur der grobe inhalt des
                Videos, sondern vor allem auch der Sprechertext festgehalten. Zudem werden, wie in einem Drehbuch,
                verschiedene Kameraeinstellungen und Effekte beschrieben. Da viele Kunden entwerder nicht die Zeit oder
                die Kenntnis haben, ein solches Skript zu erstellen, übernehme ich gerne diese Arbeit.
                <a
                  class="z-10"
                  href="/src/assets/skript-fuer-screencast.pdf"
                  target="_blank"
                  >Hier können Sie sich ein von mir erstelltes Beipielskript ansehen</a
                >
              </p>
            </div>

            <!-- VOICE OVER -->
            <div class="flex flex-col gap-5 rounded rounded-2xl bg-amber-500 bg-opacity-20 p-10">
              <div class="flex flex-col items-center gap-5 md:flex-col lg:flex-row">
                <div class="rounded-full bg-black p-4 opacity-50">
                  <svg
                    class="h-10 w-10 fill-current text-amber-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8.25 4.5a3.75 3.75 0 117.5 0v8.25a3.75 3.75 0 11-7.5 0V4.5z" />
                    <path
                      d="M6 10.5a.75.75 0 01.75.75v1.5a5.25 5.25 0 1010.5 0v-1.5a.75.75 0 011.5 0v1.5a6.751 6.751 0 01-6 6.709v2.291h3a.75.75 0 010 1.5h-7.5a.75.75 0 010-1.5h3v-2.291a6.751 6.751 0 01-6-6.709v-1.5A.75.75 0 016 10.5z"
                    />
                  </svg>
                </div>

                <h4 class="text-3xl font-bold text-amber-500 md:text-2xl">Voice-Over</h4>
              </div>
              <p class="z-100 text-md leading-normal">
                In den meisten Screencasts und Tutorials muss etwas erklärt werden. Dies geht natürlich am besten mit
                einem so genannten Voice-Over. Dabei wird der Text eingesprocheun und im Nachgang bearbeitet. Diesen
                Teil übernheme ich in der Regel selbst, kann dies aber auch auf Wunsch an professionelle Sprecher
                auslagern.
              </p>
            </div>

            <!-- HINTERGRUND MUSIK -->
            <div class="flex flex-col gap-5 rounded rounded-2xl bg-amber-500 bg-opacity-20 p-10">
              <div class="flex flex-col items-center gap-5 md:flex-col lg:flex-row">
                <div class="rounded-full bg-black p-4 opacity-50">
                  <svg
                    class="h-10 w-10 fill-current text-amber-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clip-rule="evenodd"
                      d="M19.952 1.651a.75.75 0 01.298.599V16.303a3 3 0 01-2.176 2.884l-1.32.377a2.553 2.553 0 11-1.403-4.909l2.311-.66a1.5 1.5 0 001.088-1.442V6.994l-9 2.572v9.737a3 3 0 01-2.176 2.884l-1.32.377a2.553 2.553 0 11-1.402-4.909l2.31-.66a1.5 1.5 0 001.088-1.442V9.017 5.25a.75.75 0 01.544-.721l10.5-3a.75.75 0 01.658.122z"
                      fill-rule="evenodd"
                    />
                  </svg>
                </div>

                <h4 class="text-3xl font-bold text-amber-500 md:text-2xl">Hintegrundmusik</h4>
              </div>
              <p class="z-100 text-md leading-normal">
                Weiter oben im Portfolio finden Sie einige Videos, in welchen auch Hintergrundmusik verwendet wurde.
                Hier nutze ich entweder von Ihnen gelieferte Musik oder schöpfe aus einem reichhaltige Fundus an
                lizentfreier oder auch lizenzierter Musik. Zudem habe ich die Möglichkeit individuelle Hintergeundmusik
                oder auch Audiologos professionell erstellen zu lassen.
              </p>
            </div>

            <!-- INTRO OUTRO -->
            <div class="flex flex-col gap-5 rounded rounded-2xl bg-amber-500 bg-opacity-20 p-10">
              <div class="flex flex-col items-center gap-5 md:flex-col lg:flex-row">
                <div class="rounded-full bg-black p-4 opacity-50">
                  <svg
                    class="h-10 w-10 fill-current text-amber-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clip-rule="evenodd"
                      d="M1.5 5.625c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v12.75c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 18.375V5.625zm1.5 0v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-1.5A.375.375 0 003 5.625zm16.125-.375a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5A.375.375 0 0021 7.125v-1.5a.375.375 0 00-.375-.375h-1.5zM21 9.375A.375.375 0 0020.625 9h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5zM4.875 18.75a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5zM3.375 15h1.5a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375zm0-3.75h1.5a.375.375 0 00.375-.375v-1.5A.375.375 0 004.875 9h-1.5A.375.375 0 003 9.375v1.5c0 .207.168.375.375.375zm4.125 0a.75.75 0 000 1.5h9a.75.75 0 000-1.5h-9z"
                      fill-rule="evenodd"
                    />
                  </svg>
                </div>

                <h4 class="text-center text-3xl font-bold text-amber-500 md:text-2xl">Intro &amp; Outro Erstellung</h4>
              </div>
              <p class="z-100 text-md leading-normal">
                Für ein gutes Branding der Videos, vor allem wenn diese auf sozialen Medien veröffetnlicht werden
                sollen, sollte man immer ein Intro und/oder Outro verwenden. In den meisten Fällen haben meine Kunden
                soetwas noch nicht in der virtuellen Schublade liegen. Hier kann man auch verschiedene Wege gehen.
                Entweder ich passe ein Intro an, dass Sie aus einer der zahlreichen Onlineshops, wie etwa Envarto,
                gekauft haben oder ich kann ein individuelles Intro/Outro erstellen lassen.
              </p>
            </div>

            <!-- LIZENZRECHTE -->

            <div
              class="col-span-1 flex flex-col gap-5 rounded rounded-2xl bg-amber-500 bg-opacity-20 p-10 md:col-span-2 lg:col-span-2"
            >
              <div class="flex flex-col items-center justify-center gap-5 lg:flex-row">
                <div class="rounded-full bg-black p-4 opacity-50">
                  <svg
                    class="h-10 w-10 fill-current text-amber-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clip-rule="evenodd"
                      d="M12 2.25a.75.75 0 01.75.75v.756a49.106 49.106 0 019.152 1 .75.75 0 01-.152 1.485h-1.918l2.474 10.124a.75.75 0 01-.375.84A6.723 6.723 0 0118.75 18a6.723 6.723 0 01-3.181-.795.75.75 0 01-.375-.84l2.474-10.124H12.75v13.28c1.293.076 2.534.343 3.697.776a.75.75 0 01-.262 1.453h-8.37a.75.75 0 01-.262-1.453c1.162-.433 2.404-.7 3.697-.775V6.24H6.332l2.474 10.124a.75.75 0 01-.375.84A6.723 6.723 0 015.25 18a6.723 6.723 0 01-3.181-.795.75.75 0 01-.375-.84L4.168 6.241H2.25a.75.75 0 01-.152-1.485 49.105 49.105 0 019.152-1V3a.75.75 0 01.75-.75zm4.878 13.543l1.872-7.662 1.872 7.662h-3.744zm-9.756 0L5.25 8.131l-1.872 7.662h3.744z"
                      fill-rule="evenodd"
                    />
                  </svg>
                </div>

                <h4 class="text-3xl font-bold text-amber-500">Lizenzrechte</h4>
              </div>
              <p class="leading-normal md:leading-normal lg:leading-loose"
                >Im Medienbereich geht nichts ohne entsprechende Lizenzen. So auch im Falle meiner Screencasts,
                Erklärvideos und Tutorials. Der Urheber (in dem Fall also ich), bestimmt nach &sect;31 ff. UrhG
                grundsätzlich selbst, wie solche Lizenzen ausfallen. In aller Regel können die Lizenzrechte im
                Einzelfall verhandelt werden. So wäre es zum Beipsiel möglich, dass ich Ihnen ein ausschließliches
                Nutzungsrecht, inklusive Veränderungsrechte einräume. Allerdings erhalten Sie bei allen Videos, immer
                mindestens folgende Lizenzrechte:
              </p>
              <ul class="list-disc pl-10 leading-normal lg:leading-loose">
                <li>Kommerzielles, zeiltich, inhaltlich und räumlich uneingeschränktes, einfaches Nutzungsrecht</li>
                <li>Zeiltich, inhaltlich und räumlich uneingeschränktes Verbreitungsrecht.</li>
                <li>Zeitlich, inhaltlich und räumlich uneingeschränktes Weitergaberecht.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>
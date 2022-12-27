<script setup>
  import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
  import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

  const navigation = [
    { name: 'Startseite', href: '/', current: false, hash: '', target: '_self' },
    { name: 'Portfolio', href: '/#portfolio', current: false, hash: '#portfolio', target: '_self' },
    { name: 'Warum ich?', href: '/#warumich', current: false, hash: '#warumich', target: '_self' },
    { name: 'Screencasts', href: '/screencasts', current: false, hash: '', target: '_self' },
    { name: 'Impressum / Kontakt', href: '#kontakt', current: false, hash: '#kontakt', target: '_self' },
    { name: 'AGB', href: '/AGB.pdf', current: false, hash: '', target: '_blank' },
  ]
</script>

<template>
  <Disclosure
    v-slot="{ open }"
    as="nav"
    class="bg-black"
  >
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton
            class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            <span class="sr-only">Open main menu</span>
            <Bars3Icon
              v-if="!open"
              aria-hidden="true"
              class="block h-6 w-6"
            />
            <XMarkIcon
              v-else
              aria-hidden="true"
              class="block h-6 w-6"
            />
          </DisclosureButton>
        </div>
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start lg:justify-between">
          <div class="flex flex-shrink-0 items-center">
            <img
              alt="Michael Grossklos Webentwicklung"
              class="block h-8 w-auto invert lg:hidden"
              src="/src/assets/webentwicklung_michael_grossklos.svg"
            />
            <img
              alt="Your Company"
              class="hidden h-8 w-auto invert lg:block"
              src="/src/assets/webentwicklung_michael_grossklos.svg"
            />
          </div>
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <!--              <a
                              v-for="item in navigation"
                              :key="item.name"
                              :aria-current="item.current ? 'page' : undefined"
                              :class="[
                                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                'rounded-md px-3 py-2 text-sm font-medium',
                              ]"
                              :href="item.href"
                              :target="item.target"
                              >{{ item.name }}</a
                            >-->
              <router-link
                v-for="item in navigation"
                :key="item.name"
                :aria-current="item.current ? 'page' : undefined"
                :class="[
                  item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'rounded-md px-3 py-2 text-sm font-medium',
                ]"
                :target="item.target"
                :to="item.href"
              >
                {{ item.name }}
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 px-2 pt-2 pb-3">
        <DisclosureButton
          v-for="item in navigation"
          :key="item.name"
          :aria-current="item.current ? 'page' : undefined"
          :class="[
            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
            'block rounded-md px-3 py-2 text-base font-medium',
          ]"
          :href="item.href"
          as="a"
          >{{ item.name }}
        </DisclosureButton>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>
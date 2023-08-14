<template>
  <div id="theLinks">
    <UAccordion :items="useLinks()" :ui="{ item: { padding: 'pt-0 -mt-2 pb-3' } }">
      <template #default="{ item, open }">
        <div class="bg-white rounded-lg mt-2">
          <UButton
            color="gray"
            :block="true"
            class="z-50 relative"
            :ui="{ padding: { sm: 'p-3' } }"
          >
            <template #leading>
              <UIcon v-if="item.icon" :name="item.icon" class="mr-1 block dark:hidden" :class="item.iconClass" />
              <UIcon v-if="item.icon" :name="item.iconDark ? item.iconDark : item.icon" class="mr-1 hidden dark:block" :class="item.iconClass" />
              <img
                v-if="item.image"
                :src="item.image"
                :alt="item.label"
                class="h-5 mr-1"
              >
            </template>
            {{ item.label }}
            <template #trailing>
              <UIcon
                name="i-heroicons-chevron-right-20-solid"
                class="w-5 h-5 absolute right-3 transform transition-transform duration-200"
                :class="[open && 'rotate-90']"
              />
            </template>
          </UButton>
        </div>
      </template>
      <template #item="{ item }">
        <div
          class="overflow-hidden z-40
          shadow-sm rounded-md
          bg-white bg-opacity-70 dark:bg-gray-800
          prose dark:prose-invert"
        >
          <div class="overflow-hidden px-2 pt-5 pb-3 text-sm text-dark dark:text-gray-200">
            <component :is="item.svgComponent" v-if="item.svgComponent" />
            <div v-html="item.subTitle" />
            <div v-html="item.content" />
            <UButton
              :to="item.url"
              :label="item.urlDisplay ? item.urlDisplay : item.url"
              class="mt-2 linkButton"
              trailing-icon="i-uil-external-link-alt"
              target="_blank"
            >
              <template #trailing>
                <UIcon
                  name="i-uil-external-link-alt"
                  size="1em"
                />
              </template>
            </UButton>
          </div>
        </div>
      </template>
    </UAccordion>
  </div>
</template>

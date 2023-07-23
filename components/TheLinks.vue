<template>
  <div id="theLinks">
    <UAccordion :items="useLinks()">
      <template #default="{ item, open }">
        <UButton
          color="gray"
          :block="true"
          variant="soft"
          class="mt-2 z-50 relative"
          :ui="{ padding: { sm: 'p-3' } }"
        >
          <template #leading>
            <UIcon v-if="item.icon" :name="item.icon" class="h-6 mr-1" :class="item.iconClass" />
            <img
              v-if="item.image"
              :src="item.image"
              :alt="item.label"
              class="h-6 mr-1"
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
      </template>
      <template #item="{ item }">
        <div class="overflow-hidden z-40">
          <div class="overflow-hidden p-2  text-dark dark:text-gray-200">
            <component :is="item.svgComponent" v-if="item.svgComponent" />
            <div v-html="item.subTitle" />
            <div v-html="item.content" />
            <UButton
              :to="item.url"
              :label="item.urlDisplay ? item.urlDisplay : item.url"
              variant="soft"
              class="mt-2"
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

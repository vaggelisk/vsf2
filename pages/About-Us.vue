<template xmlns="http://www.w3.org/1999/html">
  <div id="about-us">
    <SfLoader :loading="loading">
      <div class="about-us-page">
        <SfHeading
          v-if="page && page.content_heading"
          :title="page.content_heading"
          :level="1"
          class="sf-heading--no-underline sf-heading--left"
        />
        <HTMLContent
          v-if="page && page.content"
          :content="page.content"
        />
      </div>
    </SfLoader>
  </div>
</template>

<script lang="ts" type="module">
import {
  defineComponent,
  ref,
  useContext,
  onMounted,
  useFetch,
} from '@nuxtjs/composition-api';
import LazyHydrate from 'vue-lazy-hydration';
import {useCache, CacheTagPrefix} from '@vue-storefront/cache';
import { SfHeading, SfLoader } from '@storefront-ui/vue';
import {CmsPage} from '~/modules/GraphQL/types';
import HeroSection from '~/components/HeroSection.vue';
import {getMetaInfo} from '~/helpers/getMetaInfo';
import {useContent} from '~/composables';
import LoadWhenVisible from '~/components/utils/LoadWhenVisible.vue';
import HTMLContent from '~/components/HTMLContent.vue';

export default defineComponent({
  name: 'AboutUsPage',
  components: {
    HTMLContent,
    HeroSection,
    LazyHydrate,
    LoadWhenVisible,
    SfLoader,
    SfHeading,
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  setup() {
    const {addTags} = useCache();
    const {
      loadPage,
      loading,
      error
    } = useContent();
    const {app} = useContext();
    const year = new Date().getFullYear();
    const {isDesktop} = app.$device;

    const page = ref < CmsPage | null > (null);


    useFetch(async () => {
      page.value = await loadPage({identifier: 'about-us'});
      // page.value = await loadPage( { identifier: 'about-us'})
    });

    onMounted(() => {
      addTags([{prefix: CacheTagPrefix.View, value: 'about-us'}]);
    });

    // @ts-ignore
    return {
      loading,
      loadPage,
      page,
    };
  },
  head() {
    return getMetaInfo(this.page);
  },
});
</script>
<style lang="scss" scoped>
#about-us {
  box-sizing: border-box;
  padding: 0 var(--spacer-sm);
  @include for-desktop {
    max-width: 1240px;
    padding: 0;
    margin: 0 auto;
  }
}
</style>

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
import {SfBanner, SfBannerGrid, SfHeading, SfLoader} from '@storefront-ui/vue';
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
    SfBanner,
    SfLoader,
    SfHeading,
    SfBannerGrid,
    CallToAction: () => import(/* webpackPrefetch: true */ '~/components/CallToAction.vue'),
    InstagramFeed: () => import(/* webpackPrefetch: true */ '~/components/InstagramFeed.vue'),
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

    const callToAction = ref({
      title: app.i18n.t('Subscribe to Newsletters'),
      description: app.i18n.t('Be aware of upcoming sales and events. Receive gifts and special offers!'),
      buttonText: app.i18n.t('Subscribe'),
      imageSrc: '/homepage/newsletter.webp',
      imageWidth: isDesktop ? 1240 : 400,
      imageHeight: isDesktop ? 202 : 200,
      imageConfig: {
        fit: 'cover',
        format: 'webp',
      },
    });

    useFetch(async () => {
      page.value = await loadPage({identifier: 'about-us'});
      // page.value = await loadPage( { identifier: 'about-us'})
    });

    onMounted(() => {
      addTags([{prefix: CacheTagPrefix.View, value: 'about-us'}]);
      console.log('vaggelis')
      console.log(JSON.stringify(page.value))
    });

    // @ts-ignore
    return {
      loading,
      loadPage,
      callToAction,
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

<template lang="pug">
  .search-results
    search-result-item(v-for="item in items" v-bind:title="item.title" v-bind:url="item.url" v-bind:description="item.description")
</template>

<script>
import SearchResultItem from './SearchResultItem'
export default {
  name: 'SearchResults',
  components: {
    SearchResultItem
  },
  data () {
    return {
      items: [
        { title: "Google", url: "https://www.google.co.jp/", description: "世界中のあらゆる情報を検索するためのツールを提供しています。さまざまな検索機能を活用して、お探しの情報を見つけてください。" }
      ]
    }
  }
}
</script>

<style lang="sass">
.search-results {
  position: absolute;
  margin-top: 176px;
  margin-left: 136px;
}
</style>

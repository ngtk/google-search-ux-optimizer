<template lang="pug">
  #top
    search-header
    search-navigation
    search-status
    search-results
</template>

<script>
import SearchHeader from './SearchHeader'
import SearchNavigation from './SearchNavigation'
import SearchStatus from './SearchStatus'
import SearchResults from './SearchResults'
export default {
  name: 'Top',
  components: {
    SearchHeader,
    SearchNavigation,
    SearchStatus,
    SearchResults
  }
}
</script>

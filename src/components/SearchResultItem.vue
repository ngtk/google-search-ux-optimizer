<template lang="pug">
  .search-result-item
    .result-title {{ title }}
    .result-url {{ url }}
    .result-description {{ description }}
</template>

<script>
export default {
  name: 'SearchResultItem',
  props: {
    title: String,
    url: String,
    description: String
  }
}
</script>

<style lang="sass">
.search-result-item {
  max-width: 600px;
}

.result-title {
  display: inline-block;
  padding: 4px 0;
	font-family: Arial;
	font-size: 18px;
  line-height: 20px;
	color: #340dab;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}

.result-url {
	font-family: Arial;
	font-size: 14px;
	color: #006621;
}

.result-description {
  margin-top: 5px;
	font-family: Arial, HiraKakuProN-W3;
	font-size: 13px;
	line-height: 1.4;
	color: #676767;
}
</style>

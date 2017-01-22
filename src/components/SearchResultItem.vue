<template lang="pug">
  .search-result-item
    input.result-title(v-model="title")
    input.result-url(v-model="url")
    textarea.result-description(v-model="description")
</template>

<script>
export default {
  name: 'SearchResultItem',
  data() {
    return {
      title: "Google",
      url: "https://www.google.co.jp/",
      description: "世界中のあらゆる情報を検索するためのツールを提供しています。さまざまな検索機能を活用して、お探しの情報を見つけてください。"
    }
  },
  methods: {
  }
}
</script>

<style lang="sass">
.search-result-item {
  max-width: 600px;

  input, textarea {
    width: 600px;
    display: block;
    border: none;
      &:focus {
        outline: none;
      }
  }
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
  resize: none;

  &:focus {
    resize: vertical;
  }
}

.hidden {
  visibility: hidden;
}

.user-input {
  position: fixed;
  box-shadow:0px 4px 10px 6px rgba(189,189,189,0.1);
  -moz-box-shadow:0px 4px 10px 6px rgba(189,189,189,0.1);
  -webkit-box-shadow:0px 4px 10px 6px rgba(189,189,189,0.1);
}
</style>

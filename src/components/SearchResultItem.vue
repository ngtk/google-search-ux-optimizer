<template lang="pug">
  .search-result-item
    .result-title(@click="onClickTitle") {{ title }}
    .result-url(@click="onClickUrl") {{ url }}
    .result-description(@click="onClickDescription") {{ description }}
    .user-input.result-title-input.hidden
      input(v-model="title" @keyup.enter="submitTitle")
    .user-input.result-url-input.hidden
      input(v-model="url" @keyup.enter="submitUrl")
    .user-input.result-description-input.hidden
      input(v-model="description" @keyup.enter="submitDescription")
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
    onClickTitle: function () {
      let el = this.$el.getElementsByClassName("result-title-input")[0]
      let rect = this.$el.getElementsByClassName("result-title")[0].getBoundingClientRect()
      let x = rect.top + window.pageYOffset - 16
      let y = rect.right + window.pageXOffset
      el.style.top = x + "px"
      el.style.left = y + "px"
      el.style.visibility = "visible"
      el.querySelector("input").focus()
    },
    submitTitle: function () {
      this.$el.getElementsByClassName("result-title-input")[0].style.visibility = "hidden"
    },
    onClickUrl: function () {
      let el = this.$el.getElementsByClassName("result-url-input")[0]
      let rect = this.$el.getElementsByClassName("result-url")[0].getBoundingClientRect()
      let x = rect.top + window.pageYOffset - 16
      let y = rect.right + window.pageXOffset
      el.style.top = x + "px"
      el.style.left = y + "px"
      el.style.visibility = "visible"
      el.querySelector("input").focus()
    },
    submitUrl: function () {
      this.$el.getElementsByClassName("result-url-input")[0].style.visibility = "hidden"
    },
    onClickDescription: function () {
      let el = this.$el.getElementsByClassName("result-description-input")[0]
      let rect = this.$el.getElementsByClassName("result-description")[0].getBoundingClientRect()
      let x = rect.top + window.pageYOffset - 16
      let y = rect.right + window.pageXOffset
      el.style.top = x + "px"
      el.style.left = y + "px"
      el.style.visibility = "visible"
      el.querySelector("input").focus()
    },
    submitDescription: function () {
      this.$el.getElementsByClassName("result-description-input")[0].style.visibility = "hidden"
    },
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

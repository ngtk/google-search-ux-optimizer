<template lang="pug">
  .search-navigation
    .item-collection
      .item(v-for="item in items" v-bind:class="{ active: item.active }")
        .item-name {{ item.name }}
</template>

<script>
export default {
  name: 'SearchNavigation',
  data () {
    return {
      items: [
        { name: "すべて", active: true },
        { name: "ニュース", active: false },
        { name: "地図", active: false },
        { name: "動画", active: false },
        { name: "画像", active: false },
        { name: "もっと見る", active: false },
        { name: "検索ツール", active: false }
      ]
    }
  }
}
</script>

<style lang="sass">
.search-navigation {
  position: absolute;
  width: 100%;
  margin-top: 59px;
  border-bottom: solid 1px #ebebeb;
}

.item-collection {
  display: flex;
  margin-left: 128px;
}

.item {
  padding: 20px 10px 17px;
  margin-right: 12px;

  &:hover {
    cursor: pointer;
  }

  &.active {
    border-bottom: solid 3px #4285f4;

    .item-name {
      font-family: HiraKakuProN-W6;
      font-weight: 600;
      color: #4285f4;
    }
  }
}

.item-name {
  font-family: HiraKakuProN-W3;
	font-size: 13px;
  font-weight: 300;
	text-align: center;
	color: #666666;
}
</style>

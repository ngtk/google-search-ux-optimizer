<template lang="pug">
  header.search-header
    img.logo(:src="googleLogoImage")
    .search-box
      .search-input-box
        input(v-model="query")
      .search-submit-button
        svg(width='20px', height='20px', viewbox='723 21 20 20', version='1.1', xmlns='http://www.w3.org/2000/svg', xmlns:xlink='http://www.w3.org/1999/xlink')
          g#icon-search(stroke='none', stroke-width='1', fill='none', fill-rule='evenodd')
            circle#Oval(stroke='#FFFFFF', stroke-width='2', cx='6', cy='6', r='6', transform='translate(1, 1)')
            polygon#Rectangle-8(fill='#FFFFFF', transform='translate(15.238134, 15.238134) rotate(-315.000000) translate(-14.238134, -14.238134) ', points='10.5418118 13.3578396 18.8175462 13.3578396 18.8175462 15.1184277 10.5418118 15.1184277 9.65872113 14.2381336')
</template>

<script>
import googleLogoImage from '../static/google.png'
export default {
  name: 'SearchHeader',
  data () {
    return {
      query: "google",
      googleLogoImage: googleLogoImage
    }
  }
}
</script>

<style lang="sass">
.search-header {
  position: absolute;
  width: 100%;
  height: 59px;
  background-color: #f1f1f1;
  border-bottom: 1px solid #e5e5e5;
}

.logo {
  position: absolute;
  margin-left: 16px;
  margin-top: 15px;
	width: 92px;
	height: 30.8px;
}

.search-box {
  margin-top: 9px;
  margin-left: 126px;
  display: flex;
}

.search-input-box {
  background-color: #ffffff;
  border: solid 1px #d9d9d9;
  height: 38px;
  width: 100%;
  max-width: 588px;

  input {
    width: 100%;
    max-width: 580px;
    height: 26px;
    margin-top: 5px;
    margin-bottom: 5px;
    margin-left: 8px;
    border: none;
    font-family: Arial;
    font-size: 16px;
    line-height: 26px;
    color: #000000;

    &:focus {
      outline: none;
    }
  }
}

.search-submit-button {
	width: 40px;
	height: 40px;
  margin-left: -1px;
	background-color: #4285f4;

  svg {
    margin: 10px;
  }

  &:hover {
    cursor: pointer;
  }
}
</style>

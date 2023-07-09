<template>
  <div class="search">
    <input
      type="text"
      placeholder="Search City"
      class="search-control"
      v-model.trim="search"
      @keydown.enter="getData"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: null,
    };
  },
  methods: {
    getData() {
      this.$store.dispatch("setSearchCity", this.search);
      this.$store.dispatch("fetchWeatherInCity", this.search);
    },
  },
};
</script>
<style lang="less" scoped>
.search {
  position: relative;
  .search-control {
    width: 100%;
    height: 50px;
    border: 2px solid fade(black, 10);
    border-radius: 100px;
    outline: none;
    background-color: transparent;
    font-size: 16px;
    padding-left: 25px;
    padding-right: 25px;
    transition: all 0.4s;
    &::placeholder {
      color: fade(black, 60);
    }
    &:focus {
      background-color: #fff;
      box-shadow: 0 8px 16px fade(black, 25);
      border-color: fade(black, 5);
      font-weight: 600;
      &::placeholder {
        font-weight: 400;
      }
    }
  }
}
</style>

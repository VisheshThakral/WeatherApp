<template>
  <transition name="fade" mode="out-in" appear>
    <div class="container">
      <div class="card">
        <SearchBar />
        <WeatherInfo />
      </div>
    </div>
  </transition>
</template>

<script>
import SearchBar from "@/components/SearchBar.vue";
import WeatherInfo from "@/components/WeatherInfo.vue";
export default {
  components: {
    SearchBar,
    WeatherInfo,
  },
};
</script>

<style lang="less">
.container {
  height: 100vh;
  display: flex;
  justify-content: center;
  background: url("../assets/background.jpg");
}
.fade-enter-active,
.fade-leave-active {
  transition: all 1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.5);
}

.card {
  max-width: var(--cardWidth);
  width: 100%;
  height: 100%;
  padding: 40px;
  box-shadow: 0 0 70px fade(black, 30);
  z-index: 9999;
  background-color: var(--cardBgColor);

  @media (max-height: 767px) {
    padding: 30px;
  }
}

@media (max-width: 480px) {
  .card {
    padding: 30px;
  }
}
</style>

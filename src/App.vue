<template>
  <div id="app">
    <WeatherCard />
  </div>
</template>

<script>
import getCurrentLocation from "@/utils/AccessUserLocation";
import WeatherCard from "@/components/WeatherCard.vue";
export default {
  name: "App",
  data() {
    return {
      city: null,
      weatherData: {},
    };
  },
  components: {
    WeatherCard,
  },
  methods: {
    async fetchCurrentCity() {
      try {
        const currentCity = await getCurrentLocation();
        if (currentCity) {
          await this.$store.dispatch("setSearchCity", currentCity);
          await this.$store.dispatch("fetchWeatherInCity", currentCity);
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
  async mounted() {
    await this.fetchCurrentCity();
  },
};
</script>

<style lang="less">
@import url("https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,400;0,700;0,800;0,900;1,300;1,500&display=swap");
:root {
  --cardWidth: 460px;
  --darkColor: #666;
  --grayColor: #999;
  --cardBgColor: #f3ebeb;
  --cloudAnimateTime: 150s;
  --clearAnimationTime: 120s;
  --snowAnimateTime: 15s;
  --rainAnimateTime: 70s;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Jost", sans-serif;
}
body {
  background-color: fade(#000, 30);
  overflow: hidden;
}
.app {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>

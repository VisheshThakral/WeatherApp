<template>
  <div>
    <div class="weather-main" v-if="getWeatherData">
      <div class="weather-feelsLike">{{ getWeatherData.name}}</div>
      <div class="weather-feelsLike">
        Feels like
        <strong>
          {{ getWeatherData.feelsLike || 0 }}
          <sup>&deg;</sup>
        </strong>
      </div>
      <div class="weather-temp">
        <div
          class="weather-icon"
          :style="[getWeatherData.icon ? {'background-image': 'url(http://openweathermap.org/img/wn/' + getWeatherData.icon + 'd@2x.png)',}: {},
          ]"
        ></div>
        <span>{{ getWeatherData.temp || 0 }}</span>
        <sup>&deg;</sup>
      </div>
      <div class="weather-description">{{ getWeatherData.description }}</div>
    </div>
    <div class="weather-info" v-if="getWeatherData">
      <div class="weather-item" title="Wind">
        <windIcon size="1.1x"></windIcon>
        <span class="value">{{ getWeatherData.wind }}</span>
      </div>
      <div class="weather-item" title="Humidity">
        <DropletIcon size="1.1x"></DropletIcon>
        <span class="value">%{{ getWeatherData.humidity }}</span>
      </div>
      <div class="weather-item" title="Cloud">
        <CloudIcon size="1.1x"></CloudIcon>
        <span class="value">%{{ getWeatherData.clouds }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { DropletIcon, WindIcon, CloudIcon } from "vue-feather-icons";

export default {
  data() {
    return {};
  },

  components: {
    DropletIcon,
    WindIcon,
    CloudIcon
  },

  computed: {
    ...mapGetters(["getWeatherData"]),
  },
};
</script>

<style lang="less" scoped>
.weather {
  &-main {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 40px;
    margin-bottom: 40px;
    .weather {
      &-temp {
        position: relative;
        width: 150px;
        height: 150px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 100%;
        box-shadow: 0 0 40px fade(black, 20);
        background-color: #fff;
        margin: 40px 0;
        span {
          font-size: 4rem;
          font-weight: 500;
          letter-spacing: -2px;
          position: relative;
        }
        sup {
          position: relative;
          top: -21px;
          font-size: 40px;
        }
      }
      &-icon {
        position: absolute;
        top: -35px;
        left: -35px;
        width: 110px;
        height: 110px;
        background-repeat: no-repeat;
        background-size: 100%;
        filter: drop-shadow(1px 1px 0 fade(black, 3))
          drop-shadow(-5px -5px 0 fade(black, 8));
      }
      &-feelsLike,
      &-description {
        font-size: 18px;
        color: var(--darkColor);
        text-transform: capitalize;
        sup {
          position: relative;
          top: 5px;
          left: -2px;
          font-size: 18px;
        }
      }
    }
  }
}

.weather-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 2px solid fade(black, 10);
  padding-top: 20px;
  .weather-item {
    display: flex;
    align-items: center;
    color: var(--darkColor);
    .value {
      margin-left: 5px;
      font-weight: 300;
    }
  }
}

@media (max-height: 767px) {
  .weather-main {
    margin-top: 30px;
    margin-bottom: 30px;
    .weather-temp {
      width: 125px;
      height: 125px;
      margin: 30px 0;
    }
  }
}
</style>

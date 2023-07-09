import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { API_BASE_URL } from "@/constants";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    city: null,
    weatherData: null,
  },
  getters: {
    getCity: (state) => state.city,
    getWeatherData: (state) => state.weatherData,
  },
  actions: {
    setSearchCity({ commit }, city) {
      commit("SET_CITY", city);
    },
    async fetchWeatherInCity({ commit }, city) {
      try {
        let response = await axios.get(
          `${API_BASE_URL}weather?q=${city}&units=metric&APPID=${process.env.API_KEY}`
        );
        response = response?.data;
        const weatherData = {
          name: response.name,
          temp: response.main.temp,
          feelsLike: response.main.feels_like,
          tempMin: response.main.temp_min,
          tempMax: response.main.temp_max,
          humidity: response.main.humidity,
          description: response.weather[0].description,
          icon: response.weather[0].icon.substring(0, 2),
          info: response.weather[0].main,
          wind: response.wind.speed,
          clouds: response.clouds.all,
          country: response.sys.country,
        };
        commit("SET_WEATHER_DATA", weatherData);
      } catch (err) {
        console.log(err);
      }
    },
  },
  mutations: {
    SET_CITY(state, data) {
      state.city = data;
    },
    SET_WEATHER_DATA(state, data) {
      state.weatherData = data;
    },
  },
});

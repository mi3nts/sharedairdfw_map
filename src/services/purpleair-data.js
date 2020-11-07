import Vue from "vue";
/**
 * Data service which provides data from Purple Air API to application.
 * End point must support CORS.
 */
export default new Vue({
    data: function () {
        return {
            baseUrl: "https://www.purpleair.com/json",
            sensors: [2508, 2644, 2667, 8516, 8548, 8682, 9504, 12969, 13013, 16271, 22719, 29371, 30327, 31403, 37443, 46221, 47651, 47667, 47677, 47691, 47967, 48401, 49395, 50909, 51321, 51821, 53183, 53239, 53337, 53365, 53389, 54219, 55479, 55821, 55823, 55839, 55853, 56121, 59953, 61493, 62083]
        }
    },
    methods: {
        /**
         * More information here
         * https://docs.google.com/document/d/15ijz94dXJ-YAZLi9iZ_RaBwrZ4KtYeCy08goGBwnbCU/edit
         */
        getSensorData: function (sensorID) {
            return this.$axios.get(this.baseUrl + "?show=" + sensorID);
        }
    }
});
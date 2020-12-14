import Vue from "vue";
/**
 * Data service which provides data from Airnow API to application.
 * End point must support CORS.
 *
 * Original by Robert Mundinger
 * Copied and edited by Jonah Duncan for EPA data
 */
export default new Vue({
    data: function () {
        return {
            baseUrl: "https://www.airnowapi.org/aq/data",
            bboxRecent: "BBOX=-97.754269,31.802118,-95.966931,33.589456&dataType=C&format=application/json&verbose=1&nowcastonly=1&includerawconcentrations=0&API_KEY=743E8D00-0FD4-4B80-A52E-356DE6E4266C"
        }
    },
    methods: {
        /** 
         * EPA documentation 
         * https://docs.airnowapi.org/Data/docs
         * epaType can be : PM25,O3
         * */
        getLatestCityData: function (epaType) {
            return this.$axios.get("https://cors-anywhere.herokuapp.com/" + this.baseUrl + "/?parameters=" + epaType + "&" + this.bboxRecent);
        },
        getHintonData: function () {
            return this.$axios.get("https://cors-anywhere.herokuapp.com/" + 'https://www.tceq.texas.gov/cgi-bin/compliance/monops/daily_summary.pl?cams=401').then(response => {
                var dom = $(response.data);
                var tr = $('a[href="daily_info.pl?parameter:88101"]', dom).parent().parent();
                var value = $('a[href="daily_info.pl?nodata"]', tr).first().parent().prev().text();
                var index = $('a[href="daily_info.pl?nodata"]', tr).first().parent().prev().index();
                var timestamp = this.$moment().set({
                    'hour': index - 1,
                    'minute': 0
                }).format('YYYY-MM-DDThh:mm');
                return {
                    Latitude: 32.819978897803345,
                    Longitude: -96.860113665106,
                    Parameter: "PM2.5",
                    SiteName: "Hinton Street",
                    UTC: timestamp,
                    Unit: "UG/M3",
                    Value: value
                }
            });
        },
        getHistoricalData: function (startDate, endDate) {
            return this.$axios.get(this.baseUrl + "/?startDate=" + startDate + "&endDate=" + endDate + "&parameters=" + this.bboxRecent);
        }
    }
});
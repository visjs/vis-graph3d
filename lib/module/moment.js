import Moment from "moment";

// first check if moment.js is already loaded in the browser window, if so,
// use this instance. Else, load via commonjs.
const MomentOrWindowDotMoment =
  (typeof window !== "undefined" && window.moment) || Moment;

export default MomentOrWindowDotMoment;

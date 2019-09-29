const path = require("path");
module.exports = {
  css : {
    loaderOptions: {
      sass: {
        data: `@import "@/styles/_variables.scss";`
      } 
    }
  }
};
var fbase = require("./push-notification")

exports.onInitialClientRender = () => {
    fbase.initializeFirebase(); 
  }

  
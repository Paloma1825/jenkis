const { defineConfig } = require('cypress');


module.exports = defineConfig({
  projectId: 'hc6ywk',
//chromeWebSecurity: false,
viewportWidth:1000,
viewportHeight:600,


 e2e: {
    
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
 
  specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx,feature}'
  //  specPattern: "**/*.feature"
    
    
 
  }


})



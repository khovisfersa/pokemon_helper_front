const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: ["vuetify"],
});

module.exports = {
  devServer: {
    proxy: 'http://localhost:5000',
  }
}
// module.exports = {
//   devServer: {
//     proxy: {
//       '^/pokeapi': {
//         target:'https://pokeapi.co/api/v2/pokemon/',
//       },
//       '^/backend':{
//         target:'http://localhost:5000'
//       }

//     }
//   }
// }

const {alias} = require('react-app-rewire-alias')

module.exports = function override(config, env) {
    alias({
      '@components': 'src/components',
       '@ui': 'src/components/Ui',      
        '@constants' : 'src/constants',
        '@containers': 'src/containers',
        '@hoc-helpers': 'src/hoc-components',
        '@services': 'src/services',
        '@utills': 'src/utills',
        '@styles': 'src/styles',
        '@routes': 'src/routes',
        '@static': 'src/static',
        '@hooks': 'src/hooks',    
        
        

       

    })(config);
  return config;
}
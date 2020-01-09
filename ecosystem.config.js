module.exports = {
  apps : [
      {
        name: "myapp1",
        script: "./server.js",
        watch: false,
        error_file:'./error.log',
        out_file:'./output.log',
        env: {
          "NODE_ENV": "development",
          "PORT": 3000,
        },    
        env_production : {
          "NODE_ENV": "production",
          "PORT": 8080,
        }
      }
  ]
}

const app = require('./app')
const config =  require('./config/server')

app.listen(config.PORT, () => {
    console.log(`Server running on port ${config.PORT}`)
})

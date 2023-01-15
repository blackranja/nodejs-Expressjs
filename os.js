//Built in Modules
const os = require('os')
const userInfo = {
    uptime: os.uptime(),
    user: os.userInfo(),
    freememory: os.freemem(),
    hostname: os.hostname(),
    type: os.type(),
    release: os.release()
}
console.log(userInfo)
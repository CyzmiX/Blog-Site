const fs = require('fs')


const db = {
    path: null,

    init: function(path) {
        if (typeof path === 'string') {
            this.path = path
        }

        else {
            throw new Error('unvalid path') 
            return
        }
    },

    getData: function() {
        if (!this.path) {
            throw new Error('Invalid db no path or no file was found!')
            return
        }

        let _ = []

        fs.readFileSync(this.path).toString().split(/[\n\t\r]/g).filter(n => n).forEach(e => {
            _.push(JSON.parse(e))
           
        })

        console.log(_)

        return _
    }, 

    putData(data={}) {
        if (typeof data !== 'object') {
            throw new Error('Invalid data!')
            return
        }

        fs.appendFileSync(this.path, '\n' + JSON.stringify(data))


        return 1
    },

    clear() {
        fs.writeFileSync(this.path, '')

        return 1
    },

    watch() {
        return fs.watchFileSync(this.path)
    }

}

const DB = (path) => {
    const _ = Object.create(db)
    _.init(path)
    return _       
}

module.exports = DB

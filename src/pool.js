const pg = require('pg');


class Pool {
    _pool = null;

    connect(options) {
       this._pool =  new pg.Pool(options)
    }
}

module.exports = new Pool();


// const pool = new pg.Pool({
//     host: 'localhost',
//     port: 5432
// });

// module.exports = pool;
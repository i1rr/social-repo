const pg = require('pg');


class Pool {
    _pool = null;

    connect(options) {
       this._pool =  new pg.Pool(options);
       return this._pool.query('SELECT 1 + 1'); //is there any better approach?:)
    }

    close() {
        return this._pool.end();
    }

    //safety first :)
    query(sql) {
        return this._pool.query(sql);
    }
}

module.exports = new Pool();


// const pool = new pg.Pool({
//     host: 'localhost',
//     port: 5432
// });

// module.exports = pool;
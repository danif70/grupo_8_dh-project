
const fs = require('fs');
const path = require('path');
let database = require(path.join(__dirname, '../database/products.json'))

let deleteController = {

    deleteproduct : (req,res) => {

        database = database.filter(product => product.id != req.params.id);
        for (let i = 0; i < database.length; i++ ){
            database[i].id = i+1
        }        

        fs.writeFileSync(path.join(__dirname, '../database/products.json'), JSON.stringify(database));

        res.redirect('/products');

    }
};

module.exports = deleteController;
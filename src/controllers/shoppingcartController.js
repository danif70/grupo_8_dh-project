const path = require('path');

const cartController = {
  cart: (req, res) => {
    res.render(path.join(__dirname, '../views/products/shoppingCart.ejs'), {
      styles: ['shoppingCart'],
      title: ['Carrito de Compras'],
      isAuthenticated: req.session.isAuthenticated,
    });
  },
};

module.exports = cartController;

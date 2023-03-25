const express = require('express');
const session = require('express-session');
const path = require('path');
const methodOverride = require('method-override');

const index = require('./src/routers/index');
const cart = require('./src/routers/shop');
const products = require('./src/routers/products');
const users = require('./src/routers/users');

const app = express();
const PORT = process.env.PORT || 8000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './src/views'));

app.use(express.static(path.resolve(__dirname, './public')));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));

app.use(
  session({
    secret: 'mamataalpanadarrapanta',
    resave: false,
    saveUninitialized: false,
  }),
);

app.use(index);
app.use(users);
app.use(cart);
app.use(products);
app.use(session({secret: 'secreto'}))
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

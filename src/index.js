const express = require('express');
const { geoTude, geoWeather} = require ('./until/geocoding');
require('./db/mongooseDB');
const hbs = require('hbs');
const path = require('path');
const app = express();

const port = process.env.PORT || 3000;

const pathViews = path.join(__dirname, '../template/views');
const pathHbs = path.join(__dirname,'../template/partials');
const pathName =path.join(__dirname,'../public');

hbs.registerPartials(pathHbs)
app.use(express.static(pathName))

app.set('view engine','hbs')
app.set('views',pathViews)
app.get('', (req,res) => {
  res.render('index', {

  })
})
app.get('/about', (req,res) => {
  res.render('about', {

  })
})
app.get('/signup', (req, res) => {
  res.render('signup', {
    
  })
});
app.get('/login', (req, res) => {
  res.render('login', {
    
  })
})
app.get('/weather', (req,res)=>{
  const address = req.query.address;
  if(!address) {
      return res.send({
        error: 'You need provide an address'
      });
  }
  else {
    geoTude (address, (error, {lattitude,longtitude, placename}) => {
      if (error) {
        return res.send({
          error: error
        });
      }
      else {
        geoWeather(lattitude,longtitude, placename, (error, result) => {
          if(error) {
            return res.send({
              error: error
            });
          }
          else {
            return res.send({
              result
            });
          }
        })
      }
    })
  }
})

app.listen(port, () => {
  console.log('app is run on port 3000')
});
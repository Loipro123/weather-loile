const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://binhdong123:' + process.env.MONG_ALAS_PW +'@cluster0-7ecwb.mongodb.net/test?retryWrites=true&w=majority',
{ useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true, useUnifiedTopology: true })
.then(()=> {
    console.log('connection successful!')
})
.catch(() => {
    console.log('connection fail!')
});


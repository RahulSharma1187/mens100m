const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/olymics", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('connection Succesfull');
}).catch((e) => {
    console.log('NO connection');
})

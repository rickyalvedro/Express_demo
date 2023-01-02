const path = require("path");

const express = require("express");

const bodyParser = require("body-parser");

const adminRoutes = require("./routes/admin.js");
const shopRoutes = require("./routes/shop.js");
const contactUs = require("./routes/contact-us.js");
const successRoutes = require("./routes/success.js");
const errorController = require("./controllers/error.js");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use("/contact-us", contactUs);
app.use(shopRoutes);

app.use(successRoutes);

app.use(errorController.get404);

app.listen(4000);

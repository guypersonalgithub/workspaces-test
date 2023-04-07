const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

console.log("???");

app.listen(process.env.PORT || 3001, () => {
  console.log(`Server is running on port 3001`);
});

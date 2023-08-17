const app = require("express")();
const server = require("http").Server(app);
const next = require("next");
const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });

const handle = nextApp.getRequestHandler();
require("dotenv").config();
const PORT = process.env.PORT || 3000;

nextApp.prepare().then(() => {
  app.use("/", require("./routes/login"));
  app.all("*", (req, res) => handle(req, res));

  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Server is running on port: ${PORT} `);
  });
});

const express = require("express");
const { MongoClient } = require("mongodb");
const bodyParser = require("body-parser");
const server = express();
const cors = require("cors");
const port = process.env.PORT || 8080;
const uri =
  "mongodb+srv://ssharma438500:OImQXAPi7rHNeCBe@cluster0.q7sln4w.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.use(cors())
server.use("/react", express.static("build"))


async function run() {
  try {
    await client.connect();

    // send a ping to confirm a sucessfull connection
    await client.db("admin").command({ ping: 1 });

    console.log("Connection Succesfully !");

    // Fetching Data from  the collection by the GET Request
    server.get("/users", async (req, res) => {
      let feedback = await client
        .db("coreflix")
        .collection("users")
        .find()
        .toArray();

      // send the json data as response
      res.json(feedback);
    });

    // POST
    server.post("/signup", async (req, res) => {
      // first find the body form the request
      console.log(req.body);
      let { email, password } = req.body;
      // Inserting the data in the document
      await client.db("coreflix").collection("users").insertOne({
        email: email,
        password: password,
      });
      res.json({message: "User created Successfully!"});
    });

    server.post("/delete", async (req, res) => {
      let { email } = req.body;

      // Delete the document from the database
      await client.db("coreflix").collection("users").deleteOne({
        email: email,
      });

      res.send("The Document is deleted !");
    });

    server.post("/login", async(req, res) => {
      let { email, password } = req.body

      let feedback = await client.db("coreflix").collection("users").findOne({ email: email })

      if(password === feedback.password) {
        res.json({ message: "Login Successfully" })
      } else {
        res.json({ message: "Unauthorized acess!" })
      }
    })

    server.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });
  } catch (e) {}
}

run();

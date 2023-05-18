const express = require("express")
const mongo = require("mongodb").MongoClient
const mongoose = require('mongoose');
const cors = require("cors");


const url = process.env.MONGO_URI;

const app = express()
app.use(express.json())
app.use(cors());

console.log("TEST")

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const tripSchema = new mongoose.Schema({
    name: String,
});

const Trip = mongoose.model("Trip", tripSchema);

app.get("/trips", (req, res) => {
    Trip.find({})
      .then((trips) => {
        res.status(200).json({ trips });
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json({ error: "An error occurred" });
      });
  });

  app.post("/trips", (req, res) => {
    const name = req.body.name;
  
    const newTrip = new Trip({ name });
  
    newTrip
      .save()
      .then((trip) => {
        res.status(200).json({ trip });
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json({ error: "An error occurred" });
      });
  });


// app.post("/trip", (req, res) => {
//     const name = req.body.name
//     trips.insertOne({ name: name }, (err, result) => {
//       if (err) {
//         console.error(err)
//         res.status(500).json({ err: err })
//         return
//       }
//       console.log(result)
//       res.status(200).json({ ok: true })
//     })
// })

// app.get("/trips", (req, res) => {
//     trips.find().toArray((err, items) => {
//       if (err) {
//         console.error(err)
//         res.status(500).json({ err: err })
//         return
//       }
//       res.status(200).json({ trips: items })
//     })
// })


app.listen(3000, () => console.log("Server ready"))


// let db, trips

// try {
//     console.log("is Executed hehehehehhehehhehehheheh")
//     mongo.connect(
//         url,
//         {
//           useNewUrlParser: true,
//           useUnifiedTopology: true,
//         },
//         (err, client) => {
//           if (err) {
//             console.error(err)
//             return
//           }
//           db = client.db("my_db")
//           trips = db.collection("trips")
//         }
//       ) 
// } catch (error) {
//     console.log(error)
// } finally {
//     console.log("DONE")
//     console.log(db)
//     console.log(trips)
// }





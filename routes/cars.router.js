const express = require("express")

const router = express.Router()

router.get("/", (req, res) => {
  res.json([
      {
        name:"Ferrari 812 GTS",
        model: 2024,
        consumption: 800,
        stalls: 2,
        doors: 3,
        bodywork: "Mediano",
      },{
        name:"BMW iX1 eléctrico",
        model: 2024,
        consumption: 313,
        stalls: 7,
        doors: 5,
        bodywork: "Mediano",
      },
      {
        name:"Suzuki SX4 S-Cross",
        model: 2023,
        consumption: 129,
        stalls: 5,
        doors: 5,
        bodywork: "Mediano",
      },
      {
        name:"Lamborghini Huracán Evo Spyder",
        model: 2024,
        consumption: 319,
        stalls: 2,
        doors: 3,
        bodywork: "cabrio",
      },
      {
        name:"Mercedes EQS SUV",
        model: 2024,
        consumption: 360,
        stalls: 6,
        doors: 5,
        bodywork: "Grande",
      }
    ]
  )
  })

  module.exports = router

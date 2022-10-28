const express = require("express")

const router = express.Router()

router.get("/", (req, res) => {
  res.json([
   {
    name:"Ferrari",
    year: 2025
  },
  {
    name:"bmw",
    year: 2025
  },
  {
    name:"zuzuki",
    year:2022
  },
  {
  name:"Lamborghini",
  year:2025
  },

  {
    name:"mercedes benz",
    year:2024
  }]

  )
})

module.exports = router

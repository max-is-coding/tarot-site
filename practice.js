const fs = require('fs')
const express = require('express')
const path = require('path')
const router = express.Router()

router.get('/', (req, res) => {
  readTarot((tarotData) => {
    let tarotDraw = []
    for (let i = 0; i < 5; i++) {
      const mjrMnr = Math.floor(Math.random() * 72)
      if (mjrMnr < 22) {
        let mjrId = Math.floor(Math.random() * 22)
        let card = tarotData.majorArcana.find((el) => el.id == mjrId)
        if (!tarotDraw.includes(card)) {
          tarotDraw.push(card)
        } else {
          i--
        }
      } else if (mjrMnr > 22) {
        const mnrSuit = Math.floor(Math.random() * 4)
        let mnrId = Math.floor(Math.random() * 14 + 1)
        let card
        switch (mnrSuit) {
          case 0:
            card = tarotData.minorArcana.cups.find((el) => el.id == mnrId)
            break
          case 1:
            card = tarotData.minorArcana.pentacles.find((el) => el.id == mnrId)
            break
          case 2:
            card = tarotData.minorArcana.swords.find((el) => el.id == mnrId)
            break
          case 3:
            card = tarotData.minorArcana.wands.find((el) => el.id == mnrId)
            break
        }
        if (!tarotDraw.includes(card)) {
          tarotDraw.push(card)
        } else {
          i--
        }
      }
    }
    res.render('practice', tarotDraw)
  })
})

function readTarot(callback) {
  fs.readFile('./data.json', 'utf-8', (err, data) => {
    const tarotData = JSON.parse(data)
    callback(tarotData)
  })
}

// function findSuit(callback) {
//   readTarot((tarotData) => {
//     const mnrSuit = Math.floor(Math.random() * 4)
//     let mnrId = 0
//     let card = {}
//     switch (mnrSuit) {
//       case 0:
//         mnrId = Math.floor(Math.random() * 14 + 1)
//         card = tarotData.minorArcana.cups.find((el) => el.id == mnrId)
//         break
//       case 1:
//         mnrId = Math.floor(Math.random() * 14 + 1)
//         card = tarotData.minorArcana.pentacles.find((el) => el.id == mnrId)
//         break
//       case 2:
//         mnrId = Math.floor(Math.random() * 14 + 1)
//         card = tarotData.minorArcana.swords.find((el) => el.id == mnrId)
//         break
//       case 3:
//         mnrId = Math.floor(Math.random() * 14 + 1)
//         card = tarotData.minorArcana.wands.find((el) => el.id == mnrId)
//         break
//       default:
//         break
//     }
//     callback(card)
//   })
// }

module.exports = router

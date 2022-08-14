const fs = require('fs')
const express = require('express')
const path = require('path')
const router = express.Router()

router.get('/swords/:id', (req, res) => {
  readTarot((tarotData) => {
    const card = tarotData.minorArcana.swords.find(
      (el) => el.id == req.params.id
    )
    res.render('card-view', card)
  })
})

router.get('/cups/:id', (req, res) => {
  readTarot((tarotData) => {
    const card = tarotData.minorArcana.cups.find((el) => el.id == req.params.id)
    res.render('card-view', card)
  })
})

router.get('/wands/:id', (req, res) => {
  readTarot((tarotData) => {
    const card = tarotData.minorArcana.wands.find(
      (el) => el.id == req.params.id
    )
    res.render('card-view', card)
  })
})

router.get('/pentacles/:id', (req, res) => {
  readTarot((tarotData) => {
    const card = tarotData.minorArcana.pentacles.find(
      (el) => el.id == req.params.id
    )
    res.render('card-view', card)
  })
})

router.get('/swords', (req, res) => {
  readTarot((tarotData) => {
    const suit = tarotData.minorArcana.swords
    res.render('suit-view', suit)
  })
})

router.get('/cups', (req, res) => {
  readTarot((tarotData) => {
    const suit = tarotData.minorArcana.cups
    res.render('suit-view', suit)
  })
})

router.get('/wands', (req, res) => {
  readTarot((tarotData) => {
    const suit = tarotData.minorArcana.wands
    res.render('suit-view', suit)
  })
})

router.get('/pentacles', (req, res) => {
  readTarot((tarotData) => {
    const suit = tarotData.minorArcana.pentacles
    res.render('suit-view', suit)
  })
})

// router.post('/add', (req, res) => {
//   // add name, breed, owner and img file to puppies in json
//   readPuppies((puppyData) => {
//     const newPup = []
//     puppyData.puppies.push(newPup)
//     console.log(puppyData.puppies)
//   })
//   res.render('home')
// })

// router.get('/:id/edit', (req, res) => {
//   readPuppies((puppyData) => {
//     const puppy = puppyData.puppies.find((el) => el.id == req.params.id)
//     res.render('edit', puppy)
//   })
// })

// router.post('/:id/edit', (req, res) => {
//   // get and change name, breed, owner
//   readPuppies((puppyData) => {
//     const puppy = puppyData.puppies.find((el) => el.id == req.params.id)
//     puppy.name = req.body.name
//     puppy.breed = req.body.breed
//     puppy.owner = req.body.owner
//     const stringPup = JSON.stringify(puppyData, null, 2)
//     const filepath = path.join(__dirname, 'data.json')
//     fs.writeFile(filepath, stringPup, 'utf-8', (err) => {
//       if (err) {
//         console.err('Cannot write to file')
//       }
//     })
//     res.redirect('/puppies/' + req.params.id)
//   })
// })

function readTarot(callback) {
  fs.readFile('./data.json', 'utf-8', (err, data) => {
    const tarotData = JSON.parse(data)
    callback(tarotData)
  })
}

module.exports = router

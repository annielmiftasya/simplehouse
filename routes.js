const express = require("express")
const Pizza = require("./models/Pizza") // new
const Noodle = require("./models/Noodle")
const Picture = require("./models/Picture")

const router = express.Router()
var path = require('path');

// Router Untuk SPA page ====
router.get("/", async (req, res) => {

    res.sendFile(path.join(__dirname + '/view/index.html'));


})

router.get("/admin", async (req, res) => {

    res.sendFile(path.join(__dirname + '/view/admin_dashboard.html'));


})

// ======= Router Untuk Pizza =======
// Get all posts
router.get("/ambil", async (req, res) => {
    const ambil = await Pizza.find()
    res.send(ambil)
})

// posting data
router.post("/ambil", async (req, res) => {
    const ambil = new Pizza({
    title: req.body.title,
    content: req.body.content,
    price: req.body.price,
    gambar: req.body.gambar,
    })
    
    await ambil.save()
    res.send(ambil)
})

// update salah satu data di database
router.patch("/ambil/:id", async (req, res) => {
    try {
    const ambil = await Pizza.findOne({ _id: req.params.id })
    if (req.body.title) {
    ambil.title = req.body.title
    }
    if (req.body.content) {
    ambil.content = req.body.content
    }
    if (req.body.price) {
        ambil.price = req.body.price
        }
    if (req.body.gambar) {
        ambil.gambar = req.body.gambar
        }
    await ambil.save()
    res.send(ambil) } catch {
    res.status(404)
    res.send({ error: "Post doesn't exist!" }) }
    })

//Delete data
router.delete("/ambil/:id", async (req, res) => {
    try {
    await Pizza.deleteOne({ _id: req.params.id })
    res.status(204).send() } catch {
    res.status(404)
    res.send({ error: "Post doesn't exist!" }) }
    })

//ambil data spesifik 
router.get("/ambil/:id", async (req, res) => { 
    try { 
        const ambil = await Pizza.findOne({ _id: req.params.id })
        res.send(ambil) } catch { 
        res.status(404)
         res.send({ error: "Post doesn't exist!" })
         } 
        })


        
// ======= Router Untuk Noodle =======
// Get all posts
router.get("/ambilah", async (req, res) => {
    const ambilah = await Noodle.find()
    res.send(ambilah)
})

// posting data
router.post("/ambilah", async (req, res) => {
    const ambilah = new Noodle({
    judul: req.body.judul,
    isi: req.body.isi,
    harga: req.body.harga,
    foto: req.body.foto,
    })
    
    await ambilah.save()
    res.send(ambilah)
})

// update salah satu data di database
router.patch("/ambilah/:id", async (req, res) => {
    try {
    const ambilah = await Noodle.findOne({ _id: req.params.id })
    if (req.body.judul) {
    ambilah.judul= req.body.judul
    }
    if (req.body.isi) {
    ambilah.isi = req.body.isi
    }
    if (req.body.harga) {
        ambilah.harga = req.body.harga
        }
    if (req.body.foto) {
        ambilah.foto = req.body.foto
        }
    await ambilah.save()
    res.send(ambilah) } catch {
    res.status(404)
    res.send({ error: "Post doesn't exist!" }) }
    })

//Delete data
router.delete("/ambilah/:id", async (req, res) => {
    try {
    await Noodle.deleteOne({ _id: req.params.id })
    res.status(204).send() } catch {
    res.status(404)
    res.send({ error: "Post doesn't exist!" }) }
    })

//ambil data spesifik 
router.get("/ambilah/:id", async (req, res) => { 
    try { 
        const ambilah = await Noodle.findOne({ _id: req.params.id })
        res.send(ambilah) } catch { 
        res.status(404)
         res.send({ error: "Post doesn't exist!" })
         } 
        })


// ======= Router Untuk Picture =======
// Get all posts
router.get("/ambilp", async (req, res) => {
    const ambilp = await Picture.find()
    res.send(ambilp)
})

// posting data
router.post("/ambilp", async (req, res) => {
    const ambilp = new Picture({
    pict: req.body.pict,
    })
    
    await ambilp.save()
    res.send(ambilp)
})

// update salah satu data di database
router.patch("/ambilp/:id", async (req, res) => {
    try {
    const ambilp = await Picture.findOne({ _id: req.params.id })
    if (req.body.pict) {
    ambilp.pict = req.body.pict
    }
    await ambilp.save()
    res.send(ambilp) } catch {
    res.status(404)
    res.send({ error: "Post doesn't exist!" }) }
    })

//Delete data
router.delete("/ambilp/:id", async (req, res) => {
    try {
    await Picture.deleteOne({ _id: req.params.id })
    res.status(204).send() } catch {
    res.status(404)
    res.send({ error: "Post doesn't exist!" }) }
    })

//ambil data spesifik 
router.get("/ambilp/:id", async (req, res) => { 
    try { 
        const ambilp = await Picture.findOne({ _id: req.params.id })
        res.send(ambilp) } catch { 
        res.status(404)
         res.send({ error: "Post doesn't exist!" })
         } 
        })

module.exports = router
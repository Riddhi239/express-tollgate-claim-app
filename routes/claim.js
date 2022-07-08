const express = require('express')
const router = express.Router()
const Claim = require('../models/claim')


router.get('/claims', async(req,res) => {
    try{
           const aliens = await Claim.find()
           res.json(aliens)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.get('/claims/:id', async(req,res) => {
    try{
           const alien = await Claim.findById(req.params.id)
           res.json(alien)
    }catch(err){
        res.send('Error ' + err)
    }
})


router.post('/claims', async(req,res) => {
    const alien = new Claim({
        name: req.body.name,
        hospital: req.body.hospital,
        policy: req.body.policy
    })

    try{
        const a1 =  await alien.save() 
        res.json(a1)
    }catch(err){
        res.send(err)
    }
})

router.put('/claims/:id',async(req,res)=> {
    try{
        const alien = await Claim.findById(req.params.id) 
        alien.name = req.body.name,
        alien.hospital = req.body.hospital,
        alien.policy = req.body.policy
        const a1 = await alien.save()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }

})
router.delete('/claims/:id',async(req,res)=> {
    try{
        const alien = await Claim.findByIdAndDelete(req.params.id)
        // alien.sub = req.body.sub,
        // alien.name = req.body.name,
        // alien.tech = req.body.tech
        const a1 = await alien.save()
        res.json(a1)   
    }catch(err){
        res.send(err)
    }

})
router.get('/claims/policy/:id',async(req,res)=> {
    try{
        
        const alien = await Claim.find({policy_id : req.params.id})
        res.json(alien)
        //res.send('hi')
    }catch(err){
        res.send(err)
    }

})
router.get('/claims/hospital/:id',async(req,res)=> {
    try{
        
        const alien = await Claim.find({hospital_id : req.params.id})
        res.json(alien)
        //res.send('hi')
    }catch(err){
        res.send(err)
    }

})

module.exports = router
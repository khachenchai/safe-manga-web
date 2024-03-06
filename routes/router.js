const express = require('express');
const router = express.Router()
const fs = require('fs')
const data = require('../data')

router.get('/', (req, res) => {
    res.render('index', {
        category: '',
        data,
        title: 'Home'
    })
})

router.get('/:id/detail', (req, res) => {
    const filteredData = data.filter(manga => manga.id == req.params.id)
    res.render('detail', {
        category: filteredData[0]['category'],
        data: filteredData[0],
        title: filteredData[0]['title'] + ' - Detail',
    })
})

router.get('/category', (req, res) => {
    const category = req.query.category;
    const modStr = category[0].toUpperCase() + category.slice(1);
    const filteredData = data.filter(manga => manga.category === modStr)
    res.render('category', {
        category: modStr,
        data: filteredData,
        title: modStr + ' - Category'
    })
})

module.exports = router
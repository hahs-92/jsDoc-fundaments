/**
 * @module apiRest
 */


const express = require('express')

const app = express()


/**
 * Index route
 * @name Index
 * @path {GET} /
 */
app.get('/', (req, res) => {
    res.send("hi from get")
})


/**
 * @name Post
 * @path {POST} /
 */
app.post('/', (req, res) => {
    res.send('post')
})

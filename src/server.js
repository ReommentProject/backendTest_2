// @ts-check
const express = require('express')

const app = express()
const db = require('./models/seqDB')
const testRouter = require('./routes/testRouters')
const userRouter = require('./routes/userRouters')
const postRouter = require('./routes/postRouters')
const commentRouter = require('./routes/commentRouter')
const friendRouter = require('./routes/friendRouter')

db.sequelize.sync({
    force: true,
})
app.use(express.json())

app.get('/', (req, res) => {
    res.send('test is working!')
})
app.use('/test', testRouter)
app.use('/user', userRouter)
app.use('/post', postRouter)
app.use('/comment', commentRouter)
app.use('/friend', friendRouter)

const PORT = 9001

app.listen(PORT, () => {
    console.log(`The Express server is listening at port: ${PORT}`)
})


import express from 'express'
import githubRoutes from './src/routes/githubRoutes.js'

const app = express()

app.use(express.json({
    verify: (req, res, buf) => {
        req.rawBody = buf
    }
}));

app.use('/api/github', githubRoutes)

export default app;
import express from "express"
import verifySignature from "../middlewares/verifySignature.js"

const router = express.Router();

router.post('/webhook', verifySignature, (req, res) => {
    const event = req.headers['x-github-event']

    if (event === 'pull_request') {
        const action = req.body.action;
        const prNumber = req.body.pull_request.number;

        if (action === 'opened' || action === 'synchronize') {
            console.log(`Hello, mergemate! A pull request (#${prNumber}) was ${action}`)
            console.log('Github is workin with mergemate')
        }
    }
    res.status(200).send('Webhook received successfully!')
})

export default router;
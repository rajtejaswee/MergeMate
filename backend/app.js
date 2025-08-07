import express from 'express';
// We are not using the separate router for now.
// import githubRoutes from './routes/githubRoutes.js';
import verifySignature from './src/middlewares/verifySignature.js';

const app = express();

app.get('/test', (req, res) => {
    res.send('Server is running!');
});

app.use(express.json({
    verify: (req, res, buf) => {
        req.rawBody = buf;
    }
}));
//This is extra comment.
// This is the direct route handler. It replaces the app.use() line.
app.post('/api/github/webhook', verifySignature, (req, res) => {
    const event = req.headers['x-github-event'];
    console.log(`Received GitHub event: ${event}`);

    // If you see this message, the route is working!
    res.status(200).send('Webhook received successfully!');
});

export default app;
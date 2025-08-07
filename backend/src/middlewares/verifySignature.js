import crypto from "crypto"

const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;

function verifySignature(req,res,next) {
    const signature = req.headers['x-hub-signature-256']
    const payload = req.rawBody.toString()

    if (!signature) {
        console.error('No signature provided')
        return res.status(401).message('No signature is provided')
    }

    const hmac = crypto.createHmac('sha256', WEBHOOK_SECRET)
    const digest = 'sha256=' + hmac.update(payload).digest('hex')

    if (signature !== digest) {
        console.log("Signature doesn't match")
        return res.status(401).message("Signature doesn't match");
    }

    next();
}

export default verifySignature;
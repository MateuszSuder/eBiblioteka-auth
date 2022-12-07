import jwt from 'jsonwebtoken';

export default (req, res) => {
    const { token } = req.cookies;

    try {
        const decoded = jwt.verify(token, process.env.AUTH_SECRET);
        res.status(200).send({ ok: true, payload: decoded });
    } catch (e) {
        res.status(401).send({ ok: false, errors: [e.message] })
    }
}
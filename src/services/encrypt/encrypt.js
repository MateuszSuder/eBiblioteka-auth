import bcrypt from "bcrypt";

export default async (req, res) => {
    const { value } = req.body;

    try {
        const hashed = await bcrypt.hash(value, 10);
        res.status(200).send({ encrypted: hashed });
    } catch (e) {
        res.status(401).send({ ok: false, errors: [e.message] })
    }
}
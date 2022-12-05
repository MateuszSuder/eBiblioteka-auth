export default (req, res) => {
    // const { email, password, name, lastName, dateOfBirth,
    //     address: { city, street, postal, houseNumber, apartmentNumber }
    // } = req.body;

    console.log(req.body);

    res.send("register");
}
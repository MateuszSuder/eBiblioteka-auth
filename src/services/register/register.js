export default async (req, res) => {
    // const { email, password, name, lastName, dateOfBirth,
    //     address: { city, street, postal, houseNumber, apartmentNumber }
    // } = req.body;

    console.log("register", req.body);

    try {
        const response = await fetch("http://user-service:4001/health", {
            method: "GET"
        })

        const body = await response.text();
        console.log(body);
    } catch (e) {
        console.log(1, e);
        console.log(2, e.cause);
        console.log(3, e.headers);
    }


    res.send("register");
}
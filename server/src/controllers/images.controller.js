export const file = async (req, res) => {
    console.log("Image uploaded -->", req.file)
    res.send({ data : "image uploaded"})
}
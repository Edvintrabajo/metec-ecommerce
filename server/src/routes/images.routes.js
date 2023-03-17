import { Router } from "express";
import { file } from "../controllers/images.controller.js";
import multer  from 'multer';
import storage from "../storage.js";

const router = Router();

const upload = multer({ storage })

router.get('/upload', (req, res) => {
    res.send({ message: 'Hello on upload path!'})
})

router.post('/upload', upload.single('file'), file)

export default router;

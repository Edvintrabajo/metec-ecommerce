import multer  from 'multer';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './src/uploads')
    },
    filename: (req, file, cb) => {
      const [name,ext] = file.originalname.split('.');
      cb(null, `${name}-${Date.now()}.${ext}`)
    }
});

export default storage;
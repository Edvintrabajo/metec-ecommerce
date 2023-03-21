import multer  from 'multer';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './src/uploads')
    },
    filename: (req, file, cb) => {
      const [name,ext] = file.originalname.split('.');
      let finalName = name;
      
      if (name.length > 10) {
        finalName = name.slice(0, 10);
      }
      cb(null, `${finalName}-${Date.now()}.${ext}`)
    }
});

export default storage;
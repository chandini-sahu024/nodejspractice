import express from 'express';
import dbConfig from './config/db';
import middlewareConfig from './config/middleware';
import Cors from 'cors';


const app = express();
app.use(Cors())
dbConfig();

middlewareConfig(app);

const PORT = process.env.PORT || 3001

app.listen(PORT, err => {
    if(err) {
        console.error(err);
    } else {
        console.log(`App listen to port: ${PORT}`);
    }
});

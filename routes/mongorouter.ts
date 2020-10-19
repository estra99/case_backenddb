import * as express from 'express';
import { MongoController } from '../Controllers/mongoController';

const app = express();

app.put('/rellenar', (req, res,next) => {
    MongoController.getInstance().fillArticles();
    res.json({ message: "Ok"});
});

export { app as MongoRouter };
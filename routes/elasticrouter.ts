import * as express from 'express';

const app = express();

app.put('/getHashtags', (req, res,next) => {
    // HateController.getInstance().fillHatePosts();
    res.json({ message: "Ok"});
});

export { app as ElasticRouter };
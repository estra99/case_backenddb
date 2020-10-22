import * as mongoose from 'mongoose';
import { Articles, Logger } from '../common'
import faker = require('faker');
import dotenv = require('dotenv');
const allhashtags =  ["#malavibra", "#nohate", "#everyday", "#oneday", "#popular", "#otrohashtag", "#region", "#mapa", "#rojo", "#blackhole"];

export class MongoController {
    private static instance: MongoController;
    private log: Logger;
    private db : any;

    private constructor()
    {
        dotenv.config();
        this.log = new Logger();
        try
        {
            mongoose.connect('mongodb://localhost:27017/hashtags',
            // mongoose.connect(process.env.MONGO_API,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                socketTimeoutMS: 2000
            });
            this.db = mongoose.connection;

            this.db.on('error', () => {
                this.log.error("No se pudo conectar a mongo")
            });

            this.db.once('open', ()=> {
                this.log.info("Conectado a mongo")
            });
        } catch (e)
        {
            this.log.error(e);
        }
    }

    public fillArticles()
    {
        try
        {
            let quantity = 100;
            while (quantity>0)
            {
                const aproxHashtags = Math.trunc(Math.random()*4 + 1) / allhashtags.length;
                // const hashtags = []

                const newPost = new Articles({
                    titulo: faker.lorem.words(7),
                    subtitulo: faker.lorem.words(3),
                    texto: faker.lorem.paragraphs(2),
                    imagen: faker.image.nature(),
                    hashtags: allhashtags.filter(
                        (element, index, array) => {
                            if (Math.random()<=aproxHashtags) {
                                return true;
                            }
                        }
                    )
                });

                newPost.save( (err: any, post: any) => {
                    if (err)
                    {
                        this.log.error(err);
                    }
                });

                quantity--;
            };
        }
        catch(e)
        {
            this.log.error(e);
        }
    }

    public static getInstance() : MongoController
    {
        if (!this.instance)
        {
            this.instance = new MongoController();
        }
        return this.instance;
    }
}
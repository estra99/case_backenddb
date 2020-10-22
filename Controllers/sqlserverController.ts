import {Connection, Request} from "tedious";
import {Logger} from '../common';
import dotenv = require('dotenv');

export class SQLServerController{
    private static instance: SQLServerController
    private log: Logger
    private db : any;

    private constructor()
    {
        this.log = new Logger();
        try
        {
           this.db = new Connection( {
                server: 'localhost',
                authentication: {
                    type: 'default',
                    options: {
                        userName: 'SA',
                        password: '<bornToBeWild2020@1>',
                    },
                },
                options: {
                    database: 'ArticulosDB',
                    encrypt: false,
                }
           });

           this.db.on('connect', (err:any) => {

                if (err){
                    this.log.error("Error en conexion a SQL Server")
                }else{

                    this.log.info("Connectado a SQL Server")
                }
           });

        } catch (e)
        {
            this.log.error(e);
        }

    }

    public getArticlesByHashtags(hashtagsArr:string[]){

        const hashtagsFormatted = hashtagsArr.join("','");
        this.log.info(hashtagsFormatted)

        const request = new Request(`
        SELECT A.ArticuloId, A.Titulo, A.Subtitulo, A.Autor, A.Content, H.Hashtag
        FROM Articulos AS A
        INNER JOIN HashtagXArt AS HXA on A.ArticuloId = HXA.ArticuloId
        INNER JOIN Hashtags AS H on H.HashtagId = HXA.HashtagId
        WHERE H.Hashtag IN ('${hashtagsFormatted}') FOR JSON PATH`, (err, rowCount) => {
            if (err) {
                this.log.error("Error in sql query "+err);
            } else {
                this.log.info(rowCount + ' rows');
            }
        });

    
        const JSONResponse: any[] = []
        request.on('row', (columns) =>{
            const row : any = {}
            columns.forEach((column) =>{
                row[column.metadata.colName] = column.value
            });
            JSONResponse.push(row)
        });
        this.db.execSql(request);
        return (request)

        /*
        this.db.execSql(new Request(`
        SELECT A.ArticuloId, A.Titulo, A.Autor, A.Content, H.Hashtag, MXA.Link
        FROM Articulos AS A
        INNER JOIN HashtagXArt AS HXA on A.ArticuloId = HXA.ArticuloId
        INNER JOIN Hashtags AS H on H.HashtagId = HXA.HashtagId
        INNER JOIN MediaXArt AS MXA on A.ArticuloId = MXA.ArticuloId
        WHERE H.Hashtag IN ${test}`, (err, _, rows) => 
            res.json({ articulos: rows, err })));
        });

        const request = new Request (`
        SELECT A.ArticuloId, A.Titulo, A.Autor, A.Content, H.Hashtag, MXA.Link
        FROM Articulos AS A
        INNER JOIN HashtagXArt AS HXA on A.ArticuloId = HXA.ArticuloId
        INNER JOIN Hashtags AS H on H.HashtagId = HXA.HashtagId
        INNER JOIN MediaXArt AS MXA on A.ArticuloId = MXA.ArticuloId
        WHERE H.Hashtag IN ${test} FOR JSON PATH`,(err) => {
            if(err){
                this.log.error('Error en el SP '+ err)
                return;
            }
        })

        return request;
        */
    }


    public static getInstance() : SQLServerController
    {
        if (!this.instance)
        {
            this.instance = new SQLServerController();
        }
        return this.instance;
    }
}

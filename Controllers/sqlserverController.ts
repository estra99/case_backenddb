import {Connection} from "tedious";
import {Logger} from '../common';

export class SQLServerController{
    private static instance: SQLServerController
    private log: Logger
    private db : any;

    private constructor()
    {
        this.log = new Logger();
        try
        {
           this.db = new Connection({
                server: 'localhost',
                authentication: {
                    type: 'default',
                    options: {
                        userName: 'SA',
                        password: '<bornToBeWild2020@1>',
                    },
                },
                options: {
                    database: 'hashtags',
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

    public static getInstance() : SQLServerController
    {
        if (!this.instance)
        {
            this.instance = new SQLServerController();
        }
        return this.instance;
    }
}

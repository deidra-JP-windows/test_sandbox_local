import { MongoClient, ServerApiVersion } from 'mongodb'
import { customInfo, customError } from "../logger/customLogger";

export class Mongodb {

  constructor(
    public client: MongoClient = new MongoClient(process.env.ENV_DB_MONGODB_URI ? process.env.ENV_DB_MONGODB_URI : '',  {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      }  
    })
  ) {}

  async connect(): Promise<void> {
    
    try {
      await this.client.connect();
      await this.client.db("admin").command({ ping: 1 });
    } catch (e) {
      customError(`${e}`);
      throw new Error(JSON.stringify(e));
    } finally {
      customInfo('カスタムロガーは改修予定');
    }
  };
}


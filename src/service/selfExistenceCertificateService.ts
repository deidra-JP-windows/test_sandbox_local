import { Mongodb } from "../connection/databaseForMongodb";
import { customInfo, customError } from "../logger/customLogger";
import { SelfExistenceCertificate } from "../schema/selfExistenceCertificate";
import { v4 as uuidv4 } from 'uuid';

export class SelfExistenceCertificateService {

  constructor(
    private dbInstance: Mongodb = new Mongodb()
  ) {}

  async insertSelfExistenceCertificate(): Promise<void> {
    try {
      customInfo('カスタムロガーは改修予定');
      await this.dbInstance.connect()
      const verifiableCredentials = this.dbInstance.client.db('testLocal');
      const insertCollection = verifiableCredentials.collection('verifiableCredentials');
      const doc: SelfExistenceCertificate = { uuid: uuidv4(), name: "Neapolitan pizza" };
      const res = await insertCollection.insertOne(doc);
      customInfo(`${res.insertedId}`);
    } catch (e) {
      customError(`${e}`);
      throw new Error(`${e}`);
    } finally {
      this.dbInstance.client.close();
    }
  }
}
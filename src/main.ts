import { SelfExistenceCertificateService } from "./service/selfExistenceCertificateService";

const selfExistenceCertificateService = new SelfExistenceCertificateService();

async function main(): Promise<void> {
  if (process.env.ENV === 'local') {
    selfExistenceCertificateService.insertSelfExistenceCertificate();
  }
};

main();
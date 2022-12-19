import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['superb-orca-5749-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'c3VwZXJiLW9yY2EtNTc0OSR-cfd_6GdirSWVt5_0tCG6j-gwlJuC9WxI2dN7bW0',
          password:
            'AolN_2scdeXwmuXDv4ZDJg5XdaVybO_cdAYVI0V5W8xzBX-mr9mkDbbXW_apHGKjh47ecw==',
        },
        ssl: true,
      },
    });
  }

  async onModuleDestroy() {
    await this.close();
  }
}

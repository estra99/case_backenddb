import {Logger} from '../common'
import {Client} from '@elastic/elasticsearch'
import dotenv = require('dotenv');

export class ElasticController{
    private static instance: ElasticController;
    private log: Logger;
    private elasticClient : any;

    private constructor()
    {
        dotenv.config();
        this.log = new Logger();
        // this.elasticClient = new Client({node: 'http://localhost:9200/'});
        this.elasticClient = new Client({node: process.env.ELASTIC_API});
    }

    public async get_hashtags(first: number, second: number) : Promise<any> {

        const bucketsDetails = await this.elasticClient.search({
            index : "videos",
            body  : {
                size: 0,
                aggs: {
                    hashtags_count: {
                        terms: {
                            field: "description",
                            size: 10000
                        }
                    },
                    duplicate_bucketcount: {
                        stats_bucket: {
                            buckets_path: "hashtags_count._count"
                        }
                    }
                }
            }
        });

        const maxMin = bucketsDetails.body.aggregations.duplicate_bucketcount;

        const range = Math.round((maxMin.max - maxMin.min) / 10);

        const hashtags = await this.elasticClient.search({
            index : "videos",
            body: {
              size : 0,
              aggs: {
                hashtags: {
                  terms: {
                    field: "description",
                    size : 10000
                  },
                  aggs:{
                    final_filter: {
                      bucket_selector: {
                        buckets_path: {
                          total: "_count"
                        },
                        script: `params.total%${range} >= ${first} && params.total%${range} <= ${second}`
                        }
                      }
                    }
                 }
              }
            }
        });
        return hashtags.body.aggregations.hashtags_count.buckets
    };

    public async matchAll() : Promise<any> {
      const all = await this.elasticClient.search({
        index : "videos",
            body  : {
              query : {match_all: {}}
            }
      })
      return all;
    }

    public static getInstance() : ElasticController
    {
        if (!this.instance)
        {
            this.instance = new ElasticController();
        }
        return this.instance;
    }
}


import { SearchParams } from './SearchParams';

export interface PluginOptions {
  /**
   * For more details refer:
   * https://webservices.amazon.com/paapi5/documentation/register-for-pa-api.html
   */
  accessKey: string;
  /**
   * For more details refer:
   * https://webservices.amazon.com/paapi5/documentation/register-for-pa-api.html
   */
  secretKey: string;
  /**
   * Specify Host to which you want to send the request to.
   * For more details refer:
   * https://webservices.amazon.com/paapi5/documentation/common-request-parameters.html#host-and-region
   */
  host: string;
  /**
   * Specify Region to which you want to send the request to.
   * For more details refer:
   * https://webservices.amazon.com/paapi5/documentation/common-request-parameters.html#host-and-region
   */
  region: string;
  queries: SearchParams[];
}

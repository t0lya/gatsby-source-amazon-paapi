import paapi from 'paapi5-nodejs-sdk';
import pThrottle from 'p-throttle';

import { PluginOptions } from '../interfaces/PluginOptions';
import { SearchResponse } from '../interfaces/SearchResponse';

const setClient = (options: PluginOptions) => {
  const client = paapi.ApiClient.instance;

  client.accessKey = options.accessKey;
  client.secretKey = options.secretKey;
  client.host = options.host;
  client.region = options.region;

  return client;
};

export const getSearchItems = async (pluginOptions: PluginOptions) => {
  /**
   * Amazon PA API has rate limit of 1 request per second
   * See https://webservices.amazon.com/paapi5/documentation/troubleshooting/api-rates.html#api-rates
   * */
  const throttled = pThrottle((request) => request, 1, 1001);
  setClient(pluginOptions);
  const api = new paapi.DefaultApi();

  const searchRequests = pluginOptions.queries?.map((query) => {
    return throttled(
      api.searchItems({
        ...new paapi.SearchItemsRequest(),
        ...query,
      }),
    );
  });

  try {
    const responses = await Promise.all(searchRequests);
    return responses.flatMap(
      (response) =>
        (paapi.SearchItemsResponse.constructFromObject(
          response,
        ) as SearchResponse).SearchResult.Items,
    );
  } catch (error) {
    throw Error(error?.response?.text);
  }
};

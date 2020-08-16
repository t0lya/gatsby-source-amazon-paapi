import { SourceNodesArgs } from 'gatsby';

import { PluginOptions } from './interfaces/PluginOptions';
import { getSearchItems } from './utils/paapi';

exports.sourceNodes = async (
  { actions, createNodeId, createContentDigest }: SourceNodesArgs,
  pluginOptions: PluginOptions,
) => {
  const { createNode } = actions;

  const paapiItems = await getSearchItems(pluginOptions);

  paapiItems.forEach((item, index) => {
    const nodeContent = JSON.stringify(item);
    const nodeMeta = {
      id: createNodeId(index.toString()),
      internal: {
        type: `PaapiSearchItem`,
        content: nodeContent,
        contentDigest: createContentDigest(item),
      },
    };
    const node = { ...item, ...nodeMeta };
    createNode(node);
  });
};

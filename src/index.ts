import { registerServerTool} from '@superexpert-ai/framework';
import { tavily } from '@tavily/core';

const tavilyClient = tavily({ apiKey: "tvly-YOUR_API_KEY" });


registerServerTool({
  name: 'websearch',
  description: 'A tool for SuperExpert AI',
  async function() {
    const response = await tavilyClient.search("Who is Bertrand Russell?", { language: "en" });
    console.log(response);


    return `hello from NPM package websearch-tool agent ${this.agent.name}`;
  }
});
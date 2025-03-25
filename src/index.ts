import { registerServerTool} from '@superexpert-ai/framework';
import { tavily } from '@tavily/core';

const tavilyClient = tavily({ apiKey: process.env.TAVILY_API_KEY });


registerServerTool({
  name: 'websearch',
  description: 'A tool for SuperExpert AI',
  async function() {

    const results = await tavilyClient.search("Who is Bertrand Russell?", { language: "en" });
    const textResult = results.results.map(result => `\nTitle: ${result.title}\nContent: ${result.content}\n`).join('\n');
    console.log(textResult);
    return textResult;
  }
});
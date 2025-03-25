import { registerServerTool } from "@superexpert-ai/framework";
import { tavily } from "@tavily/core";

const tavilyClient = tavily({ apiKey: process.env.TAVILY_API_KEY });

registerServerTool({
  name: "websearch",
  description: "Perform a web search,",
  parameters: [
    {
      name: "query",
      type: "string",
      description: "The search query to perform.",
    },
  ],
  async function(query:string) {
    const results = await tavilyClient.search(query, {
      language: "en",
    });
    const textResult = results.results
      .map((result) => `\nTitle: ${result.title}\nContent: ${result.content}\n`)
      .join("\n");
    console.log(textResult);
    return textResult;
  },
});

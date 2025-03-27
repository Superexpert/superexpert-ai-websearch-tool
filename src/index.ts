import { registerServerDataTool, registerServerTool } from "@superexpert-ai/framework";
import { tavily } from "@tavily/core";

const apiKey = process.env.TAVILY_API_KEY
if (!apiKey) {
  throw new Error(
      'Tavily API key not found. Please set the Tavily_API_KEY environment variable.'
  );
}
const tavilyClient = tavily({ apiKey: apiKey });

registerServerTool({
  name: "webSearch",
  description: "Perform a web search,",
  parameters: [
    {
      name: "query",
      type: "string",
      description: "The search query to perform.",
    },
  ],
  async function(query:string) {
    const results = await getWebSearchResults(query);
    return results;
  },
});


registerServerDataTool({
  name: "webSearchData",
  description: "Perform a web search for each user message.",
  async function() {
    // Don't perform search if there is only one message
    if (this.messages.length < 2) return;

    // Get the last message from the user
    const lastUserMessage = this.messages[this.messages.length - 1];
    if (lastUserMessage.role !== "user") return;

    // Perform a web search using the last user message as the query
    const results = await getWebSearchResults(lastUserMessage.content);
    return results;
  }
});

async function getWebSearchResults(query: string) {
  const results = await tavilyClient.search(query, {
    language: "en",
  });
  const textResult = results.results
    .map((result) => `\nTitle: ${result.title}\nURL: ${result.url}\nContent: ${result.content}\n`)
    .join("\n");
  console.log(textResult);
  return textResult;
}

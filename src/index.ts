import { registerServerTool} from '@superexpert-ai/framework';


registerServerTool({
  name: 'websearch',
  description: 'A tool for SuperExpert AI',
  function() {
    return `hello from NPM package websearch-tool agent ${this.agent.name}`;
  }
});
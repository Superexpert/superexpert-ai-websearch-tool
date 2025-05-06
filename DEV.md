# Publish Recipe

1.	Code & commit your changes.
2.	Run one of the release scripts:

```
npm run release:patch        # OR release:minor / release:major
```

This script:
* cleans, builds (prisma generate + tsc),
* bumps the version,
* publishes to the npm registry.


3.	Push the commit + git tag:

```
git push origin main --tags
```


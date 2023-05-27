install:
	npm ci

brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run

lint:
	npx eslint .

fix:
	npx eslint . --fix

brain-even:
	node bin/brain-games.js

brain-gcd:
	node bin/brain-gcd.js

brain-progression:
	node bin/brain-progression.js
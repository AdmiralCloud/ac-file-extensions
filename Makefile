lint-fix:
	./node_modules/.bin/eslint "sources/**" --fix

commit:
	@node ./node_modules/ac-semantic-release/lib/commit.js

release:
	@node ./node_modules/ac-semantic-release/lib/release.js

.PHONY: check

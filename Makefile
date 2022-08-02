bin = ./node_modules/.bin
tsc = $(bin)/tsc
esbuild = $(bin)/esbuild
prettier = $(bin)/prettier

typecheck:
	@$(tsc) --noEmit

build:
	@$(esbuild) --format=cjs build.ts | node

storybook:
	@env NODE_OPTIONS=--openssl-legacy-provider $(bin)/start-storybook -p 6006

storybook.build:
	@$(bin)/build-storybook


.PHONY: format
format:
	@echo "Formatting files..."
	@$(prettier) . --write

.PHONY: formatting
formatting:
	@echo "Checking format..."
	@$(prettier) . --check

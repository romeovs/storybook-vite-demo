bin = ./node_modules/.bin
tsc = $(bin)/tsc
esbuild = $(bin)/esbuild

typecheck:
	@$(tsc) --noEmit

build:
	@$(esbuild) --format=cjs build.ts | node

storybook:
	@env NODE_OPTIONS=--openssl-legacy-provider $(bin)/start-storybook -p 6006

storybook.build:
	@$(bin)/build-storybook

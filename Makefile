bin = ./node_modules/.bin
tsc = $(bin)/tsc
esbuild = $(bin)/esbuild

typecheck:
	@$(tsc) --noEmit

build:
	@$(esbuild) --format=cjs build.ts | node

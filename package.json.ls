name: 'AliveScript'
version: '1.2.5'

description: 'AliveScript is a language which modifies LiveScript (soon: coffee-script, coco, ???) first by allowing transformations on the AST, and then again on the resulting JavaScript usiing [http://graspjs.com/](grasp).'

keywords:
  'language'
  'compiler'
  'javascript'
  'coco'
  'coffeescript'
  'livescript'
  'grasp'

author: 'duralog <funisher@gmail.com>'
homepage: 'http://livescript.net'
bugs: 'https://github.com/duralog/AliveScript/issues'
licenses:
  type: 'MIT', url: 'https://raw.githubusercontent.com/duralog/AliveScript/master/LICENSE'
  ...

engines:
  node: '>= 0.8.0'
directories:
  lib: './lib'
  bin: './bin'
files:
  'lib'
  'bin'
  'README.md'
  'LICENSE'

main: './lib/'
bin:
  lsc: './bin/lsc'

scripts:
  pretest: 'make force && make force'
  test: 'make test'
  'test-harmony': 'make test-harmony'
  posttest: 'git checkout -- lib'
  all: 'make force && make test'

prefer-global: true

repository:
  type: 'git'
  url: 'git://github.com/duralog/AliveScript.git'

dependencies:
  'prelude-ls': '~1.1.0'
  optionator: '~0.3.0'
  grasp: '~0.2.1'

dev-dependencies:
  jison: '0.2.1'
  'uglify-js': '~2.4.12'
  istanbul: '~0.2.4'
  browserify: '~3.0.0'

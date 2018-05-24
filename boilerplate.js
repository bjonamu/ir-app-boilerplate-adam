const { merge, pipe, assoc, omit, __ } = require('ramda')

/**
 * Let's install.
 *
 * @param {any} context - The gluegun context.
 */
async function install (context) {
  const {
    filesystem,
    parameters,
    ignite,
    print,
    system,
    template,
    meta: { version }
  } = context
  const { colors } = print
  const { red, yellow, bold, gray, blue } = colors

  const perfStart = (new Date()).getTime()

  const appName = parameters.third
  const spinner = print
    .spin(`using the ${red('Ignite React App')} boilerplate v1 (code name 'Adam')`)
    .succeed()

  // remove files
  filesystem.remove('App.js')
  filesystem.remove('App.css')
  filesystem.remove('logo.svg')

  // copy our App, Tests & storybook directories
  spinner.text = '▸ copying files'
  spinner.start()
  filesystem.copy(`${__dirname}/boilerplate/App`, `${process.cwd()}/src`, {
    overwrite: true,
    matching: '!*.ejs'
  })
  // filesystem.copy(`${__dirname}/boilerplate/Tests`, `${process.cwd()}/Tests`, {
  //   overwrite: true,
  //   matching: '!*.ejs'
  // })
  // filesystem.copy(`${__dirname}/boilerplate/storybook`, `${process.cwd()}/storybook`, {
  //   overwrite: true,
  //   matching: '!*.ejs'
  // })
  spinner.stop()

  // generate some templates
  spinner.text = '▸ generating files'
  const templates = [
    { template: 'README.md', target: 'README.md' },
    { template: 'ir-app.json.ejs', target: 'ir-app.json' }
    // { template: 'storybook/storybook.ejs', target: 'storybook/storybook.js' },
    // { template: '.env.example', target: '.env.example' }
  ]
  const templateProps = {
    name: appName,
    irAppVersion: version(),
    createReactAppVersion: 0
  }
  await ignite.copyBatch(context, templates, templateProps, {
    quiet: true,
    directory: `${ignite.ignitePluginPath()}/boilerplate`
  })

  /**
   * Append to files
   */
  // https://github.com/facebook/react-native/issues/12724
  filesystem.appendAsync('.gitattributes', '*.bat text eol=crlf')
  filesystem.append('.gitignore', '\n# Misc\n#')
  filesystem.append('.gitignore', '\n.env\n')

  /**
   * Merge the package.json from our template into the one provided from react-native init.
   */
  async function mergePackageJsons () {
    // transform our package.json in case we need to replace variables
    const rawJson = await template.generate({
      directory: `${ignite.ignitePluginPath()}/boilerplate`,
      template: 'package.json.ejs',
      props: templateProps
    })
    const newPackageJson = JSON.parse(rawJson)

    // read in the react-native created package.json
    const currentPackage = filesystem.read('package.json', 'json')

    // deep merge, lol
    const newPackage = pipe(
      assoc(
        'dependencies',
        merge(currentPackage.dependencies, newPackageJson.dependencies)
      ),
      assoc(
        'devDependencies',
        merge(currentPackage.devDependencies, newPackageJson.devDependencies)
      ),
      assoc('scripts', merge(currentPackage.scripts, newPackageJson.scripts)),
      merge(
        __,
        omit(['dependencies', 'devDependencies', 'scripts'], newPackageJson)
      )
    )(currentPackage)

    // write this out
    filesystem.write('package.json', newPackage, { jsonIndent: 2 })
  }
  await mergePackageJsons()

  spinner.stop()

  // pass long the debug flag if we're running in that mode
  const debugFlag = parameters.options.debug ? '--debug' : ''

  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  // NOTE(steve): I'm re-adding this here because boilerplates now hold permanent files
  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  try {
    // boilerplate adds itself to get plugin.js/generators etc
    // Could be directory, npm@version, or just npm name.  Default to passed in values
    const boilerplate = parameters.options.b || parameters.options.boilerplate || 'ir-app-boilerplate-adam'

    await system.spawn(`ir-app add ${boilerplate} ${debugFlag}`, { stdio: 'inherit' })
  } catch (e) {
    ignite.log(e)
    throw e
  }

  // git configuration
  const gitExists = await filesystem.exists('./.git')
  if (!gitExists && !parameters.options['skip-git'] && system.which('git')) {
    // initial git
    const spinner = print.spin('configuring git')

    // TODO: Make husky hooks optional
    const huskyCmd = '' // `&& node node_modules/husky/bin/install .`
    system.run(`git init . && git add . && git commit -m "Initial commit." ${huskyCmd}`)

    spinner.succeed(`configured git`)
  }

  const perfDuration = parseInt(((new Date()).getTime() - perfStart) / 10) / 100
  spinner.succeed(`ignited ${yellow(appName)} in ${perfDuration}s`)

  const successMessage = `
    ${red('ignite-react-app CLI')} ignited ${yellow(appName)} in ${gray(`${perfDuration}s`)}
    To get started:
      cd ${appName}
      yarn start
      ir-app --help
    ${bold('Now get cooking! 🍽')}
  `

  print.info(successMessage)
}

module.exports = {
  install
}

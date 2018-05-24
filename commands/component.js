module.exports = {
  name: 'component',
  alias: ['comp'],
  run: async (toolbox) => {
    const { parameters, print, template: { generate }, strings, filesystem } = toolbox
    const { isBlank, pascalCase } = strings
    const { first: paramName } = parameters

    // validation
    if (isBlank(paramName)) {
      print.info(`${toolbox.runtime.brand} generate component <name>\n`)
      print.info('A name is required.')
      return
    }

    const name = pascalCase(paramName)
    const folder = `src/Components/${name}`

    // verify the component doesn't exist already
    if (filesystem.exists(folder) === 'dir') {
      print.error(`Component ${print.colors.yellow(name)} already exists.`)
      process.exit(1)
    }

    // Default to a stateless component
    let template = 'stateless.ejs'

    // controlled component
    if (c) {
      template = 'controlled.ejs'
    }

    await generate({
      template,
      target: `${folder}/index.js`,
      props: { name }
    })
  }
}

module.exports = {
  name: 'container',
  alias: ['cont'],
  run: async (toolbox) => {
    const { parameters, print, template: { generate }, strings, filesystem } = toolbox
    const { isBlank, pascalCase } = strings
    const { first: paramName } = parameters

    // validation
    if (isBlank(paramName)) {
      print.info(`${toolbox.runtime.brand} generate container <name>\n`)
      print.info('A name is required.')
      return
    }

    let name = pascalCase(paramName)

    if (!name.endsWith('Container')) {
      name = `${name}Container`
    }

    const target = `src/Containers/${name}.jsx`

    // verify the container doesn't exist already
    if (filesystem.exists(target) === 'file') {
      print.error(`Container ${print.colors.yellow(name)} already exists.`)
      process.exit(1)
    }

    await generate({
      target,
      template: 'container.ejs',
      props: { name }
    })
  }
}

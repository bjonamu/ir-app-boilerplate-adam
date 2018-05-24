module.exports = {
  name: 'redux',
  run: async (toolbox) => {
    const { parameters, print, template: { generate }, strings, filesystem } = toolbox
    const { isBlank, pascalCase } = strings
    const { first: paramName } = parameters

    // validation
    if (isBlank(paramName)) {
      print.info(`${toolbox.runtime.brand} generate redux <name>\n`)
      print.info('A name is required.')
      return
    }

    let name = pascalCase(paramName)

    if (!name.endsWith('Redux')) {
      name = `${name}Redux`
    }

    const target = `src/Redux/${name}.js`

    // verify the container doesn't exist already
    if (filesystem.exists(target) === 'file') {
      print.error(`Redux ${print.colors.yellow(name)} already exists.`)
      process.exit(1)
    }

    await generate({
      target,
      template: 'redux.ejs',
      props: { name }
    })
  }
}

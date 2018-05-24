module.exports = {
  name: 'saga',
  run: async (toolbox) => {
    const { parameters, print, template: { generate }, strings, filesystem } = toolbox
    const { isBlank, pascalCase } = strings
    const { first: paramName } = parameters

    // validation
    if (isBlank(paramName)) {
      print.info(`${toolbox.runtime.brand} generate saga <name>\n`)
      print.info('A name is required.')
      return
    }

    let name = pascalCase(paramName)

    if (!name.endsWith('Sagas')) {
      name = `${name}Sagas`
    }

    const target = `src/Sagas/${name}.js`

    // verify the container doesn't exist already
    if (filesystem.exists(target) === 'file') {
      print.error(`Saga ${print.colors.yellow(name)} already exists.`)
      process.exit(1)
    }

    await generate({
      target,
      template: 'saga.ejs',
      props: { name }
    })
  }
}

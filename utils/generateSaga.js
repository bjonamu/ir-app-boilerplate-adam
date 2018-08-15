const generateComponent = async (toolbox, sagaName) => {
  const { parameters, print, template: { generate }, strings, filesystem } = toolbox
  const { isBlank, pascalCase } = strings
  const { first: paramName } = parameters

  // validation
  if (!sagaName && isBlank(paramName)) {
    print.info(`${toolbox.runtime.brand} generate saga <name>\n`)
    print.info('A name is required.')
    return
  }

  let name = pascalCase(sagaName || paramName)

  if (!name.endsWith('Sagas')) {
    name = `${name}Sagas`
  }

  const target = `src/Sagas/${name}.js`

  // verify the container doesn't exist already
  if (filesystem.exists(target) === 'file') {
    print.error(`Saga ${print.colors.yellow(name)} already exists.`)
    return
  }

  await generate({
    target,
    template: 'saga.ejs',
    props: { name }
  })

  print.info(`Generated saga ${print.colors.yellow(name)}`)
}

module.exports = generateComponent
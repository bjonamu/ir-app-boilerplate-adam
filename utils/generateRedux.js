const generateComponent = async (toolbox, reduxName) => {
  const { parameters, print, template: { generate }, strings, filesystem } = toolbox
  const { isBlank, pascalCase } = strings
  const { first: paramName } = parameters

  // validation
  if (!reduxName && isBlank(paramName)) {
    print.info(`${toolbox.runtime.brand} generate redux <name>\n`)
    print.info('A name is required.')
    return
  }

  let name = pascalCase(reduxName || paramName)

  if (!name.endsWith('Redux')) {
    name = `${name}Redux`
  }

  const target = `src/Redux/${name}.js`

  // verify the container doesn't exist already
  if (filesystem.exists(target) === 'file') {
    print.error(`Redux ${print.colors.yellow(name)} already exists.`)
    return
  }

  await generate({
    target,
    template: 'redux.ejs',
    props: { name }
  })

  print.info(`Generated redux ${print.colors.yellow(name)}`)
}

module.exports = generateComponent
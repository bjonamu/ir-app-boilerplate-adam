const generateContainer = async (toolbox, layoutName) => {
  const { parameters, print, template: { generate }, strings, filesystem } = toolbox
  const { isBlank, pascalCase } = strings
  const { first: paramName } = parameters

  // validation
  if (!layoutName && isBlank(paramName)) {
    print.info(`${toolbox.runtime.brand} generate layout <name>\n`)
    print.info('A name is required.')
    return
  }

  let name = pascalCase(layoutName || paramName)

  if (!name.endsWith('Layout')) {
    name = `${name}Layout`
  }

  const target = `src/Layouts/${name}.jsx`

  // verify the layout doesn't exist already
  if (filesystem.exists(target) === 'file') {
    print.error(`Layout ${print.colors.yellow(name)} already exists.`)
    return
  }

  await generate({
    target,
    template: 'layout.ejs',
    props: { name }
  })
  
  print.info(`Generated layout ${print.colors.yellow(name)}`)
}

module.exports = generateContainer

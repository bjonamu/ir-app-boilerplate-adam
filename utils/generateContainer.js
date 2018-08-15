const generateContainer = async (toolbox, containerName) => {
  const { parameters, print, template: { generate }, strings, filesystem } = toolbox
  const { isBlank, pascalCase } = strings
  const { first: paramName } = parameters

  // validation
  if (!containerName && isBlank(paramName)) {
    print.info(`${toolbox.runtime.brand} generate container <name>\n`)
    print.info('A name is required.')
    return
  }

  let name = pascalCase(containerName || paramName)

  if (!name.endsWith('Container')) {
    name = `${name}Container`
  }

  const target = `src/Containers/${name}.jsx`

  // verify the container doesn't exist already
  if (filesystem.exists(target) === 'file') {
    print.error(`Container ${print.colors.yellow(name)} already exists.`)
    return
  }

  await generate({
    target,
    template: 'container.ejs',
    props: { name }
  })
  
  print.info(`Generated container ${print.colors.yellow(name)}`)
}

module.exports = generateContainer

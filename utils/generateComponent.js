const generateComponent = async (toolbox, componentName) => {
  const { parameters, print, template: { generate }, strings, filesystem, ignite } = toolbox
  const { isBlank, pascalCase } = strings
  const { first: paramName, options: { c } } = parameters

  // validation
  if (!componentName && isBlank(paramName)) {
    print.info(`${toolbox.runtime.brand} generate component <name>\n`)
    print.info('A name is required.')
    return
  }

  const name = pascalCase(componentName || paramName)
  const folder = `src/Components/${name}`

  // verify the component doesn't exist already
  if (filesystem.exists(folder) === 'dir') {
    print.error(`Component ${print.colors.yellow(name)} already exists.`)
    return
  }

  // Default to a stateless component
  let template = 'stateless.ejs'

  // controlled component
  if (c) {
    template = 'controlled.ejs'
  }

  const props = { name }
  const jobs = [{
    template,
    target: `${folder}/${name}.jsx`,
  }, {
    template: 'story.ejs',
    target: `${folder}/${name}.story.jsx`
  }]

  // await generate({
  //   template,
  //   target: `${folder}/${name}.jsx`,
  //   props: { name }
  // })

  await ignite.copyBatch(toolbox, jobs, props)

  print.info(`Generated component ${print.colors.yellow(name)}`)
}

module.exports = generateComponent

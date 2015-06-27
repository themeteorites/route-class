Package.describe({
  name: 'themeteorites:route-class',
  version: '0.0.1',
  summary: 'adds a css class to the body element for easy styling according to current route',
  git: 'https://github.com/themeteorites/route-class.git',
  documentation: 'README.md'
})

Package.onUse(function (api) {
  api.versionsFrom('1.1.0.2')

  api.use(['iron:router@1.0.9', 'jquery', 'accounts-base'], 'client')

  api.addFiles('route-class.js', 'client')
})

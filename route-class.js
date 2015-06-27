function decapitalize (s) {
  if (!s || !s.length) {
    return s
  }
  return s[0].toLowerCase() + s.substr(1)
}

Router.onAfterAction(function bodyClassUtil () {
  var template = decapitalize(this.lookupTemplate())
  var extra = ''
  if (this.route) {
    var route = (this.route.getName() || '').split('.').join(' ')
    if (route !== template) {
      extra = ' ' + route
    }
  }
  var user = Meteor.user()
  $('body').attr('class', template + extra + ' ' + (user ? 'logged-in' : 'logged-out'))
})

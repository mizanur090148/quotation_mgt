export default (to, from, next) => {
  if (localStorage.getItem('token') != null && localStorage.getItem('token').length > 0) {
    // go to target route
    next()
  } else {
    next('/login')
  }
}

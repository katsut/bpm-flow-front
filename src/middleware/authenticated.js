import { Auth } from 'aws-amplify'

export default async ({ store, redirect, route }) => {
  console.log(`# verify authenticated`)
  const userInfo = await Auth.currentUserInfo()
  console.log(`## userInfo: ${userInfo}`)
  store.dispatch('auth/setUser', userInfo)

  console.log(`## user: ${store.state.auth.user}`)
  console.log(`## path: ${route.path}`)

  if (!store.state.auth.user && route.path !== '/signin') {
    return redirect('/signin')
  }
}

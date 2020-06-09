import { Auth } from 'aws-amplify'

export default async ({ store, redirect, router }) => {
  const userInfo = await Auth.currentAuthenticatedUser()
  if (userInfo) {
    store.dispatch('auth/setUser', userInfo)
  }

  if (!store.state.auth.user) {
    return redirect('/signin')
  }
}

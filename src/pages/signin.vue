<template>
  <amplify-sign-out v-if="isLoggedIn" />
  <!-- eslint-disable-next-line -->
  <amplify-authenticator v-else v-bind:authConfig="authConfig" />
</template>

<script>
export default {
  layout: 'empty',
  data() {
    return {
      isLoggedIn: false,
      authConfig: {
        usernameAttributes: 'Email',
        signUpConfig: {
          header: 'Sign-up',
          hideAllDefaults: true,
          defaultCountryCode: '1',
          signUpFields: [
            {
              label: 'Email',
              key: 'email',
              required: true,
              displayOrder: 1,
              type: 'string'
            },
            {
              label: 'Password',
              key: 'password',
              required: true,
              displayOrder: 2,
              type: 'password'
            },
            {
              label: 'Nickname',
              key: 'nickname',
              required: true,
              displayOrder: 3,
              type: 'string'
            }
          ]
        }
      }
    }
  },
  async mounted() {
    const currentUserInfo = await this.$Amplify.Auth.currentUserInfo()
    this.isLoggedIn = Boolean(currentUserInfo)
  }
}
</script>

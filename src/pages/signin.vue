<template>
  <amplify-authenticator username-alias="email">
    <!-- The rest of your app code -->
    <amplify-sign-out></amplify-sign-out>
  </amplify-authenticator>
</template>

<script>
import '@aws-amplify/ui-vue'
import { Auth } from 'aws-amplify'

export default {
  layout: 'empty',
  data() {
    return {
      formFields: [
        {
          type: 'email',
          label: 'Custom email Label',
          placeholder: 'custom email placeholder',
          required: true
        },
        {
          type: 'password',
          label: 'Custom Password Label',
          placeholder: 'custom password placeholder',
          required: true
        },
        {
          type: 'address',
          label: 'Custom Address Label',
          placeholder: 'Enter your address',
          required: false
        }
      ]
    }
  },
  mounted() {
    const userInfo = Auth.currentAuthenticatedUser()
    if (userInfo) {
      return this.$router.push('/')
    }
  }
}
</script>

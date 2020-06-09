import Vue from 'vue'
import * as AmplifyModules from 'aws-amplify'
// import { AmplifyPlugin } from 'aws-amplify-vue'
import awsconfig from '@/aws-exports'
AmplifyModules.Amplify.configure(awsconfig)

Vue.use(AmplifyModules)

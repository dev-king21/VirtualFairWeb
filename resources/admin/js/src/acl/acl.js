import Vue from 'vue'
import { AclInstaller, AclCreate, AclRule } from 'vue-acl'
import router from '@/router'

Vue.use(AclInstaller)

let initialRole = 'admin'

const key = localStorage.getItem('activateKey')
console.log(key)
if (!key || key !== 'admin') initialRole = 'editor'

// console.log("userrole", initialRole)
//  initialRole = 'editor'
export default new AclCreate({
  initial  : initialRole,
  notfound : '/pages/not-authorized',
  router,
  acceptLocalRules : true,
  globalRules: {
    admin  : new AclRule('admin').generate(),
    editor : new AclRule('editor').or('admin').generate()
  }
})

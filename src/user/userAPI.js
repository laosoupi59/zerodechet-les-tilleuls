import UserFirebase from './userFirebase'

import FirebaseException from '../utils/FirebaseException'

class UserAPI {

  signinWithLoginAndPwd = async (login, pwd) => {
    return signin('emailPwd', login, pwd)
  }

  signinWithGoogle = async () => {
    return signin('google')
  }
  
  signinWithFacebook = async () => {
    return signin('facebook')
  }
  
  signinWithTwitter = async () => {
    return signin('twitter')
  }
  
  signup = async (login, pwd, name) => {
    try {
      await UserFirebase.signup(login, pwd)
    } catch (error) {
      throw new FirebaseException(error)
    }

    await UserFirebase.generateExtraInfo(name)
  }

  onAuthStateChanged = (callbackFn, callbackFn2) => {
    UserFirebase.onAuthStateChanged(callbackFn, callbackFn2)
  }
  
  signout = async () => {
    try {
      await UserFirebase.signout()
    } catch (error) {
      throw new FirebaseException(error)
    }
  }
  
  resetPwd = async (email) => {
    return await UserFirebase.resetPwd(email)
  }

  setGoal = goal => {
    UserFirebase.setExtraInfo('goal', goal)
  }

  setCity = city => {
    UserFirebase.setExtraInfo('city', city)
  }

  setNbPers = nb => {
    UserFirebase.setExtraInfo('nbPers', nb)
  }
  
  becomeExpert = () => {
    UserFirebase.setExtraInfo('isNew', false)
  }

  subEvt = id => {
    UserFirebase.setEvtInfo(id, false)
  }
  
  unsubEvt = id => {
    UserFirebase.deleteEvtInfo(id)
  }

  waitEvt = id => {
    UserFirebase.setEvtInfo(id, true)
  }

}

export default new UserAPI()

/////// PRIVATE METHODS
const signin = async (type, login, pwd) => {
  try {
    switch (type) {
      case 'google':
        await UserFirebase.signinWithGoogle()
        break;
      case 'facebook':
        UserFirebase.signinWithFacebook()
        break;
      case 'twitter':
        UserFirebase.signinWithTwitter()
        break;
      default:
        await UserFirebase.signin(login, pwd)
    }
  } catch (error) {
    throw new FirebaseException(error)
  }
}
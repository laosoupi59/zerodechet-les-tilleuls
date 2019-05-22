import { 
  EMAIL, 
  PWD 
} from '../../utils/common-test/common-data'

import { 
  VALID_FIREBASE_USER,
  VALID_FIREBASE_EXTRA_INFO,
  ALREADY_EXIST_EMAIL,
  VALID_API_USER_SIGNUP,
} from './userData'

class UserFirebase {
  signin = (login, pwd) => {
    if (EMAIL === login) {
      if (PWD === pwd) {
        return VALID_FIREBASE_USER 
      } else {
        throw new FirebaseError('auth/wrong-password')
      }
    } else {
      throw new FirebaseError('auth/user-not-found')
    }
  }

  signinWithGoogle = () => {
    // simulate "offline" user
    throw new FirebaseError('auth/popup-closed-by-user')
  }

  signinWithFacebook = () => VALID_FIREBASE_USER

  signinWithTwitter = () => VALID_FIREBASE_USER

  signup = (login, pwd) => {
    if (ALREADY_EXIST_EMAIL === login) {
      throw new FirebaseError('auth/email-already-in-use')
    }
  }

  onAuthStateChanged = (callbackFn, callbackFn2) => {
    callbackFn(VALID_API_USER_SIGNUP)
    callbackFn2() 
  }

  updateExtraInfo = (user, info) => { jest.fn() }
  
  generateExtraInfo = name => jest.fn()

  getExtraInfo = async email => {
    return VALID_FIREBASE_EXTRA_INFO
  }

  filter = firebaseUser => {
    return {
      uid: firebaseUser.uid,
      email: firebaseUser.email,
      name: firebaseUser.displayName,
      photo: firebaseUser.photoURL,
    }
  }
}

class FirebaseError extends Error {
  constructor(code) {
    super('mock firebase error')
    this.code = code
  }
}

export default new UserFirebase()
import firebase from 'firebase'

export const SIGNIN = (btnProvider) => {
  switch (btnProvider) {
    case 'github' :
      return firebase.auth().signInWithPopup(new firebase.auth.GithubAuthProvider())
    case 'twitter' :
      return firebase.auth().signInWithPopup(new firebase.auth.TwitterAuthProvider())
    case 'facebook' :
      return firebase.auth().signInWithPopup(new firebase.auth.FacebookAuthProvider())
    case 'google' :
      return firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
    default :
      return
  }
}
export const USERONSTATE = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      unsubscribe()
      if (user) {
        resolve(user)
        return
      }
      reject(null)
    })
  })
}
export const GETCURRENTUSER = () => firebase.auth().currentUser
export const SIGNOUT = () => firebase.auth().signOut()

import firebase from 'firebase'

export const SIGNIN = (btnProvider) => {
  switch (btnProvider) {
    case 'google' :
      return firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
    case 'facebook' :
      return firebase.auth().signInWithPopup(new firebase.auth.FacebookAuthProvider())
    case 'github' :
      return firebase.auth().signInWithPopup(new firebase.auth.GithubAuthProvider())
    default :
      return
  }
}
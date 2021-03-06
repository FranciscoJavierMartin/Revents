import { CHAT_REALTIME, POSTS_REALTIME } from '../../common/constants/firebase';
import firebase from '../firebase';
import { setUserProfileData } from './firestoreService';

export function firebaseObjectToArray(snapshot: any[]): any[] {
  return snapshot
    ? Object.entries(snapshot).map((e) => Object.assign({}, e[1], { id: e[0] }))
    : [];
}

export function signInWithEmailAndPassword(email: string, password: string) {
  return firebase.auth().signInWithEmailAndPassword(email, password);
}

export function signOutFirebase() {
  return firebase.auth().signOut();
}

export async function registerUserInFirebase(user: any) {
  try {
    const result = await firebase
      .auth()
      .createUserWithEmailAndPassword(user.email, user.password);
    await result.user?.updateProfile({
      displayName: user.displayName,
    });
    return await setUserProfileData(result.user);
  } catch (error) {
    throw error;
  }
}

export async function socialLogin(selectedProvider: 'facebook' | 'google') {
  let provider:
    | firebase.auth.FacebookAuthProvider
    | firebase.auth.GoogleAuthProvider;

  switch (selectedProvider) {
    case 'facebook':
      provider = new firebase.auth.FacebookAuthProvider();
      break;
    case 'google':
      provider = new firebase.auth.GoogleAuthProvider();
      break;
  }

  try {
    const result = await firebase.auth().signInWithPopup(provider);
    if (result.additionalUserInfo?.isNewUser) {
      await setUserProfileData(result.user);
    }
  } catch (error) {}
}

export function updateUserPassword(newPassword: string) {
  const user = firebase.auth().currentUser;
  return user?.updatePassword(newPassword);
}

export function uploadToFirebaseStorage(file: File, filename: string) {
  const user = firebase.auth().currentUser;
  const storage = firebase.storage().ref();
  return storage.child(`${user?.uid}/user_images/${filename}`).put(file);
}

export function deleteFromFirebaseStorage(filename: string) {
  const userUid = firebase.auth().currentUser?.uid;
  const storageRef = firebase.storage().ref();
  const photoRef = storageRef.child(`${userUid}/user_images/${filename}`);
  return photoRef.delete();
}

export function addEventChatComment(
  eventId: string,
  comment: string,
  parentId?: string
) {
  const user = firebase.auth().currentUser;
  const newComment = {
    diplayName: user?.displayName,
    photoURL: user?.photoURL,
    uid: user?.uid,
    text: comment,
    date: Date.now(),
    parentId: parentId || '',
    childNodes: [],
  };

  return firebase
    .database()
    .ref(`${CHAT_REALTIME}/${eventId}`)
    .push(newComment);
}

export function getEventChatRef(eventId: string) {
  return firebase.database().ref(`${CHAT_REALTIME}/${eventId}`).orderByKey();
}

export function getUserFeedRef() {
  const user = firebase.auth().currentUser;
  return firebase
    .database()
    .ref(`${POSTS_REALTIME}/${user?.uid}`)
    .orderByKey()
    .limitToLast(5);
}

import { store } from "@app/config/firebaseConfig"
import { HoarderLinks, Playlist } from "@app/nimatullo-types"
import {
  collection,
  DocumentData,
  getDocs,
  type QueryDocumentSnapshot,
} from "firebase/firestore"

const converter = <T>() => ({
  toFirestore: (data: T) => data,
  fromFirestore: (snap: QueryDocumentSnapshot<T>) => snap.data() as T,
})

const dataPoint = <T extends DocumentData>(collectionPath: string) => ({
  all: async () =>
    getDocs(
      collection(store, collectionPath).withConverter(converter<T>())
    ).then((snapshot) => snapshot.docs.map((doc) => doc.data())),
})

const db = {
  playlists: dataPoint<Playlist>("playlists"),
  links: dataPoint<HoarderLinks>("links"),
}

export { db }

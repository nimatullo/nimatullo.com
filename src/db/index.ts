import { store } from "@app/config/firebaseConfig"
import { CMS } from "@app/nimatullo-types"
import {
  addDoc,
  collection,
  DocumentData,
  getDocs,
  type QueryDocumentSnapshot,
  Timestamp,
} from "firebase/firestore"

export interface TimestampedDocumentData extends DocumentData {
  created?: Timestamp
}

const converter = <T>() => ({
  toFirestore: (data: T) => data,
  fromFirestore: (snap: QueryDocumentSnapshot<T>) => snap.data() as T,
})

export interface DocumentCollection<T extends TimestampedDocumentData> {
  all: () => Promise<T[]>
  add: (data: T) => Promise<void>
}

const documentDataHandler = <T extends TimestampedDocumentData>(
  collectionPath: string
): DocumentCollection<T> => ({
  all: async () =>
    getDocs(
      collection(store, collectionPath).withConverter(converter<T>())
    ).then((snapshot) =>
      snapshot.docs
        .map((doc) => doc.data())
        .sort((a, b) => {
          if (!a.created || !b.created) return 0
          return a.created.toMillis() - b.created.toMillis()
        })
    ),
  add: async (data: T) => {
    await addDoc(collection(store, collectionPath), {
      ...data,
      created: Timestamp.now(),
    })
  },
})

const db = {
  playlists: documentDataHandler<CMS.LinkWithDisplay>("playlists"),
  links: documentDataHandler<CMS.LinkWithDisplay>("links"),
  projects: documentDataHandler<CMS.Project>("projects"),
  aboutPageLinks: documentDataHandler<CMS.AboutPageLinks>("things"),
  memes: documentDataHandler<{ url: string }>("memes"),
  pictures: documentDataHandler<{ file: string }>("pictures"),
}

export { db }
export type Options = keyof typeof db

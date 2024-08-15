import { store } from "@app/config/firebaseConfig"
import { LinkWithDisplay, MyThings, Project } from "@app/nimatullo-types"
import {
  addDoc,
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
  add: async (data: T) => addDoc(collection(store, collectionPath), data),
})

const db = {
  playlists: dataPoint<LinkWithDisplay>("playlists"),
  links: dataPoint<LinkWithDisplay>("links"),
  projects: dataPoint<Project>("projects"),
  things: dataPoint<MyThings>("things"),
}

export { db }

/// Add missing information

export const addThings = async () => {
  await Promise.all([
    db.things.add({ title: "nature" }),
    db.things.add({
      title: "timurid art",
      url: "https://www.metmuseum.org/toah/hd/timu/hd_timu.htm",
    }),
    db.things.add({ title: "red" }),
    db.things.add({ title: "slow days" }),
    db.things.add({ title: "sun" }),
    db.things.add({ title: "books" }),
    db.things.add({ title: "clackity keyboards" }),
    db.things.add({ title: "games" }),
    db.things.add({ title: "chatter" }),
    db.things.add({ title: "beaches" }),
    db.things.add({ title: "sunsets" }),
    db.things.add({ title: "travel" }),
    db.things.add({ title: "culture" }),
    db.things.add({ title: "tech" }),
    db.things.add({ title: "teamwork" }),
    db.things.add({ title: "blizzards" }),
    db.things.add({
      title: "videos of people building log cabins in the woods",
      url: "https://www.youtube.com/watch?v=kV7_ZjNP_FM",
    }),
    db.things.add({ title: "cornettis" }),
    db.things.add({
      title: "popcorn and Buncha Crunch combo",
      url: "https://letterboxd.com/nimatullo",
    }),
  ])
}

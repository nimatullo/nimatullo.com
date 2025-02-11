import { store } from "@app/config/firebaseConfig"
import { AboutPageLinks, LinkWithDisplay, Project } from "@app/nimatullo-types"
import {
  addDoc,
  collection,
  DocumentData,
  getDocs,
  type QueryDocumentSnapshot,
  Timestamp,
} from "firebase/firestore"

interface TimestampedDocumentData extends DocumentData {
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
        .sort((a, b) =>
          !!a.created && !!b.created
            ? a.created.toMillis() - b.created.toMillis()
            : 0
        )
    ),
  add: async (data: T) => {
    await addDoc(collection(store, collectionPath), {
      ...data,
      created: Timestamp.now(),
    })
  },
})

const db = {
  playlists: documentDataHandler<LinkWithDisplay>("playlists"),
  links: documentDataHandler<LinkWithDisplay>("links"),
  projects: documentDataHandler<Project>("projects"),
  aboutPageLinks: documentDataHandler<AboutPageLinks>("things"),
  memes: documentDataHandler<{ url: string }>("memes"),
}

export { db }
export type Options = keyof typeof db
/// Add missing information

export const addThings = async () => {
  await Promise.all([
    db.aboutPageLinks.add({ title: "nature" }),
    db.aboutPageLinks.add({
      title: "timurid art",
      url: "https://www.metmuseum.org/toah/hd/timu/hd_timu.htm",
    }),
    db.aboutPageLinks.add({ title: "red" }),
    db.aboutPageLinks.add({ title: "slow days" }),
    db.aboutPageLinks.add({ title: "sun" }),
    db.aboutPageLinks.add({ title: "books" }),
    db.aboutPageLinks.add({ title: "clackity keyboards" }),
    db.aboutPageLinks.add({ title: "games" }),
    db.aboutPageLinks.add({ title: "chatter" }),
    db.aboutPageLinks.add({ title: "beaches" }),
    db.aboutPageLinks.add({ title: "sunsets" }),
    db.aboutPageLinks.add({ title: "travel" }),
    db.aboutPageLinks.add({ title: "culture" }),
    db.aboutPageLinks.add({ title: "tech" }),
    db.aboutPageLinks.add({ title: "teamwork" }),
    db.aboutPageLinks.add({ title: "blizzards" }),
    db.aboutPageLinks.add({
      title: "videos of people building log cabins in the woods",
      url: "https://www.youtube.com/watch?v=kV7_ZjNP_FM",
    }),
    db.aboutPageLinks.add({ title: "cornettis" }),
    db.aboutPageLinks.add({
      title: "popcorn and Buncha Crunch combo",
      url: "https://letterboxd.com/nimatullo",
    }),
  ])
}

export const addProjects = async () => {
  await Promise.all([
    db.projects.add({
      title: "State Redistricter",
      description: "Multi-member district simulation based off H.R.3863",
      github: "https://github.com/nimatullo/state-redistricter",
    }),
    db.projects.add({
      title: "Reminderse",
      description:
        "Save-for-later app which reminds you about the links, articles and other media that you’ve consumed surfing the internet.",
      github: "https://github.com/nimatullo/reminderse",
    }),
    db.projects.add({
      title: "Parachute",
      description: "Platform independent AirDrop alternative",
      github: "https://github.com/nimatullo/parachute/",
      url: "https://parachute.nimatullo.com",
    }),
    db.projects.add({
      title: "wyd",
      description:
        "realtime website status for the about page on old nimatullo.com",
      github: "https://github.com/nimatullo/wyd",
      url: "https://nimatullo.com/about",
    }),
    db.projects.add({
      title: "Ghost Kitchen",
      description: "Mmm...Food",
      github: "https://github.com/nimatullo/GhostKitchen",
      url: "https://youtu.be/wSX2Ocldlho",
    }),
  ])
}

export const addPlaylists = async () => {
  const playlists = [
    {
      title: "2:00 AM",
      url: "https://embed.music.apple.com/us/playlist/2-00-am/pl.u-2aoq8meSezzjL2",
    },
    {
      title: "Consensual Seduction",
      url: "https://embed.music.apple.com/us/playlist/consensual-seduction/pl.u-jV890pJu3ooPqB",
    },
    {
      title: "new friends",
      url: "https://embed.music.apple.com/us/playlist/summer-21/pl.u-KVXBD71Idoopm0",
    },
    {
      title: "make clean debug",
      url: "https://embed.music.apple.com/us/playlist/make-clean-debug/pl.u-8aAVXEeIr77EaJ",
    },
    {
      title: "of all things",
      url: "https://embed.music.apple.com/us/playlist/of-all-things/pl.u-WabZ6ojCYppzvN",
    },
    {
      title: "quill",
      url: "https://embed.music.apple.com/us/playlist/quill/pl.u-NpXm9oaF7jjJpy",
    },
    {
      title: "39.641076º, 66.927943º",
      url: "https://embed.music.apple.com/us/playlist/summer-22/pl.u-GgA5eoRIpaav82",
    },
    {
      title: "grad sh!t",
      url: "https://embed.music.apple.com/us/playlist/grad/grad-sh-t/pl.u-NpXm98Vs7jjJpy",
    },
    {
      title: "face of unemployment",
      url: "https://embed.music.apple.com/us/playlist/winter-22/pl.u-GgA5e8bUpaav82",
    },
    {
      title: "ball is life",
      url: "https://embed.music.apple.com/us/playlist/spring-23/pl.u-NpXm9xpC7jjJpy",
    },
    {
      title: "prego",
      url: "https://embed.music.apple.com/us/playlist/prego/pl.u-jV89bXNT3ooPqB",
    },
    {
      title:
        "you must mourn the loss of your younger self, the person who has gotten you this far but who is no longer equipped to carry you onward",
      url: "https://embed.music.apple.com/us/playlist/you-must-mourn-the-loss-of-your-younger-self-the/pl.u-2aoqXWLfezzjL2",
    },
    {
      title: "pashtish de nadish",
      url: "https://embed.music.apple.com/us/playlist/winter-23/pl.u-NpXm977F7jjJpy",
    },
    {
      title: "it just alkahal",
      url: "https://embed.music.apple.com/us/playlist/spring-24/pl.u-gxblkX0sZEE2Ml",
    },
    {
      title: "typescrip",
      url: "https://embed.music.apple.com/us/playlist/summer-24/pl.u-gxblkKJtZEE2Ml",
    },
    {
      title: "weird",
      url: "https://embed.music.apple.com/us/playlist/fall-24/pl.u-2aoqXjzsezzjL2",
    },
    {
      title: "i dont always have something to say",
      url: "https://embed.music.apple.com/us/playlist/winter-24/pl.u-kv9lb8mT6aaMWD",
    },
  ]

  for (const playlist of playlists) {
    await db.playlists.add(playlist)
    await new Promise((resolve) => setTimeout(resolve, 1000))
  }
}

export const addMemes = async () => {
  const listOfMemes = [
    "https://preview.redd.it/c19x85xw7nl61.png?width=640&height=748&crop=smart&auto=webp&s=aef8ea8879e38bf98b721a3ff8bb8305dc8ff2af",
    "https://i.imgur.com/ijhBu3H.png",
    "https://i.imgur.com/RYmZSao.png",
    "https://i.imgur.com/FoamaYm.png",
    "https://i.imgur.com/4BMb9RY.png",
    "https://i.imgur.com/L75Dcvr.png",
    "https://i.imgur.com/IOu8cMH.jpg",
    "https://i.imgur.com/ZoUIp2U.png",
    "https://i.imgur.com/KAxRiuD.jpg",
    "https://i.imgur.com/Nz8FuGC.png",
    "https://i.imgur.com/SsAKh1L.jpg",
    "https://i.imgur.com/qSkfhO1.jpg",
    "https://i.imgur.com/hQBbiSt.png",
    "https://i.imgur.com/QpMRSrx.png",
    "https://i.imgur.com/jLXveVw.jpg",
    "https://i.imgur.com/Oc6jnzP.png",
    "https://i.imgur.com/M6ud0QY.png",
    "https://www.thecoderpedia.com/wp-content/uploads/2020/06/Are-you-a-robot-Meme-1024x925.jpg",
    "https://www.thecoderpedia.com/wp-content/uploads/2020/06/Internet-Explorer-Joke-915x1024.jpg",
    "https://www.thecoderpedia.com/wp-content/uploads/2020/06/Mark-Zuckerberg-Meme-878x1024.jpg",
    "https://www.thecoderpedia.com/wp-content/uploads/2020/06/Internet-Explorer-Joke-Meme-1024x954.jpg",
    "https://www.thecoderpedia.com/wp-content/uploads/2020/06/Coding-Memes-End-Game-1024x835.jpg",
    "https://www.thecoderpedia.com/wp-content/uploads/2020/06/Programming-Memes-Google-Joke-1024x956.jpg",
  ]
  await Promise.all(listOfMemes.map((url) => db.memes.add({ url })))
}

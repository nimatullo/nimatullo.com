import { db, DocumentCollection, type Options } from "@app/db"
import type {
  AboutPageLinks,
  LinkWithDisplay,
  Project,
} from "@app/nimatullo-types"

interface Field<T> {
  key: keyof T
  getValue: (model: T) => string | undefined
  label: string
  type?: "text" | "number"
  optional?: boolean
}

const removeEmptyStrings = <T extends object>(obj: T): T =>
  Object.fromEntries(
    Object.entries(obj).filter(([_, value]) => value !== "")
  ) as T

export abstract class FirebaseCollectionModel<T extends Object> {
  collection: DocumentCollection<T>
  constructor(collection: DocumentCollection<T>) {
    this.collection = collection
  }
  add(model: T) {
    this.collection.add(removeEmptyStrings(model))
  }
  abstract fields: Field<T>[]
  abstract get initialValues(): T
}

export class LinkWithDisplayNameModel extends FirebaseCollectionModel<LinkWithDisplay> {
  fields: Field<LinkWithDisplay>[] = [
    {
      key: "title",
      getValue: (model: LinkWithDisplay) => {
        return model.title
      },
      label: "Title",
    },
    {
      key: "url",
      getValue: (model: LinkWithDisplay) => {
        return model.url
      },
      label: "URL",
    },
  ]

  get initialValues(): LinkWithDisplay {
    return { title: "", url: "" }
  }
}

export class LinkModel extends FirebaseCollectionModel<{ url: string }> {
  get initialValues() {
    return { url: "" }
  }

  fields: Field<{ url: string }>[] = [
    {
      key: "url",
      getValue: (model) => model.url,
      label: "URL",
    },
  ]
}

export class ThingModel extends FirebaseCollectionModel<AboutPageLinks> {
  initialValues = { title: "", url: "" }

  fields: Field<AboutPageLinks>[] = [
    { key: "title", getValue: (model) => model.title, label: "Title" },
    {
      key: "url",
      getValue: (model) => model.url,
      label: "URL",
      optional: true,
    },
  ]
}

export class ProjectModel extends FirebaseCollectionModel<Project> {
  initialValues = { title: "", description: "", github: "", url: "" }

  fields: Field<Project>[] = [
    { key: "title", getValue: (model) => model.title, label: "Title" },
    {
      key: "description",
      getValue: (model) => model.description,
      label: "Description",
    },
    {
      key: "github",
      getValue: (model) => model.github,
      label: "GitHub",
      optional: true,
    },
    {
      key: "url",
      getValue: (model) => model.url,
      label: "URL",
      optional: true,
    },
  ]
}

export const modelMap: Record<Options, any> = {
  playlists: new LinkWithDisplayNameModel(db.playlists),
  aboutPageLinks: new ThingModel(db.aboutPageLinks),
  links: new LinkWithDisplayNameModel(db.links),
  memes: new LinkModel(db.memes),
  projects: new ProjectModel(db.projects),
}

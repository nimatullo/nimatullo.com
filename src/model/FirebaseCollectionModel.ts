import {
  db,
  DocumentCollection,
  TimestampedDocumentData,
  type Options,
} from "@app/db"
import type {
  AboutPageLinks,
  LinkWithDisplay,
  Project,
} from "@app/nimatullo-types"

interface Field<T> {
  key: keyof T
  getValue: (model: T) => string | undefined
  label: string
  type?: "text" | "number" | "image"
  optional?: boolean
}

const removeEmptyStrings = <T extends TimestampedDocumentData>(obj: T): T =>
  Object.fromEntries(
    Object.entries(obj).filter(([_, value]) => value !== "")
  ) as T

export abstract class FirebaseCollectionModel<
  T extends TimestampedDocumentData,
  U extends Object
> {
  collection: DocumentCollection<T>
  modelType: "text" | "image" = "text"

  constructor(collection: DocumentCollection<T>) {
    this.collection = collection
  }

  async add(model: T) {
    this.collection.add(removeEmptyStrings(model))
  }

  abstract fields: Field<T>[]
  abstract get initialValues(): U
}

export class LinkWithDisplayNameModel extends FirebaseCollectionModel<
  LinkWithDisplay,
  LinkWithDisplay
> {
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

export class LinkModel extends FirebaseCollectionModel<
  { url: string },
  { url: string }
> {
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

export class ThingModel extends FirebaseCollectionModel<
  AboutPageLinks,
  AboutPageLinks
> {
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

export class ProjectModel extends FirebaseCollectionModel<Project, Project> {
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

export class PictureModel extends FirebaseCollectionModel<
  { file: string },
  { file: File | null }
> {
  modelType: "image" | "text" = "image"
  initialValues = { file: null }

  fields: Field<{ file: string }>[] = [
    {
      key: "file",
      getValue: (model) => model.file,
      label: "File",
      type: "image",
    },
  ]
}

export const modelMap: Record<Options, any> = {
  playlists: new LinkWithDisplayNameModel(db.playlists),
  aboutPageLinks: new ThingModel(db.aboutPageLinks),
  links: new LinkWithDisplayNameModel(db.links),
  memes: new LinkModel(db.memes),
  projects: new ProjectModel(db.projects),
  pictures: new PictureModel(db.pictures),
}

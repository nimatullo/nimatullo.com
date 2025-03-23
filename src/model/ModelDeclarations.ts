import { db, Options } from "@app/db"
import { uploadImage } from "@app/lib/cloudinary"
import { CMS } from "@app/nimatullo-types"

interface Field<T> {
  key: keyof T
  label: string
  type?: "text" | "number" | "image"
  value: (data: T) => any
  optional?: boolean
}

interface Collection<T> {
  add: (data: T) => Promise<void>
}

export abstract class BaseModel<T, S = T> {
  collection: Collection<S>

  constructor(collection: Collection<S>) {
    this.collection = collection
  }

  async save(data: T) {
    this.collection.add(data as any)
  }

  abstract fields: Field<T>[]
}

export class LinkModel extends BaseModel<CMS.Link> {
  fields: Field<CMS.Link>[] = [
    {
      type: "text",
      key: "url",
      label: "URL",
      value: (link) => link.url,
    },
  ]
}

export class LinkWithDisplayModel extends BaseModel<CMS.LinkWithDisplay> {
  fields: Field<CMS.LinkWithDisplay>[] = [
    {
      key: "title",
      label: "Title",
      type: "text",
      value: (link) => link.title,
    },
    {
      key: "url",
      label: "URL",
      type: "text",
      value: (link) => link.url,
    },
  ]
}

export class ThingModel extends BaseModel<CMS.AboutPageLinks> {
  fields: Field<CMS.AboutPageLinks>[] = [
    {
      key: "title",
      label: "Title",
      type: "text",
      value: (link) => link.title,
    },
    {
      key: "url",
      label: "URL",
      type: "text",
      value: (link) => link.url,
    },
  ]
}

export class ProjectModel extends BaseModel<CMS.Project> {
  fields: Field<CMS.Project>[] = [
    {
      key: "title",
      label: "Title",
      type: "text",
      value: (project) => project.title,
    },
    {
      key: "description",
      label: "Description",
      type: "text",
      value: (project) => project.description,
    },
    {
      key: "github",
      label: "GitHub",
      type: "text",
      value: (project) => project.github,
    },
    {
      key: "url",
      label: "URL",
      type: "text",
      value: (project) => project.url,
    },
  ]
}

export class PictureModel extends BaseModel<CMS.Picture, { file: string }> {
  fields: Field<CMS.Picture>[] = [
    {
      key: "fileList",
      label: "File",
      type: "image",
      value: (picture) => picture.fileList,
    },
  ]

  async save(data: CMS.Picture) {
    const { fileList } = data
    const file = fileList[0]
    const url = await uploadImage(file)
    this.collection.add({ file: url })
  }
}

export const modelMap: Record<Options, any> = {
  playlists: new LinkWithDisplayModel(db.playlists),
  links: new LinkWithDisplayModel(db.links),
  projects: new ProjectModel(db.projects),
  aboutPageLinks: new ThingModel(db.aboutPageLinks),
  memes: new LinkModel(db.memes),
  pictures: new PictureModel(db.pictures),
}

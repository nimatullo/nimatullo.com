import { Image } from "@components/scaffold"
import React from "react"

interface UploadWidgetProps {
  onUpload: (picture: File) => void
}

export const UploadWidget = ({ onUpload }: UploadWidgetProps) => {
  const [picture, setPicture] = React.useState<string | null>(null)
  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={(event) => {
          const file = event.target.files?.[0]
          if (file) {
            const reader = new FileReader()
            reader.onload = (e) => {
              setPicture(e.target?.result as string)
            }
            reader.readAsDataURL(file)
            onUpload(file)
          }
        }}
      />

      {picture && <Image src={picture} alt="uploaded image" />}
    </div>
  )
}

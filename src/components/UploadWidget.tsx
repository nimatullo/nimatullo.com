import { Image } from "@components/scaffold"
import React from "react"

interface UploadWidgetProps {
  register: any
}

export const UploadWidget = ({ register }: UploadWidgetProps) => {
  const [preview, setPreview] = React.useState<string | null>(null)
  const { ref: registerRef, ...rest } = register("fileList")

  const handleUploadedFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) setPreview(URL.createObjectURL(file))
  }

  return (
    <div>
      <input
        name="fileList"
        type="file"
        {...rest}
        accept="image/*"
        onChange={handleUploadedFile}
        ref={registerRef}
      />

      {preview && (
        <Image
          css={{
            width: "300px",
            height: "300px",
            display: "block",
          }}
          src={preview}
          alt="uploaded image"
        />
      )}
    </div>
  )
}

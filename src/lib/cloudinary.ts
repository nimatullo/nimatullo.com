const cloud = "dhsfjhfll"
const preset = "nimatullo"

export const uploadImage = async (file: File): Promise<string> => {
  const formData = new FormData()
  formData.append("file", file)
  formData.append("upload_preset", preset)
  formData.append("cloud_name", cloud)
  formData.append("folder", preset)
  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${cloud}/image/upload`,
    {
      method: "POST",
      body: formData,
    }
  )
  const data = await res.json()
  return data.secure_url
}

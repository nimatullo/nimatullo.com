interface GifVideoProps extends React.HTMLProps<HTMLVideoElement> {
  src: string
  alt: string
}

export const GifVideo: React.FC<GifVideoProps> = (props) => {
  const { src, alt, ...rest } = props

  return (
    <video autoPlay loop muted playsInline {...rest}>
      <source src={src} type="video/webm" />
      Your browser does not support the video tag.
    </video>
  )
}

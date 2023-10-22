type Props = {
  src: string;
};

export function Video({ src }: Props) {
  return (
    <video
      width="100%"
      height="auto"
      loop
      autoPlay
      muted
      style={{ borderRadius: 14, maxWidth: 500 }}
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

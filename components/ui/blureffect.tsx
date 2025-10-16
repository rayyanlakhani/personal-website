export default function BlurEffect() {
  return (
    <>
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-72 bg-accent-foreground/20 rounded-full blur-3xl animate-pulse delay-1000" />
    </>
  );
}

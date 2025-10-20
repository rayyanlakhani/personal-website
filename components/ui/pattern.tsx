export default function Pattern() {
  return (
    <>
      {/* Light Mode Pattern (now absolute + same mask/shape as dark) */}
      <div
        className="
          absolute inset-0 -z-10 pointer-events-none
          bg-[radial-gradient(#2b2d42_0.5px,transparent_0.5px),radial-gradient(#2b2d42_0.5px,#e5e5f7_0.5px,transparent_1px)]
          bg-[size:20px_20px]
          [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]
          dark:hidden
        "
      />

      {/* Dark Mode Pattern */}
      <div className="dark:absolute dark:inset-0 dark:bg-[linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] dark:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
    </>
  );
}

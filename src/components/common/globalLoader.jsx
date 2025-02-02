export default function GlobalLoader() {
  return (
    <>
      <div className="fixed z-40 w-full h-full top-0 min-h-screen flex justify-center items-center bg-white dark:bg-gray-900/20 backdrop-blur-[3px]">
        {/* Fixed position for the loader */}
        <div className="loader" />
      </div>
    </>
  );
}

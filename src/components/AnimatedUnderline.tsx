export function AnimatedUnderline({ children }: { children?: React.ReactNode }) {
  return (
    <div
      className="bg-linear-to-r from-black to-black bg-size-[0%_2px] bg-bottom-left bg-no-repeat pb-1
        transition-[background-size] duration-250 ease-out group-hover:bg-size-[100%_2px] dark:from-white dark:to-white"
    >
      {children}
    </div>
  );
}

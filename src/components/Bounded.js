import clsx from "clsx";

export function Bounded({
  as: Comp = "section",
  yPadding = "base",
  collapsible = true,
  className,
  children,
}) {
  return (
    <Comp
      data-collapsible={collapsible}
      className={clsx(
        yPadding === undefined && "py-20 md:py-32",
        yPadding === "none" && "",
        yPadding === "sm" && "py-8 md:py-10",
        yPadding === "base" && "py-20 md:py-[150px]",
        className
      )}
    >
      <div className="mx-auto font-montserrat w-full h-full max-w-screen-2xl px-5 md:px-20 xl:px-[62px]">{children}</div>
    </Comp>
  );
}

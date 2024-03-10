export default function WrapMaxWidth({
    className,
    children
}:Readonly<{
    className:string,
    children: React.ReactNode;
  }>) {
  return (
    <div className={`m-auto relative px-5 sm:px-10 max-w-[1280px] ${className}`}>{children}</div>
  )
}

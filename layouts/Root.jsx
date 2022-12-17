import cn from 'classnames';

function Root() {
  return (
    <div className="xl:pl-72 2xl:pl-80 2xl:pr-80">
    {/* <Sidebar className="hidden xl:block" /> */}
    <main
      className={cn(
        'min-h-[100vh] px-4 pt-4 pb-16 sm:px-6 sm:pb-20 lg:px-8 xl:pb-24 3xl:px-10 3xl:pt-0.5',
        contentClassName
      )}
    >
      {children}
    </main>
    </div>
  )
}

export default Root
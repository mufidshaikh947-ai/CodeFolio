function PageContainer({
    children
}) {
    return (
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-2 sm:px-4 md:px-6 pb-12">
            {children}
        </div>
    );
}

export default PageContainer;
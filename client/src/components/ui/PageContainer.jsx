function PageContainer({
    children
}) {
    return (
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-3 pb-10 sm:gap-8 sm:px-4 sm:pb-12 md:px-6">
            {children}
        </div>
    );
}

export default PageContainer;

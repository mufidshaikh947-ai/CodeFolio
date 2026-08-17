function SectionCard({

    children,

    className = ""

}) {

    return (

        <section
            className={`
                rounded-2xl
                border
                border-slate-200/80
                bg-white
                px-4
                py-6
                shadow-xs
                sm:px-10
                sm:py-9
                ${className}
            `}
        >

            {children}

        </section>

    );

}

export default SectionCard;

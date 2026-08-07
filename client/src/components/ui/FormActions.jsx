function FormActions({ children, className = "" }) {
    return (
        <div
            className={`
                mt-11
                flex
                flex-wrap
                items-center
                justify-end
                gap-3
                border-t
                border-slate-100
                pt-6
                ${className}
            `}
        >
            {children}
        </div>
    );
}

export default FormActions;
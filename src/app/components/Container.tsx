

const Container = ({children, className,...props}:ChildProps) => {
    return(
        <div className="justify-center p-3 flex flex-col place-items-center border min-h-fit self-center w-fit"{...props}>
            {children}
        </div>
    )

}

export default Container
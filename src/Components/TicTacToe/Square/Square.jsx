export default function Square({value}) {

    const HandleCLick = () => {
        console.log( value+ " is clicked");
        
    }

    return(
        <>
        <button className="border border-solid border-spacing-2 border-black h-[50px] w-[50px] text-4xl" onClick={(e)=>HandleCLick(e.target.value)}>{value}</button>
        </>
    )
}
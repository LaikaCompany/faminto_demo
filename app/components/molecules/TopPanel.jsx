export default function TopPanel({imageLink,text})
{

    return (
        <>
            <div className={`bg-white h-12 sticky top-0 flex items-center justify-center "border-[0.5px] border-gray-400"`}>
                <img src="/icons/back.png" alt="back" className='left-2 fixed' onClick={()=>history.back()}/>
                <span className='mx-2 py-2 text-lg font-semibold font-main text-mainBrown'>
                    {text}
                </span>
            </div>
            <img src={imageLink} className={`w-full h-40 bg-contain`}/>
        </>

    )
}
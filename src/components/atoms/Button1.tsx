export default function Button1({text, onClick}: {text: string, onClick: any}) {
    return (
        <button onClick={onClick} className='w-full text-center bg-primary-yellow py-3 rounded-3xl text-[12px] 3xl:text-2xl text-primary-purple font-semibold 2xl:py-5 3xl:py-7 2xl:rounded-full' type='submit'>{text}</button>
    )
}

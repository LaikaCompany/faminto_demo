export default function AtomTextBox({label})
{
    return (
        <div className="flex flex-col">
            <label className="text-xl font-semibold py-2">{label}</label>
            <textarea type="text" id="textbox"className="p-2 h-20 rounded-xl bg-darkWhite" />
        </div>
    )
}
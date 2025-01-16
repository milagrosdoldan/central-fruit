export default function SectionTitle(props: {
    title: string
}) {
    return <div className="flex items-center gap-1 animate-slideDown delay-250">
        <div className="w-3 h-3 bg-primary-main rounded-full"></div>
        <p className="tablet:text-2xl text-primary-light font-semibold ">
            {props.title}
        </p>
    </div>
}
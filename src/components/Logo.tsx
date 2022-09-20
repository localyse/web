type Props = {
	className?: string
}
export function Logo({ className }: Props) {
	return <span className={className ? className : "logo"}>localy<span className="orange">.se</span></span>
}
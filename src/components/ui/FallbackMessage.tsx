interface IFallbackMessage {
	message: string
	className?: string
}

export function FallbackMessage({ message, className = '' }: IFallbackMessage) {
	return (
		<div className="flex min-h-[200px] items-center justify-center">
			<p className={`text-xl font-semibold ${className}`}>{message}</p>
		</div>
	)
}

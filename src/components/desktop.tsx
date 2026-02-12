

export default function Desktop() {

    return (
        <>
        <div className="flex flex-col gap-3">
				<div className="hover-white active:scale-[0.9] transition-all duration-300 w-20 flex flex-col justify-center p-2 rounded">
				<img src="/images/word.png" alt="resume" height={40} width={40} className="m-auto"/>
				<p className="text-[11px] px-2 pt-1 text-center w-full">Resume</p>
			</div>

			<div className="hover-white active:scale-[0.9] transition-all duration-300 w-20 flex flex-col justify-center p-2 rounded">
				<img src="/images/gmail.svg" alt="Desktop Background" height={40} width={40} className="m-auto"/>
				<p className="text-[11px] px-2 pt-1 text-center w-full">Mail</p>
			</div>

			<div className="hover-white active:scale-[0.9] transition-all duration-300 w-20 flex flex-col justify-center p-2 rounded">
				<img src="/images/linkedin.svg" alt="Desktop Background" height={40} width={40} className="m-auto"/>
				<p className="text-[11px] px-2 pt-1 text-center w-full">LinkedIn</p>
			</div>

			<div className="hover-white active:scale-[0.9] transition-all duration-300 w-20 flex flex-col justify-center p-2 rounded">
				<img src="/images/telegram.svg" alt="Desktop Background" height={40} width={40} className="m-auto"/>
				<p className="text-[11px] px-2 pt-1 text-center w-full">Telegram</p>
			</div>

			<div className="hover-white active:scale-[0.9] transition-all duration-300 w-20 flex flex-col justify-center p-2 rounded">
				<img src="/images/twitter.svg" alt="Desktop Background" height={40} width={40} className="m-auto"/>
				<p className="text-[11px] px-2 pt-1 text-center w-full">Twitter</p>
			</div>

			</div>
        </>
    )
}
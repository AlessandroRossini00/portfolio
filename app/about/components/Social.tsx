import Image from "next/image"
export default function Social() {
    return (
        <section className="sticky top-0 flex flex-row justify-center gap-8 bg-red-400">
            <a
                href="https://github.com/tuo-profilo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center"
            >
                <Image
                    src="file.svg"
                    alt="GitHub"
                    width={50}
                    height={50}
                    className="rounded-full"
                />
                <span className="text-sm mt-2">GitHub</span>
            </a>
            <a
                href="https://linkedin.com/in/tuo-profilo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center"
            >
                <Image
                    src="file.svg"
                    alt="LinkedIn"
                    width={50}
                    height={50}
                    className="rounded-full"
                />
                <span className="text-sm mt-2">LinkedIn</span>
            </a>
            <a
                href="https://twitter.com/tuo-profilo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center"
            >
                <Image
                    src="file.svg"
                    alt="Twitter"
                    width={50}
                    height={50}
                    className="rounded-full"
                />
                <span className="text-sm mt-2">Twitter</span>
            </a>
        </section>
    )
}
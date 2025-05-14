import Image from "next/image";
export default function Social() {
  return (
    <section className="sticky top-4 w-fit flex flex-row justify-center gap-4 m-8 rounded-xl bg-blue-500 ">
      <LinkIcon
        src="/social/github.svg"
        alt="GitHub"
        href="https://twitter.com/tuo-profilo"
      />
      <LinkIcon
        src="/social/linkedin.svg"
        alt="Linkedin"
        href="https://twitter.com/tuo-profilo"
      />
      <LinkIcon
        src="/social/instagram.svg"
        alt="Instagram"
        href="https://twitter.com/tuo-profilo"
      />
    </section>
  );
}

const LinkIcon = ({ src, alt, href }: any) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center hover:opacity-80"
    >
      <Image src={src} alt={alt} width={50} height={50} />
    </a>
  );
};

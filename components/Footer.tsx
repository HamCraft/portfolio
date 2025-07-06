import { AiFillGithub, AiOutlineTwitter, AiFillYoutube, AiFillInstagram } from "react-icons/ai"

const socialLinks = [
  { href: "https://github.com/HamCraft", Icon: AiFillGithub, label: "GitHub" },
  { href: "https://x.com/HamCraftMC", Icon: AiOutlineTwitter, label: "X (Twitter)" },
  { href: "https://youtube.com/@HamCraft", Icon: AiFillYoutube, label: "Youtube" },
  { href: "https://instagram.com/ahmed_yaqoob_dhedhi", Icon: AiFillInstagram, label: "Instagram" },
]

export const Footer = () => {
  return (
    <footer className="py-6 sm:py-8 max-w-[1200px] mx-auto px-4">
      <div className="mt-8 sm:mt-12 flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="text-gray-200">© 2025. All rights reserved.</p>
        <ul className="flex gap-5 flex-wrap">
          {socialLinks.map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="text-gray-200 flex items-center justify-center w-10 h-10 rounded-full
                         hover:text-gray-400 transition-colors"
            >
              <Icon size={30} />
            </a>
          ))}
        </ul>
      </div>
    </footer>
  )
}

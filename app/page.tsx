import ExternalLink from '@/ui/ExternalLink';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col gap-16">
      <Header />
      <Contact />
      <AboutMe />
    </div>
  );
}

function Header() {
  return (
    <div className="flex flex-row items-center gap-4">
      <div className="relative h-12 w-12">
        <Image
          alt="Logo"
          className="rounded-full"
          layout="fill"
          objectFit="contain"
          src="/static/images/logo.png"
        />
        <div className="absolute -bottom-2 -right-2 rounded-full bg-white px-1 py-0.5 text-sm dark:bg-gray-900">
          ✨
        </div>
      </div>
      <div className="flex flex-col">
        <h1>Kent Jasper Cabunoc Sisi</h1>
        <p className="text-quaternary">Software Developer in Philippines</p>
      </div>
    </div>
  );
}

function AboutMe() {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-tertiary">About me</p>
      <div className="text-secondary flex flex-col gap-4">
        <p>
        My enthusiasm for learning knows no bounds, especially when it comes to diving into the exciting world of new technologies. 
        Beyond that, you&apos;ll often find me tinkering with various projects, engrossed in the pages of books, 
        mingling with friends, breaking a sweat at the gym, or strategizing over a chessboard.
        </p>
        <p>
          Currently, I proudly serve as the Sponsorship Manager at{' '}
          <ExternalLink href="https://www.facebook.com/dscustp">
          Operations Department of Google Developer Student Clubs USTP
          </ExternalLink>
          . In this role, I connect with brilliant minds, forging relationships and seizing opportunities that fuel innovation and collaboration.
        </p>
        <p>
        Currently a freshman at the University of Science and Technology of Southern Philippines, where I&apos;m pursuing a Bachelor&apos;s degree in Computer Science. 
        My ultimate dream? To build a tech startup that leaves a mark on the world of technology.
        </p>
        <p>
        Currently interested in Reverse Engineering. Creating innovative experiences with Next.js. Fostering novel endeavors with individuals who share a common vision.

        </p>
      </div>
    </div>
  );
}

function ContactLink({
  href,
  title,
  website,
  email,
}: {
  email?: string;
  href?: string;
  title: string;
  website?: string;
}) {
  return (
    <span className="block items-center gap-4">
      {website && <p className="text-quaternary">{website}</p>}
      {href && (
        <a
          className="text-secondary hover:text-primary transition-opacity duration-150"
          href={href}
          rel="noopener noreferrer"
          target="_blank"
        >
          {title}{' '}
          <svg
            className=" inline-block h-3 w-3"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      )}
      {email && (
        <p className="text-secondary hover:text-primary transition-opacity duration-150">
          {title}
        </p>
      )}
    </span>
  );
}

function Contact() {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-tertiary">Connect</p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <ContactLink
          href="https://twitter.com/knt_jspr"
          title="knt_jspr"
          website="Twitter"
        />
        <ContactLink
          href="https://github.com/kntjspr"
          title="kntjspr"
          website="GitHub"
        />
        <ContactLink
          email="kntjspr[at]pm(dot)me"
          title="kntjspr[at]pm(dot)me"
          website="Email"
        />

      </div>
    </div>
  );
}

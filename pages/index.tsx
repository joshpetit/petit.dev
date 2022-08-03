import Head from "next/head";
import {
  faYoutube,
  faGithub,
  faInstagram,
  IconDefinition,
} from "@fortawesome/free-brands-svg-icons"; //
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"; //
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import toast, { Toaster } from "react-hot-toast";

  const copyEmailAddress = () => {
    navigator.clipboard.writeText("joshua@petit.dev");
    toast.success("Copied Email to Clipboard", {
      iconTheme: {
        primary: "#7F87BD",
        secondary: "#FFFFFF",
      },
    });
  };
export default function Home() {
  return (
    <div className="flex h-screen overflow-auto items-center justify-center bg-petit-grey">
      <Head>
        <title>Joshua Petitma</title>
        <meta name="description" content="Joshua Petitma - Software Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Toaster />
      <main className="h-full w-11/12 items-center justify-center space-x-8 pt-10 text-xl text-white lg:flex lg:justify-evenly lg:space-x-0">
        <article className="flex flex-col justify-center space-y-4 text-center lg:h-5/6 lg:w-2/6  lg:text-3xl">
          <h1 className="text-3xl font-bold lg:text-5xl">Joshua Petitma</h1>
          <p>
            I develop software, primarily websites and mobile apps. You can view
            some of the projects and companies I’ve worked with throughout the
            years{" "}
            <PetitLink href="https://blog.petit.dev/projects" target="_blank">
              here
            </PetitLink>
            .
          </p>
          <p>
            If you would like to hire me or discuss projects you can contact me
            at{" "}
            <PetitLink onClick={copyEmailAddress}>joshua@petit.dev</PetitLink>
          </p>

          <h2 className="text-2xl font-bold lg:text-4xl">
            Also, checkout my{" "}
            <PetitLink target="_blank" href="https://blog.petit.dev">
              Blog!
            </PetitLink>
          </h2>
        </article>
        <article className="mt-5 flex flex-col-reverse items-center justify-center space-y-14 space-y-reverse lg:h-4/6 lg:w-2/5 lg:flex-col lg:space-y-8">
          <div className="h-full  w-5/6 rounded-3xl bg-petit-purple">
            <img
              src="/photo.jpg"
              className="relative bottom-3 right-3 h-64 w-full rounded-[inherit] object-cover object-center drop-shadow-2xl  lg:h-full"
            />
          </div>
          <Socials />
        </article>
      </main>

      <footer></footer>
    </div>
  );
}

function Socials() {
  return (
    <div className="flex w-full flex-row justify-evenly rounded-2xl bg-petit-purple p-3 text-4xl lg:p-7 lg:text-6xl">
      <PetitIcon
        target="_blank"
        href="https://www.youtube.com/channel/UClo6j1DhtvHIKBPcsmCgWlg"
        icon={faYoutube}
      />
      <PetitIcon
        target="_blank"
        href="https://github.com/joshpetit/"
        icon={faGithub}
      />
      <PetitIcon
        href="https://www.instagram.com/josh.petitma/"
        target="_blank"
        icon={faInstagram}
      />
      <PetitIcon onClick={copyEmailAddress} target="_blank" icon={faEnvelope} />
    </div>
  );
}

const PetitIcon: React.FC<
  {
    icon: IconDefinition;
  } & PetitLinkProps
> = ({ icon, onClick, href, target }) => {
  return (
    <a onClick={onClick} href={href} target={target}>
      <FontAwesomeIcon
        className="hover:cursor-pointer hover:drop-shadow-2xl"
        icon={icon}
      />
    </a>
  );
};

interface PetitLinkProps {
  href?: string;
  target?: string;
  onClick?: () => void;
}

const PetitLink: React.FC<
  {
    children: React.ReactNode;
  } & PetitLinkProps
> = ({ href, target, onClick, children }) => {
  return (
    <a
      className="cursor-pointer text-petit-light-purple underline"
      href={href}
      target={target}
      onClick={onClick}
    >
      {children}
    </a>
  );
};

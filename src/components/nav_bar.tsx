import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faFile, faHashtag, faLink } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden md:flex flex-col h-full w-[30vw] bg-slate-50 p-4 border-r border-gray-200">
        <div className="mb-6">
          <h2 className="font-bold text-lg">Second Brain</h2>
        </div>
        <nav className="grid gap-[2vh]">
          <NavBarItem
            icon={<FontAwesomeIcon icon={faXTwitter} size="sm" />}
            text="Tweets"
            link="#"
          />
          <NavBarItem
            icon={<FontAwesomeIcon icon={faYoutube} size="sm" />}
            text="Videos"
            link="#"
          />
          <NavBarItem
            icon={<FontAwesomeIcon icon={faFile} size="sm" />}
            text="Document"
            link="#"
          />
          <NavBarItem
            icon={<FontAwesomeIcon icon={faLink} size="sm" />}
            text="Link"
            link="#"
          />
          <NavBarItem
            icon={<FontAwesomeIcon icon={faHashtag} size="sm" />}
            text="Tags"
            link="#"
          />
        </nav>
      </div>
    </>
  );
}

function NavBarItem(props: {
  icon: React.ReactNode;
  text: string;
  link?: string;
}) {
  return (
    <a className="flex gap-2" href={`${props.link} ?? "#"`}>
      <div className="flex items-center justify-center  w-8 h-8 ">
        {props.icon}
      </div>
      <span className="flex items-center justify-center ">{props.text}</span>
    </a>
  );
}

export default NavBar;

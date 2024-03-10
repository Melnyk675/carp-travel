
import Link from "next/link";
import { SelectedPage } from "../../types/index";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  close: () => void;
}

const Links = ({
  page,
  selectedPage,
  setSelectedPage,
  close
}: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;


  return (
    <Link
      className={`${selectedPage === lowerCasePage ? "navLink" : ""} 
    transition duration-300 ease-in-out footer-link`}
      href={`#${lowerCasePage}`}
      onClick={() => {
        setSelectedPage(lowerCasePage);
        close();
      }}>
      {page}
    </Link>
  )
}

export default Links;
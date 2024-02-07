import React, { createRef, useEffect, useRef, useState } from "react";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import clsx from "clsx";

type Props = {
  children: string | JSX.Element;
  pageData: PageData;
  transparentNav?: boolean; // for other pages
};

const Layout = ({ children, pageData, transparentNav = true }: Props) => {
  const [isAtTop, setIsAtTop] = useState(transparentNav);

  useEffect(() => {
    // do not add scroll event if transparent nav is false
    if (!transparentNav) return;

    document.addEventListener("scroll", () => {
      if (window.scrollY > window.innerHeight) {
        setIsAtTop(false);
      } else {
        setIsAtTop(true);
      }
    });
  }, [transparentNav]);

  return (
    <div className="overflow-auto min-w-[436px]">
      <header
        className={clsx(
          isAtTop ? "bg-transparent" : "bg-secondary",
          "text-white w-full transition z-10",
          transparentNav ? "fixed" : "sticky top-0"
        )}
      >
        <Navbar />
      </header>
      <main>{children}</main>

      <Footer
        socialLinks={pageData.socialLinks}
        contactEmail={pageData.contactEmail}
      />
    </div>
  );
};

export default Layout;

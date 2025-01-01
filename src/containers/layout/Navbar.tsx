import React from "react";
import Image from "next/image";
import styles from "../../styles/navbar.module.scss";
import { IoIosArrowBack } from "react-icons/io";

const Navbar = () => {
  return (
    <section className={styles.navbar}>
      <div className={styles.nav_container}>
        <p className={styles.back}>
          <IoIosArrowBack /> Back
        </p>
        <div className={styles.nav_functions}>
          <div className={styles.searchbar}>
            <Image
              src={"/icons/search.svg"}
              alt="search"
              width={20}
              height={20}
            />
            <input type="text" placeholder="Search here..." />
          </div>

          <aside>
            <Image src={"/icons/bell.svg"} alt="bell" width={20} height={20} />
            <Image
              src={"/icons/texts.svg"}
              alt="texts"
              width={20}
              height={20}
            />
            <span>
              <Image
                src={"/images/profile.png"}
                alt="profile"
                width={32}
                height={32}
              />
              <Image
                src={"/icons/dropdown.svg"}
                alt="dropdown"
                width={20}
                height={20}
              />
            </span>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Navbar;

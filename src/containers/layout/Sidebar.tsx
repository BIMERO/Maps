import React from "react";
import Image from "next/image";
import styles from "../../styles/sidebar.module.scss";
import Link from "next/link";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Sidebar = () => {
  return (
    <section className={styles.sidebar}>
      <figure>
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={195}
          height={24}
          className={styles.logo}
        />
      </figure>
      <nav>
        <ul className={styles.navLinks}>
          <li>
            <Link href={"/"} className={styles.link}>
              <Image
                src={"/icons/dashboard.svg"}
                alt="dashboard"
                width={20}
                height={20}
              />
              Dashboard
            </Link>
          </li>
          <li>
            <Link href={"/"} className={styles.link}>
              <Image src={"/icons/box.svg"} alt="box" width={20} height={20} />
              Inventory
            </Link>
          </li>
          <li>
            <Link href={"/"} className={styles.procure}>
              <div className={styles.link}>
                <Image
                  src={"/icons/cart.svg"}
                  alt="cart"
                  width={20}
                  height={20}
                />
                Procurement
              </div>
              <IoIosArrowUp />
            </Link>

            <p
              className={styles.procure_dropdown}
              style={{ background: "#e3eafb" }}
            >
              Quotes
            </p>
            <p className={styles.procure_dropdown}>Orders</p>
          </li>
          <li>
            <Link href={"/"} className={styles.finance}>
              <div className={styles.link}>
                <Image
                  src={"/icons/money.svg"}
                  alt="money"
                  width={20}
                  height={20}
                />
                Finance
              </div>
              <IoIosArrowDown />
            </Link>
          </li>
          <li>
            <Link href={"/"} className={styles.finance}>
              <div className={styles.link}>
                <Image
                  src={"/icons/chats.svg"}
                  alt="chats"
                  width={20}
                  height={20}
                />
                Communication
              </div>
              <span>10</span>
            </Link>
          </li>
          <li>
            <Link href={"/"} className={styles.finance}>
              <div className={styles.link}>
                <Image
                  src={"/icons/calendar.svg"}
                  alt="calendar"
                  width={20}
                  height={20}
                />
                Calendar
              </div>
              <span>10</span>
            </Link>
          </li>
          <li>
            <Link href={"/"} className={styles.link}>
              <Image
                src={"/icons/signin.svg"}
                alt="signin"
                width={20}
                height={20}
              />
              Contracts
            </Link>
          </li>
        </ul>

        <ul className={styles.navLinks}>
          <li>
            <Link href={"/"} className={styles.link}>
              <Image
                src={"/icons/question-circle.svg"}
                alt="support"
                width={20}
                height={20}
              />
              Support
            </Link>
          </li>
          <li>
            <Link href={"/"} className={styles.link}>
              <Image
                src={"/icons/settings.svg"}
                alt="settings"
                width={20}
                height={20}
              />
              Settings
            </Link>
          </li>
          <li className={styles.profile_logout}>
            <div className={styles.profile}>
              <Image
                src={"/images/Avatars.png"}
                alt="profile"
                width={40}
                height={40}
              />
              <div>
                <b>Mark Benson</b>
                <p>markbenson@core...</p>
              </div>
            </div>
            <Image
              src={"/icons/sign-out.svg"}
              alt="profile"
              width={24}
              height={24}
            />
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Sidebar;

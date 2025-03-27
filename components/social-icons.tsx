import Link from "next/link";
import React from "react";
import {
  FaInstagram,
  FaTelegram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

function SocialIcons() {
  return (
    <div className="flex items-center justify-center gap-x-2">
      <Link href={"/"}>
        <FaInstagram
          size="1rem"
          className="transition duration-300 hover:opacity-75"
        />
      </Link>
      <Link href={"/"}>
        <FaXTwitter
          size="1rem"
          className="transition duration-300 hover:opacity-75"
        />
      </Link>
      <Link href={"/"}>
        <FaYoutube
          size="1rem"
          className="transition duration-300 hover:opacity-75"
        />
      </Link>{" "}
      <Link href={"/"}>
        <FaTelegram
          size="1rem"
          className="transition duration-300 hover:opacity-75"
        />
      </Link>{" "}
    </div>
  );
}

export default SocialIcons;

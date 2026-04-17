import React from "react";
import footerLogo from "../../assets/logo-xl.png";
import insta from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="bg-[#244D3F]">
      <div className="container mx-auto p-16">
        <div className="flex flex-col items-center justify-center space-y-4 mb-6">
          <img src={footerLogo} alt="" />
          <p className="text-white">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>
        </div>
        <div>
          <div className="space-y-4">
            <h2 className="text-xl text-center text-white">Social Links</h2>
            <div className="flex flex-row justify-center items-center gap-4">
              <Link>
                <img src={insta} alt="" />
              </Link>
              <Link>
                <img src={facebook} alt="" />
              </Link>
              <Link>
                <img src={twitter} alt="" />
              </Link>
            </div>
          </div>
          <div className="flex justify-between items-center text-[#FAFAFA]/30 mt-8  border-t border-[#1A8862]/30 p-4">
            <div>
              <p>© 2026 KeenKeeper. All rights reserved.</p>
            </div>
            <div className="flex flex-row gap-3">
              <Link>Privacy Policy</Link>
              <Link>Terms of Service</Link>
              <Link>Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

// @flow strict
import Link from "next/link";
import { CgGitFork } from "react-icons/cg";
import { IoStar } from "react-icons/io5";

function Footer() {
  return (
    <footer className="relative border-t bg-[#0a0d1e] border-[#252b48] text-white mt-16">
      <div className="mx-auto px-4 sm:px-8 lg:max-w-[72rem] xl:max-w-[80rem] 2xl:max-w-[94rem] py-8">
        <div className="flex justify-center">
          <div className="absolute top-0 h-[1px] w-3/4 sm:w-1/2 bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-gray-400 text-center sm:text-left">
            © {new Date().getFullYear()} Designed &amp; Developed by{" "}
            <Link
              target="_blank"
              href="https://github.com/RickNazmudin"
              className="text-[#f9d049] hover:underline font-medium"
            >
              Ricko Najmudin
            </Link>
          </p>
          <div className="flex items-center gap-6">
            <Link
              target="_blank"
              href="https://github.com/RickNazmudin?tab=stars"
              className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-[#f9d049] transition-colors"
            >
              <IoStar />
              <span>Star</span>
            </Link>
            <Link
              target="_blank"
              href="https://github.com/RickNazmudin"
              className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-[#f9d049] transition-colors"
            >
              <CgGitFork />
              <span>Fork</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

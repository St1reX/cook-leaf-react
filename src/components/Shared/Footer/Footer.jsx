import mainLogo from "../../../assets/mainLogo.svg";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer bg-base-200/60 px-6 py-4 mt-auto">
      <div className="flex w-full flex-wrap items-center justify-between">
        <div className="flex items-center text-xl font-bold text-base-content">
          <img className="w-16" src={mainLogo} alt="Application Logo" />
          <span>CookLeaf</span>
        </div>
        <aside className="grid-flow-col items-center">
          <p>
            <Link to={"/"} className="link link-hover font-medium" href="#">
              ©2024 CookLeaf
            </Link>
          </p>
        </aside>
        <div className="flex h-5 gap-4">
          <a href="https://github.com/St1reX" className="link" aria-label="Github Link">
            <span className="icon-[tabler--brand-github] size-5" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100067961432579"
            className="link"
            aria-label="Facebook Link"
          >
            <span className="icon-[tabler--brand-facebook] size-5" />
          </a>
          <a href="#" className="link" aria-label="X Link">
            <span className="icon-[tabler--brand-x] size-5" />
          </a>
          <a
            href="https://about.google/?fg=1&utm_source=google-PL&utm_medium=referral&utm_campaign=hp-header"
            className="link"
            aria-label="Google Link"
          >
            <span className="icon-[tabler--brand-google] size-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}

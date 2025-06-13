import useFlyonUIInit from "../hooks/useFlyonUIInit";
import { Link } from "react-router-dom";
import helpSupportCenter from "../assets/helpPage/Help_SupportCentre.avif";
import helpTutorials from "../assets/helpPage/Help_Tutorials.avif";

export default function Help() {
  useFlyonUIInit();

  return (
    <>
      <div className="flex flex-col gap-16">
        <div>
          <h1 className="text-4xl font-medium mb-8">How can we help you?</h1>
          <p>
            If you're looking for answers to frequently asked questions, contact information, or need help
            using Cookidoo® features, we're happy to help.
          </p>
        </div>

        <div className="w-full flex items-center gap-8">
          <img src={helpTutorials} alt="helpSupportCenter" className="w-1/2" />
          <div>
            <h3 className="text-3xl mb-6">Tutorials</h3>
            <p className="font-bold mb-2">Want to learn more about Cookidoo®?</p>
            <p className="mb-4">
              From recipes and collections to articles and useful tips, Cookidoo® offers a myriad of ways to
              help you get the most out of your Thermomix® device. Whether you're a novice or simply want to
              explore the ins and outs of navigating the platform, visit the Tutorials section. Here you'll
              find all the information you need to learn Cookidoo® from the ground up or expand your current
              knowledge.
            </p>
            <Link className="btn btn-primary btn-xl w-fit">Start learning</Link>
          </div>
        </div>

        <div className="w-full flex items-center gap-8">
          <img src={helpSupportCenter} alt="helpSupportCenter" className="w-1/2" />
          <div>
            <h3 className="text-3xl mb-6">Support center</h3>
            <p className="font-bold mb-2">Need help with your Cookidoo®?</p>
            <p className="mb-4">
              Check out the frequently asked questions in our Support Center or contact us.
            </p>
            <ul className="space-y-3 text-sm mb-6">
              <li className="flex items-center space-x-3">
                <span className="bg-primary/20 text-primary flex items-center justify-center rounded-full p-1">
                  <span className="icon-[tabler--arrow-right] size-4 rtl:rotate-180" />
                </span>
                <span className="text-base-content/80">
                  E-mail:{" "}
                  <Link className="link link-animated link-primary" to={"mailto:urygajakub@gmail.com"}>
                    urygajakub@gmail.com
                  </Link>
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="bg-primary/20 text-primary flex items-center justify-center rounded-full p-1">
                  <span className="icon-[tabler--arrow-right] size-4 rtl:rotate-180" />
                </span>
                <span className="text-base-content/80"> Phone: +123456789 (Monday-Friday, 08:00-18:00) </span>
              </li>
            </ul>

            <Link className="btn btn-primary btn-xl w-fit">Get help</Link>
          </div>
        </div>
      </div>
    </>
  );
}

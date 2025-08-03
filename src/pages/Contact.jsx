import ButtonV3 from "../components/elements/ButtonV3";
import { IoIosSend } from "react-icons/io";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("This function is UI only, nothing is sent");
  };

  return (
    <div
      id="contact-us"
      class="min-h-screen py-16 px-4 sm:px-6 lg:px-8 lg:py-20"
    >
      <div class="relative mx-auto max-w-xl">
        <svg
          class="absolute left-full translate-x-1/2 transform"
          width="404"
          height="404"
          fill="none"
          viewBox="0 0 404 404"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="85737c0e-0916-41d7-917f-596dc7edfa27"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="0"
                y="0"
                width="4"
                height="4"
                class="text-gray-200 dark:text-slate-600"
                fill="currentColor"
              ></rect>
            </pattern>
          </defs>
          <rect
            width="404"
            height="404"
            fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
          ></rect>
        </svg>
        <svg
          class="absolute right-full bottom-0 -translate-x-1/2 transform"
          width="404"
          height="404"
          fill="none"
          viewBox="0 0 404 404"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="85737c0e-0916-41d7-917f-596dc7edfa27"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="0"
                y="0"
                width="4"
                height="4"
                class="text-gray-200 dark:text-slate-800"
                fill="currentColor"
              ></rect>
            </pattern>
          </defs>
          <rect
            width="404"
            height="404"
            fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
          ></rect>
        </svg>
        <div class="text-center">
          <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-slate-200 sm:text-4xl">
            Contact Us
          </h2>
          <p class="mt-4 text-lg leading-6 text-gray-500 dark:text-slate-400">
            Please use the form below to contact us. Thank you!
          </p>
        </div>
        <div class="mt-12">
          <form
            onSubmit={(e) => handleSubmit(e)}
            class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
          >
            <div class="sm:col-span-2">
              <label
                for="name"
                class="block text-sm font-medium text-gray-700 dark:text-slate-400"
              >
                Name
              </label>
              <div class="mt-1">
                <input
                  name="name"
                  type="text"
                  id="name"
                  autocomplete="organization"
                  required=""
                  class="border border-gray-300 block w-full rounded-md py-3 px-4 shadow-sm focus:border-sky-500 focus:ring-sky-500 dark:border-white/5 dark:bg-slate-700/50 dark:text-white"
                />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label
                for="email"
                class="block text-sm font-medium text-gray-700 dark:text-slate-400"
              >
                Email
              </label>
              <div class="mt-1">
                <input
                  name="email"
                  id="email"
                  required=""
                  type="email"
                  autocomplete="email"
                  class="border border-gray-300 block w-full rounded-md py-3 px-4 shadow-sm focus:border-sky-500 focus:ring-sky-500 dark:border-white/5 dark:bg-slate-700/50 dark:text-white"
                />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label
                for="message"
                class="block text-sm font-medium text-gray-700 dark:text-slate-400"
              >
                Message
              </label>
              <div class="mt-1">
                <textarea
                  required=""
                  name="message"
                  id="message"
                  rows="4"
                  class="border border-gray-300 block w-full rounded-md py-3 px-4 shadow-sm focus:border-sky-500 focus:ring-sky-500 dark:border-white/5 dark:bg-slate-700/50 dark:text-white"
                ></textarea>
              </div>
            </div>
            <div class="flex justify-end sm:col-span-2">
              <ButtonV3
                type="submit"
                name="Send"
                icon={<IoIosSend className="text-xl" />}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

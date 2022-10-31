import * as React from "react";

export const Button: React.FC<{ secondary?: boolean; text: string }> = ({
  secondary = false,
  text,
}) => {
  const bgClasses = secondary
    ? "bg-secondary hover:bg-secondaryDark"
    : "bg-primary hover:bg-primaryDark";

  return (
    <button
      className={`${bgClasses} rounded-md text-light border-light border-2 py-2 px-4`}
    >
      {text}
    </button>
    // <div className="rounded-md">
    //   <a href="https://turborepo.org/docs/getting-started">
    //     <div className="flex w-full items-center justify-center rounded-md border border-transparent bg-black px-8 py-3 text-base font-medium text-white no-underline hover:bg-gray-700 dark:bg-white dark:text-black dark:hover:bg-gray-300 md:py-3 md:px-10 md:text-lg md:leading-6">
    //       Read the docs
    //       <span className="ml-2 bg-gradient-to-r from-brandred to-brandblue bg-clip-text text-transparent">
    //         →
    //       </span>
    //     </div>
    //   </a>
    // </div>
  );
};

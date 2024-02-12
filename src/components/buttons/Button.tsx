import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  text: string;
  action: string;
  type: "button" | "submit";
  tailwindClasses?: string;
  aria_label?: string; 
}

const Button: React.FC<ButtonProps> = ({ text, action, type, tailwindClasses, aria_label }) => {
  // Classes padrão
  const defaultClasses = "text-white bg-PrussianBlue hover:bg-Cerulean/20 focus:ring focus:focusborder-b-gray-900 font-bold rounded-lg text-sm px-2 lg:px-4 py-3 text-center backdrop-blur-2xl";

  return (
    <>
      {type === 'submit' ? (
        <button type={type} className={tailwindClasses || defaultClasses} aria-label={aria_label}>
          {text}
        </button>
      ) : (
        <Link href={action}>
          <a className={tailwindClasses || defaultClasses}>
            {text}
          </a>
        </Link>
      )}
    </>
  );
};

export default Button;






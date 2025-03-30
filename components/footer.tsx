import SocialIcons from "./social-icons";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-500 p-5 text-center space-y-2">
      <SocialIcons />
      <p className="text-gray-500">© {year} Company Name</p>
    </footer>
  );
};

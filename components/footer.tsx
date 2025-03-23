export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-500 p-5 text-center">
      <p className="text-gray-500 text-xs">© {year} Company Name</p>
    </footer>
  );
};

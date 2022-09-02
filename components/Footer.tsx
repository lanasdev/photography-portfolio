const Footer = () => {
  return (
    <footer>
      <div className="p-4 py-8 flex justify-center items-center">
        &copy; {new Date().getFullYear() || "2022"} - Bart Photography
      </div>
    </footer>
  );
};

export default Footer;

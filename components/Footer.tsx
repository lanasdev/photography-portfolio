const Footer = () => {
  return (
    <footer>
      <hr />
      <div className="p-4">
        &copy; {new Date().getFullYear() || "2022"} - Next Template Tailwind
        Typescript{" "}
      </div>
    </footer>
  );
};

export default Footer;

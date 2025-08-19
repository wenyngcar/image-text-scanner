const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <div className="text-center border-t border-blue-primary p-5 mt-24">
      © {currentYear} Wordsnap. All rights reserved.
    </div>
  );
}

export default Footer;

function Footer() {
  const yearOfOurLord = new Date().getFullYear();

  return (
    <>
      <footer>
        <p>&copy;{yearOfOurLord}</p>
      </footer>
    </>
  );
}

export default Footer;

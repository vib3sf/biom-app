import "./Footer.css";

export function Footer() {
  return (
    <footer>
      <p>&copy;2024 Hruzheuski Uladzislau</p>
      <a
        href="https://github.com/vib3sf/biom-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={process.env.PUBLIC_URL + '/github.png'} alt="GitHub" />
      </a>
    </footer>
  );
}

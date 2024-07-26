import "./styles/Footer.css";
const footer = [
  { id: 1, title: "Coding Challenge", desc: "challenge description " },
  { id: 2, title: "Coding Challenge", desc: "challenge description " },
  { id: 3, title: "Project Submission", desc: "challenge description " },
  { id: 4, title: "Project Quiz", desc: "challenge description " },
  { id: 5, title: "Lode Submission", desc: "challenge description " },
  { id: 6, title: "Live Submission", desc: "challenge description " },
  { id: 7, title: "Portoolo Assissient", desc: "challenge description " },
];
const Footer = () => {
  return (
    <ul className="footer-section">
      {footer.map((items) => (
        <li key={items.id}>
          <h1>{items.title}</h1>
          <p>{items.desc}</p>
          <button className="get-started">Get Started</button>
        </li>
      ))}
    </ul>
  );
};
export default Footer;

import './index.css'

function Footer() {
    return (
        <footer className="footer">
          <section id="Contact" className="service">
            <a href="https://github.com/marissacraig"><img src="/Contact/github.png" className="contact" alt="github logo"/></a>
            <a href="https://www.linkedin.com/in/marissa-craig-59557a172/"><img src="/Contact/linkedin.png" className="contact" alt="linkedin logo"/></a>
            <a href="mailto:gersen.marissa@gmail.com"><img src="/Contact/mail.png" className="contact" alt="email icon"/></a>
            <a href="tel:+155555555555"><img src="/Contact/phone.png" className="contact" alt="phone icon"/></a>
          </section>
        </footer>
    )
}

export default Footer;
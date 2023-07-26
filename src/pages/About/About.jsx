import React from "react";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import "../../css/aboutus.css";
import a1 from "../../Coffe-img/a1.jpg";
import l1 from "../../Coffe-img/l1.jpg";
import e1 from "../../Coffe-img/e1.jpg";
import g1 from "../../Coffe-img/g1.jpg";
import f1 from "../../Coffe-img/f1.jpg";

export const About = () => {
  const teamMembers = [
    {
      name: "Augusto Cesar Garcia",
      role: "Developer Full Stack",
      info: "19 Años, Estudiante de Programacion Web.",
      image: a1,
    },
    {
      name: "Leonardo Diaz",
      role: "Developer Full Stack",
      info: "26 años, Estudiante de Programacion Web",
      image: l1,
    },
    {
      name: "Ezequiel Moreira",
      role: "Developer Full Stack",
      info: "24 años, Estudiante de Programacion Web",
      image: e1,
    },
    {
      name: "Gerardo Hamid",
      role: "Developer Full Stack",
      info: "23 años, Estudiante de Programacion Web",
      image: g1,
    },
    {
      name: "Federico Angulo",
      role: "Developer Full Stack",
      info: "26 años, Estudiante de Programacion Web",
      image: f1,
    }
  ];

  return (
    <section className="section-white">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 className="section-title">Quienes somos?</h2>
            <p className="section-subtitle">
              Hola!, como estan?. Nosotros somos un grupo de jóvenes developers que nos encargamos de hacer realidad la página web de sus sueños.
            </p>
          </div>
          
          {teamMembers.map((member, index) => (
            <div className="col-12 col-md-6 col-lg-4" key={index}>
              <div className="team-item">
                <img src={member.image} className="team" alt="pic" />
                <h3>{member.name}</h3>
                <div className="team-info">
                  <p>{member.role}</p>
                  <p>{member.info}</p>

                  <ul className="team-icon">
                    <li>
                      <a href="*" className="twitter">
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a href="*" className="facebook">
                        <FaFacebook />
                      </a>
                    </li>
                    <li>
                      <a href="*" className="linkedin">
                        <FaLinkedin />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
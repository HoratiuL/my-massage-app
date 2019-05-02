import React from "react";
import Typography from "@material-ui/core/Typography";

const AntetCard = ({ title, about }) => {
  return (
    <div
      style={{
        // Outer
        borderRadius: "50%",
        maxWidth: "20%",
        height: "100%",
        boxShadow: " -1px 2px 49px 14px rgba(224,36,224,1)"
      }}
    >
      <div
        style={{
          // Inner
          display: "flex",
          flexDirection: "column",
          justifyItems: "center",
          alignItems: "stretch",
          borderRadius: "50%",
          paddingTop: "20px",
          // height: "auto",
          paddingBottom: "20%",
          // maxWidth: "20%",
          boxShadow: " inset -1px 2px 49px 30px rgba(224,36,224,1)"
        }}
      >
        <Typography align="center" variant="headline">
          {title}
        </Typography>
        <img
          src="./images/Picture1.png"
          style={{ width: "20vw", margin: "auto" }}
        />
        <Typography
          align="center"
          style={{ display: "flex", wordWrap: "normal" }}
        >
          {about}
        </Typography>
      </div>
    </div>
  );
};

function Antet() {
  const Antet = [
    {
      title: "Accesibil",
      about:
        "Text here Text here Abc def Text here Text here Abc def  Text here Text here Abc def  Text here Text here"
    },
    {
      title: "Variat",
      about: "Text here"
    },
    {
      title: "Flexibil",
      about: "Text here"
    }
  ];
  return (
    <div>
      <Typography
        align="center"
        variant="display3"
        style={{
          paddingTop: "10%",
          display: "flex",
          justifyContent: "center"
        }}
      >
        O stare profunda de liniste se atinge acum mai usor ....
      </Typography>
      <Typography align="center" variant="headline">
        Alege acum sedinta de masaj pe care o doresti sau consulta sfatul
        specialistului
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          paddingTop: "2%"
        }}
      >
        {Antet.map(el => (
          <AntetCard title={el.title} about={el.about} />
        ))}
      </div>
    </div>
  );
}

export default Antet;

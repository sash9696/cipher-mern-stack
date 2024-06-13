import "./ExperienceCard.css";

export default function ExperienceCard({
  companyName,
  designation,
  statements,
  iconImages,
}) {
    
  const icons = iconImages.map((icon, index) => (
    <img key={icon} src={icon} alt={icon} />
  ));

  return (
    <div className="ex_card_container">
      <p className="ex_card_title">{companyName}</p>

      <p className="ex_card_subtitle">Designation: {designation}</p>

      {statements.map((item, index) => (
        <p key={item} className="ex_card_sentence">
          {item}
        </p>
      ))}
      <p className="ex_card_texh_used_title">Tech Stack Used</p>

      <div className="ex_card_icon_images_container">{icons}</div>
    </div>
  );
}

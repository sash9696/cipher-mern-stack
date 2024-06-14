import "./ProjectBox.css";

export default function ProjectBox({ image, title, sentences, link }) {
  return (
    <div className="project_box_container">
      <div className="project_box_image_container">
        <img src={image} alt={title} />
      </div>

      <div className="project_box_description_container">
        <div className="project_box_title">{title}</div>
        <div className="project_box_sentences_container">
          {sentences.map((sentence, index) => (
            <p key={sentence}>{sentence}</p>
          ))}
        </div>

        <p className="project_box_link">
          <span>Link</span>
          <a href={link} target="_blank">
            {link}
          </a>
        </p>
      </div>
    </div>
  );
}

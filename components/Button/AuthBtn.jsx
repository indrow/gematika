import "@/styles/button.scss";

export default function AuthBtn(props) {
  const btnStyle = props.btnStyle ? props.btnStyle : "h-12 w-48 text-lg";
  const slideStyle = props.slideStyle ? props.slideStyle : "bg-cyan-500";

  return (
    <button
      className={`group sliding__btn ` + btnStyle}
      onClick={props.handleClick}
    >
      <div className={`slider ` + slideStyle}></div>
      <span className="sliding__btn__text">{props.text}</span>
    </button>
  );
}

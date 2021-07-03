import styles from "./Button.module.scss";
import classNames from "classnames/bind";

const bind = classNames.bind(styles);

function Button(props) {
  const { btnStyle, large } = props;

  return <button className={bind(styles.button, btnStyle, { large })}>{props.children}</button>;
}

Button.defaultProps = {
  btnStyle: "1",
};

export default Button;

import { FunctionComponent, useState } from "react";
import useObserver from "../hooks/useObserver";
import TextSubject from "../TextSubject";

interface IProps {
  subject: TextSubject;
}

const TextFieldObserverFC: FunctionComponent<IProps> = (props) => {
  const { subject } = props;
  const [text, setText] = useState("");

  const update = (subject: TextSubject): void => {
    setText(subject.text);
  };

  useObserver(subject, update);

  return <input value={text} readOnly />;
};

export default TextFieldObserverFC;

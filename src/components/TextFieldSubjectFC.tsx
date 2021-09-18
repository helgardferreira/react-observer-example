import { FunctionComponent, useState, ChangeEvent } from "react";
import TextSubject from "../TextSubject";

interface IProps {
  subject: TextSubject;
}

const TextFieldSubjectFC: FunctionComponent<IProps> = (props) => {
  const [text, setText] = useState("");

  const handleChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>): void => {
    setText(value);
    props.subject.handleChange(value);
  };

  return <input onChange={(e) => handleChange(e)} value={text} />;
};

export default TextFieldSubjectFC;

import React, { ChangeEvent } from "react";
import TextSubject from "../TextSubject";

interface IState {
  text: string;
}

interface IProps {
  subject: TextSubject;
}

export default class TextFieldSubject extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);

    this.state = {
      text: "",
    };
  }

  handleChange(e: ChangeEvent<HTMLInputElement>): void {
    const {
      target: { value },
    } = e;

    this.setState({ text: value });
    this.props.subject.handleChange(value);
  }

  render() {
    return (
      <input onChange={(e) => this.handleChange(e)} value={this.state.text} />
    );
  }
}

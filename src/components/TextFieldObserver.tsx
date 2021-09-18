import React from "react";
import TextSubject from "../TextSubject";
import Observer from "../types/Observer";

interface IState {
  text: string;
}

interface IProps {
  subject: TextSubject;
}

export default class TextFieldObserver
  extends React.Component<IProps, IState>
  implements Observer
{
  constructor(props: any) {
    super(props);

    this.state = {
      text: "",
    };
  }

  componentDidMount() {
    this.props.subject.attach(this);
  }

  componentWillUnmount() {
    this.props.subject.detach(this);
  }

  public update(subject: TextSubject): void {
    this.setState({
      text: subject.text,
    });
  }

  render() {
    return <input value={this.state.text} readOnly />;
  }
}

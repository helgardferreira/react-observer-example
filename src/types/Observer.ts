import TextSubject from "../TextSubject";

export type ObserverUpdateFunc = (subject: TextSubject) => void;

export default interface Observer {
  update: ObserverUpdateFunc;
}

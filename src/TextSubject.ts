import Observer from "./types/Observer";
import Subject from "./types/Subject";

export default class TextSubject implements Subject {
  text: string = "";
  observers: Observer[] = [];

  attach(observer: Observer): void {
    const isExist = this.observers.includes(observer);
    if (isExist) {
      return;
    }

    this.observers.push(observer);
    console.log(this.observers.length);
  }

  detach(observer: Observer): void {
    const observerIndex = this.observers.indexOf(observer);
    if (observerIndex === -1) return;

    this.observers.splice(observerIndex, 1);
  }

  notify(): void {
    for (const observer of this.observers) {
      observer.update(this);
    }
  }

  handleChange(value: string): void {
    this.text = value;
    this.notify();
  }
}

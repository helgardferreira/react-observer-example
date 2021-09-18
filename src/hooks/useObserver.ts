import { useEffect } from "react";
import { ObserverUpdateFunc } from "../types/Observer";
import TextSubject from "../TextSubject";

const useObserver = (subject: TextSubject, update: ObserverUpdateFunc) => {
  useEffect(() => {
    const observer = { update };
    subject.attach(observer);

    console.log("useObserver useEffect...");

    return () => {
      subject.detach(observer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [subject]);
};

export default useObserver;

// Observerの型
type Observer = (value: number) => void;

// Subjectの型
type Subject = {
  registerObserver: (observer: Observer) => void;
  removeObserver: (observer: Observer) => void;
  notifyObservers: (value: number) => void;
};

// Subject（観察対象）の生成関数
const createSubject = (): Subject => {
  let observers: Observer[] = [];

  const registerObserver = (observer: Observer): void => {
    observers.push(observer);
  };

  const removeObserver = (observer: Observer): void => {
    observers = observers.filter((obs) => obs !== observer);
  };

  const notifyObservers = (value: number): void => {
    for (const observer of observers) {
      observer(value);
    }
  };

  return {
    registerObserver,
    removeObserver,
    notifyObservers,
  };
};

const subject = createSubject();

// Observer関数
const observer1: Observer = (value) => {
  console.log(`Observer 1 received: ${value}`);
};

const observer2: Observer = (value) => {
  console.log(`Observer 2 received: ${value}`);
};

// ObserverをSubjectに追加
subject.registerObserver(observer1);
subject.registerObserver(observer2);

// Subjectの変更を通知
subject.notifyObservers(42);

// Observer 1をSubjectから削除
subject.removeObserver(observer1);

// 再度変更を通知
subject.notifyObservers(99);

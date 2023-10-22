package strategy_pattern.good_example;

import strategy_pattern.good_example.behavior.FlyBehavior;
import strategy_pattern.good_example.behavior.QuackBehavior;

public abstract class Duck {
    FlyBehavior flyBehavior;
    QuackBehavior quackBehavior;

    public Duck() {
    }

    // 各サブクラスで実装
    abstract void display();

    // quackBehaviorに処理を移譲する
    public void performQuack() {
        quackBehavior.quack();
    }

    // quackBehaviorを動的に変更できるようにする
    public void setQuackBehavior(QuackBehavior qb) {
        this.quackBehavior = qb;
    }

    public void performFly() {
        flyBehavior.fly();
    }

    // quackBehaviorを動的に変更できるようにする
    public void setFlyBehavior(FlyBehavior fb) {
        this.flyBehavior = fb;
    }

    // 共通の動きなので親クラスで実装
    public void swim() {
        System.out.println("どんなカモでも泳ぐことはできる！");
    }

}

package strategy_pattern.good_example;

import strategy_pattern.good_example.behavior.FlyWithWings;
import strategy_pattern.good_example.behavior.Quack;

public class MallardDuck extends Duck {
    public void display() {
        System.out.println("マガモの表示");
    }

    public MallardDuck() {
        this.quackBehavior = new Quack();
        this.flyBehavior = new FlyWithWings();
    }
}

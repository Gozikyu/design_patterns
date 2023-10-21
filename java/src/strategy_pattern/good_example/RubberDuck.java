package strategy_pattern.good_example;

import strategy_pattern.good_example.behavior.FlyNoWay;
import strategy_pattern.good_example.behavior.MuteQuack;

public class RubberDuck extends Duck {
    public void display() {
        System.out.println("ゴムのアヒルの表示");
    }

    public RubberDuck() {
        this.quackBehavior = new MuteQuack();
        this.flyBehavior = new FlyNoWay();
    }

}

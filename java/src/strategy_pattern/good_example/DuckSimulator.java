package strategy_pattern.good_example;

import strategy_pattern.good_example.behavior.FlyWithRocket;

public class DuckSimulator {

    public static void main(String[] args) {

        MallardDuck mallard = new MallardDuck();
        RubberDuck rubberDuckie = new RubberDuck();

        mallard.display();
        mallard.performFly();
        rubberDuckie.display();
        rubberDuckie.performFly();
        System.out.println("ゴムのカモを飛べるようにする");
        rubberDuckie.setFlyBehavior(new FlyWithRocket());
        rubberDuckie.performFly();
    }
}
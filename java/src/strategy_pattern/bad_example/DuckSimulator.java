package strategy_pattern.bad_example;

public class DuckSimulator {

    public static void main(String[] args) {

        MallardDuck mallard = new MallardDuck();
        RubberDuck rubberDuckie = new RubberDuck();

        mallard.display();
        mallard.fly();
        rubberDuckie.display();
        rubberDuckie.fly();
    }
}
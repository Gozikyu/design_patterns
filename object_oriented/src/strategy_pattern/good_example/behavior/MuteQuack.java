package strategy_pattern.good_example.behavior;

public class MuteQuack implements QuackBehavior {
    public void quack() {
        System.out.println("沈黙、、");
    }
}

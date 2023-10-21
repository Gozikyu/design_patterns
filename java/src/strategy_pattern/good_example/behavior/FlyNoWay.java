package strategy_pattern.good_example.behavior;

public class FlyNoWay implements FlyBehavior {
    public void fly() {
        System.out.println("飛べないよ");
    }
}
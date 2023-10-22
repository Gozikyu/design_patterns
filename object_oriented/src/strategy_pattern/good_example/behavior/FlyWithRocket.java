package strategy_pattern.good_example.behavior;

public class FlyWithRocket implements FlyBehavior {

    public void fly() {
        System.out.println("ロケットで飛べるよ");
    }
}

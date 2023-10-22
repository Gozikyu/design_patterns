package strategy_pattern.good_example.behavior;

public class FlyWithWings implements FlyBehavior {
	public void fly() {
		System.out.println("羽で飛べるよ");
	}
}
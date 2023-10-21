package strategy_pattern.bad_example;

public class RubberDuck extends Duck {
    @Override
    public void display() {
        System.out.println("ゴムのアヒルの表示");
    }

    // ゴムのアヒルは飛んではいけないが、継承元のクラスにflyが追加されたことで飛べるようになってしまう
}

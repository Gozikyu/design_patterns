package strategy_pattern.bad_example;

// package design_patterns.java.src.strategy_pattern.bad_example;

public abstract class Duck {
    public void quack() {
        System.out.println("カモが鳴く");
    }

    public void swim() {
        System.out.println("カモが泳ぐ");
    }

    public void display() {
        System.out.println("カモの表示");
    }

    // 飛ぶメソッドが後から追加された
    public void fly() {
        System.out.println("カモが飛ぶ");
    }

    // 変更によってサブクラス全てに影響を与えてしまう
}

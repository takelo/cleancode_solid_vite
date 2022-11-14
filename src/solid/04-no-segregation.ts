interface Bird1 {
    eat(): void;
    fly(): void;
    run(): void;
    swim(): void;
}

 
// Se aplica segregacion para que el codigo quede mas tolerante al cambio

class Tucan1 implements Bird1 {
    public eat() {}
    public fly() { return 100; }
    public run() {};
    public swim() {
        throw new Error('esta ave no nada');
    };
}

class Humminbird1 implements Bird1 {
    public eat() {}
    public fly() { return 200; }
    public run() {};
    public swim() {
        throw new Error('esta ave no nada');
    };
}

class Ostrich1 implements Bird1 {
    public eat() {}
    public fly() {  return 100; }
    public run() {};
    public swim() {
        throw new Error('esta ave no nada');
    };
}

class Penguin1 implements Bird1 {
    public eat() {}
    public fly() {
        throw new Error('esta ave no vuela');
    }
    public run() {};
    public swim() {};
}





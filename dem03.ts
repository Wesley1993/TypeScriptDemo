class Man {
  // private 私有属性 仅在当前类中可用
  // protected 受保护的属性 在当前类和子类中使用
  // public 公共属性
  constructor (private _age: number, protected salary?: number) {}
  get age () {
    //获取类中的属性
    return this._age
  }
  set age (age: number) {
    // 修改类中的属性
    this._age = age + 3
  }
}

const man = new Man(18)
man.age = 16
console.log(man.age) //19
const woman = new Man(16)
console.log(woman.age) //16

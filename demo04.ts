// class Person {
//   public readonly _name: string
//   constructor (public name: string) {
//     this._name = name
//   }
// }

// const person = new Person('wesley')
// person._name = '小智' //报错 只读属性无法修改
// console.log(person._name)

// 抽象类中的方法不具体定义，在继承该抽象类的子类中 具体定义
abstract class Person {
  abstract eat ()
}

class Woman extends Person {
  eat () {}
}
class Children extends Person {
  eat () {}
}

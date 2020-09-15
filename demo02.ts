// const count: number = 1

//错误代码
/* const count: number = 1
count = 'ts' */

//自定义静态类型
interface SelfStatic {
	user: string
	age: number
}
const wesley: SelfStatic = {
	user: 'wewe',
	age: 18
}

console.log(wesley)

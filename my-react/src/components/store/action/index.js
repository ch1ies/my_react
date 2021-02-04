export const INCREASE = Symbol('increase');
export const DECREASE = Symbol('decrease')
export const SET = Symbol('set');

export function createActionIncrease(user) {
  return {
      type: INCREASE,
      payload:user
  }
}

export function createActionDecrease(id) {
    return {
        type: DECREASE,
        payload:id
    }
}

// action创建函数必须是一个纯函数，不能改变参数值，只能新建一个新的对象进行覆盖
export function createActionSet(id, newData) {
    return {
        type: SET,
        payload:{
            ...newData,
            id
        }
    }
}

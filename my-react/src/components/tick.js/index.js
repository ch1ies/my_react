import React, { Component } from 'react'
import "./index.css"
export default class index extends Component {
    //目前只有类组件有自己的状态，添加了Hook后，函数组件也可以有自己维护的状态
    // 初始化状态，JS Next 语法，目前处于实验阶段
    // state = {
    //     left:this.props.number,
    //     n:123
    // }
    constructor(props){
        super(props)
        /*
        初始化状态  
         */
        this.state = {left: this.props.number} 
        let timer = setInterval(() =>{
            this.setState({
                left : this.state.left - 1
            })
            if(this.state.left === 0){
                clearInterval(timer);
                //倒计时完成，利用回调函数的方式抛出事件
                this.props.onOver() && this.props.onOver();
            }
        },1000)
    }
    render() {
        return (
            <div className="tick" onClick={this.props.onClick}>
            {this.state.left}
            </div>
        )
    }
}

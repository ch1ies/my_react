//给组件添加事件,使用调用回调函数的方式来注册事件
import React, { Component } from 'react'
import Tick from "./index"
export default class Test extends Component {
    state = {
        isOver:false // 倒计时是否完成
    }
    handleClick = ()=>{
        console.log(this)
        console.log("点击了")
    }
    handleOver = ()=>{
        console.log(this)
        this.setState({
            isOver:true
        })
    }
    render() {
        let status = "正在倒计时"
        if(this.state.isOver){
            status = "倒计时完成"
        }
        return (
            <div>
                <h2>{status}</h2>
                <Tick 
                    onClick ={this.handleClick}
                    onOver = {this.handleOver}
                    number={12}
                />
            </div>
        )
    }
}

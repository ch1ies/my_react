import React, { Component } from 'react'
import Students from "./Students"
export default class StudentList extends Component {
    render() {
        let arr = [
            {name:"chen",age:"18",sex:"male"},
            {name:"chen",age:"12",sex:"male"},
            {name:"chen",age:"13",sex:"male"},
            {name:"chen",age:"14",sex:"male"}
        ]
        const showStudents = arr.map(item => <Students key={item.age} {...item}/>)
        return (
            <div>
                {showStudents}
            </div>
        )
    }
}

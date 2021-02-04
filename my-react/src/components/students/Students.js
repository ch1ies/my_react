import React, { Component } from 'react'

export default class students extends Component {
    // constructor(props){
    //     super(props)
    // }
    render() {
        return (
            <div>
                姓名:{this.props.name}
                年龄:{this.props.age}
                性别:{this.props.sex}
            </div>
        )
    }
}

// import React from 'react'

// export default function students(props) {
//     return (
//         <div>
//             姓名:{props.name}
//             年龄:{props.age}
//             性别:{props.sex}
//         </div>
//     )
// }

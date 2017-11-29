import React, { Component } from "react";
import PropTypes from "prop-types";
import Student from '../Student/Student'
import menu_pic_1 from '../../../../images/Navigation/menu_pic_1.png'
import add_class from '../../../../images/Navigation/add_class.png'
import student_1 from '../../../../images/Students/student_1.png'
import student_2 from '../../../../images/Students/student_2.png'
import student_3 from '../../../../images/Students/student_3.png'
import student_4 from '../../../../images/Students/student_4.png'
import student_5 from '../../../../images/Students/student_5.png'
import student_6 from '../../../../images/Students/student_6.png'
import student_7 from '../../../../images/Students/student_7.png'

import './style.scss'



class Students extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [
          {
            img: student_1,
            name: "Hyram M"
          },
          {
            img: student_2,
            name: "Shellagh L"
          },
          {
            img: student_3,
            name: "Keaton O"
          },
          {
            img: student_4,
            name: "Dallas R"
          },
          {
            img: student_5,
            name: "Jorya F"
          },
          {
            img: student_6,
            name: "Hyram M"
          },
          {
            img: student_7,
            name: "Ainsile C"
          },
          {
            img: student_1,
            name: "Hyram M"
          },
          {
            img: student_4,
            name: "Shellagh L"
          },
          {
            img: student_7,
            name: "Keaton O"
          },
          {
            img: student_2,
            name: "Dallas R"
          },
          {
            img: student_5,
            name: "Jorya F"
          },
          {
            img: student_6,
            name: "Hyram M"
          },
          {
            img: student_3,
            name: "Ainsile C"
          },
          {
            img: student_5,
            name: "Hyram M"
          },
          {
            img: student_4,
            name: "Shellagh L"
          },
          {
            img: student_6,
            name: "Keaton O"
          },
          {
            img: student_4,
            name: "Peter R"
          },
          {
            img: student_2,
            name: "Jorya F"
          },
          {
            img: student_6,
            name: "Ben W"
          },
          {
            img: student_1,
            name: "Ainsile C"
          },
          {
            img: student_3,
            name: "Avraam M"
          },
          {
            img: student_7,
            name: "Shellagh L"
          },
          {
            img: student_5,
            name: "Jocob M"
          },
          {
            img: student_4,
            name: "Dallas R"
          },
          {
            img: student_2,
            name: "Dido D"
          },
          {
            img: student_6,
            name: "Hyram M"
          },
          {
            img: student_3,
            name: "Perla C"
          },
          {
            img: student_7,
            name: "Jamal I"
          },
          {
            img: student_1,
            name: "Bac D"
          },
          {
            img: student_5,
            name: "Nally M"
          },
          {
            img: student_4,
            name: "Perla C"
          }
        ]
    }
  }



  render() {
    return (
      <div className="students__container">
        <div className="students__header">
          <div className="students__header--left">
            <img src={menu_pic_1} />
            <span>Students</span>
          </div>
          <div className="students__header--right">
            <img src={add_class} />
            <span>ADD STUDENT</span>
          </div>
        </div>
        <div className="students__body">
          {
            this.state.data.map((item, index, array) => (
              <Student
                key={index}
                image={item.img}
                name={item.name}
              />
            ))
          }
        </div>
      </div>
    );
  }
}


export default Students;

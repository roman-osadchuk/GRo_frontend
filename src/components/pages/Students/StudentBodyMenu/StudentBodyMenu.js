import React from 'react'
import {Tabs, Tab} from 'material-ui/Tabs'
import Slider from 'material-ui/Slider'
import StudentNotePage from '../StudentNotePage/StudentNotePage'
import './style.scss'

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  tabs: {
    backgroundColor: '#FCCF3A'
  }
};


function handleActive(tab) {
  alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
}

function highlightActive(e) {
    console.log(e);
}

const StudentBodyMenu = () => (
  <Tabs className="students_nav_menu">
    <Tab label="INFO">
      <div>
        <h2 style={styles.headline}>Tab One</h2>
        <p>
          This is an example tab.
        </p>
        <p>
          You can put any sort of HTML or react component in here. It even keeps the component state!
        </p>
      </div>
    </Tab>
    <Tab label="NOTES" onActive={style => {styles.headline}} >
      <div>
        <StudentNotePage />
      </div>
    </Tab>
    <Tab label="ASSESSMENTS" >
        <div>
        <h2 style={styles.headline}>Tab Two</h2>
        <p>
            This is another example tab.
        </p>
        </div>
    </Tab>
    <Tab
      label="GRAPHS"
      data-route="/home"
      onActive={handleActive}
    >
      <div>
        <h2 style={styles.headline}>Tab Three</h2>
        <p>
          This is a third example tab.
        </p>
      </div>
    </Tab>
  </Tabs>
);

export default StudentBodyMenu;
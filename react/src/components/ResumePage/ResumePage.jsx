import React, { Component } from 'react';
import { connect } from 'react-redux';

import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import HasErrored from '../HasErrored/HasErrored';
import IsLoading from '../Loading/Loading';
import s from './ResumePage.css';

import { fetchResume } from '../../actions/resumeAction/resumeAction';


class ResumePage extends Component {
  constructor() {
    super();
    this.state = {
      
    }
  }
  render() {
    return (
      <div>
        <Navbar />
        <div className={s.resume_container}>
          <h1 className="header">Hana Wu</h1>
          <h3 className={s.school}>University of California, Berkeley</h3>
          <h4 className={s.degree}>Bachelor of Arts, Sociology</h4>
          <br/>
          <h3 className={s.school}>Antioch University, Santa Barbara</h3>
          <h4 className={s.degree}>Master of Arts, Clinical Psychology</h4>
          <IsLoading isLoading={this.props.isLoading} />
          <HasErrored hasErrored={this.props.hasErrored} />
          { this.renderTable(this.props.resume) }
        </div>
        <Footer />
      </div>
    );
  }

  renderTable(resume) {
    return resume.map((section, i) => {
      return (
        <table key={i} className={s.resume_table}>
          <thead>
            <tr>
              <th colSpan="3">{ section.header }</th>
            </tr>
          </thead>
          <tbody>
            { this.renderRow(section) }
          </tbody>
        </table>
      )
    })
  }

  renderRow(section) {
    return section.content.map((row, i) => {
      return (
        <tr key={i}>
          <td>{row.column1}</td>
          <td>{row.column2}</td>
          <td>{row.column3}</td>
        </tr>
      )
    })
  }
  
  componentDidMount() {
    if (this.props.resume.length === 0) {
      this.props.getResume('get_resume');
    }
  }

}


function mapStateToProps(state) {
  return {
    // comes from api call above for getResume
    resume: state.resume,
    hasErrored: state.resumeFetchError,
    isLoading: state.resumeLoading,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getResume: (url) => dispatch(fetchResume(url))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ResumePage);

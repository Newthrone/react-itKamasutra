import React, { Component } from 'react';
import classes from 'html-classes';
import styles from './pagination.module.css';

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: props.currentPage,
      isShowMessage: false,
    }
    this.timerId = null;
  }

  clickHandler = (page) => {
    this.props.setCurrentPage(page);
    this.props.requestPage(page);
    this.setState({currentPage: page})
  }

  inputChangeHandler = (event) => {
    if (event.target.value <= this.props.totalPages) this.setState({currentPage: event.target.value})
    else {
      this.setState({isShowMessage: true});
      this.timerId = setTimeout(() => this.setState({isShowMessage: false}), 3000);
    }
  }

  keyPressHandler = (event) => {
    if (event.key === 'Enter') this.clickHandler(this.state.currentPage);
  }

  inputBlurHandler = () => {
    this.setState({currentPage: this.props.currentPage})
    this.setState({isShowMessage: false})
  }

  componentWillUnmount() {
    clearTimeout(this.timerId);
  }

  render() {
    const { currentPage, totalPages } = this.props;
    let startPage = 1;
    let endPage = totalPages;
    if (currentPage > 3) startPage = currentPage - 2;
    if (totalPages - currentPage > 2) endPage = +currentPage + 2;
    let pages = [];
    for (let p = startPage; p <= endPage; p++) {
      pages.push(p);
    }

    return (
      <div className={styles.pagination}>
        <button className={classes([styles.btnEdgePage,styles.btnFirstPage])} onClick={() => this.clickHandler(1)} />
        <ul className={styles.pageList}>
          { pages.map(page => {
            if (page === +this.props.currentPage) {
              return (
                <div className={styles.pageItemInteractiveHolder}
                key={page}>
                  <input
                    type="number"
                    className={classes([styles.pageItem, styles.pageItemInteractive])}
                    value={this.state.currentPage}
                    onKeyPress={this.keyPressHandler}
                    onChange={this.inputChangeHandler}
                    onBlur={this.inputBlurHandler}
                  />
                  {this.state.isShowMessage && <div className={styles.hintMsg}>Всего страниц {totalPages}</div>}
              </div>)
            }
            return <li
              className={styles.pageItem}
              onClick={() => this.clickHandler(page)}
              key={page}
            >{page}</li>
          })}
        </ul>
        <button
          className={classes([styles.btnEdgePage,styles.btnEndPage])}
          onClick={() => this.clickHandler(this.props.totalPages)} />
      </div>
    )
  }
}

export default Pagination;

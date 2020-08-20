import React from 'react';
import styles from './ename.less';

export default ({ match }) => {
  console.log(match);
  return (
    <div className={styles.normal}>
      <h1>herodetail page ename...</h1>
    </div>
  );
}

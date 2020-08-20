import React, { FC } from 'react';
import styles from './hero.less';
import { Row, Col } from 'antd';
import { connect, HeroModelState, ConnectProps } from 'umi';

interface PageProps extends ConnectProps {
  hero: HeroModelState;
}

const Hero: FC<PageProps> = (props) => {
  console.log(props.hero, 'sss');
  const { heros = [] } = props.hero;
  return (
    <div>
      <Row>
        {
          heros.reverse().map((item: any) => {
            return (
              <Col key={item.ename} span={3} className={styles.heroitem}>
                <img src={`https://game.gtimg.cn/images/yxzj/img201606/heroimg/${item.ename}/${item.ename}.jpg`} alt=""/>
                <p>{item.cname}</p>
              </Col>
            );
          })
        }
      </Row>
    </div>
  );
}

export default connect(({ hero }: { hero: HeroModelState }) => ({ hero }))(Hero);
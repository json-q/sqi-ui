import React from 'react';
import { Button, Checkbox, ConfigProvider, Popup } from '@sqi-ui/web';

const content = (
  <span>
    <p>Here is the text content</p>
    <p>Here is the text content</p>
  </span>
);

const styles: Record<string, React.CSSProperties> = {
  container: {
    margin: '0 auto',
    width: '500px',
    height: '260px',
    position: 'relative',
  },
  top: {
    position: 'absolute',
    top: '0',
    left: '42%',
  },
  topStart: {
    position: 'absolute',
    top: '0',
    left: '70px',
  },
  topEnd: {
    position: 'absolute',
    top: '0',
    right: '70px',
  },
  bottom: {
    position: 'absolute',
    bottom: '0',
    left: '42%',
  },
  bottomStart: {
    position: 'absolute',
    bottom: '0',
    left: '70px',
    width: '120px',
  },
  bottomEnd: {
    position: 'absolute',
    bottom: '0',
    right: '70px',
  },
  left: {
    position: 'absolute',
    left: '0',
    top: '42%',
  },
  leftStart: {
    position: 'absolute',
    left: '0',
    top: '50px',
  },
  leftEnd: {
    position: 'absolute',
    left: '0',
    bottom: '50px',
  },
  right: {
    position: 'absolute',
    right: '0',
    top: '42%',
  },
  rightStart: {
    position: 'absolute',
    right: '0',
    top: '50px',
  },
  rightEnd: {
    position: 'absolute',
    right: '0',
    bottom: '50px',
  },
};
export default function Demo() {
  const [showArrow, setShowArrow] = React.useState(true);
  return (
    <>
      <Checkbox checked={showArrow} onChange={(e) => setShowArrow(e.target.checked)}>
        Show arrow
      </Checkbox>
      <div style={styles.container}>
        <ConfigProvider componentConfig={{ Popup: { trigger: 'click' } }}>
          <Popup showArrow={showArrow} direction="top-start" content={content}>
            <Button type="primary" style={styles.topStart}>
              top-start
            </Button>
          </Popup>
          <Popup showArrow={showArrow} direction="top" content={content}>
            <Button type="primary" style={styles.top}>
              top
            </Button>
          </Popup>
          <Popup showArrow={showArrow} direction="top-end" content={content}>
            <Button type="primary" style={styles.topEnd}>
              top-end
            </Button>
          </Popup>
          <Popup showArrow={showArrow} direction="left-start" content={content}>
            <Button type="primary" style={styles.leftStart}>
              left-start
            </Button>
          </Popup>
          <Popup showArrow={showArrow} direction="left" content={content}>
            <Button type="primary" style={styles.left}>
              left
            </Button>
          </Popup>
          <Popup showArrow={showArrow} direction="left-end" content={content}>
            <Button type="primary" style={styles.leftEnd}>
              left-end
            </Button>
          </Popup>
          <Popup showArrow={showArrow} direction="right-start" content={content}>
            <Button type="primary" style={styles.rightStart}>
              right-start
            </Button>
          </Popup>
          <Popup showArrow={showArrow} direction="right" content={content}>
            <Button type="primary" style={styles.right}>
              right
            </Button>
          </Popup>
          <Popup showArrow={showArrow} direction="right-end" content={content}>
            <Button type="primary" style={styles.rightEnd}>
              right-end
            </Button>
          </Popup>
          <Popup showArrow={showArrow} direction="bottom-start" content={content}>
            <Button type="primary" style={styles.bottomStart}>
              bottom-start
            </Button>
          </Popup>
          <Popup showArrow={showArrow} direction="bottom" content={content}>
            <Button type="primary" style={styles.bottom}>
              bottom
            </Button>
          </Popup>
          <Popup showArrow={showArrow} direction="bottom-end" content={content}>
            <Button type="primary" style={styles.bottomEnd}>
              bottom-end
            </Button>
          </Popup>
        </ConfigProvider>
      </div>
    </>
  );
}

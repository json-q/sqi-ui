import React from 'react';
import { Button, Checkbox, Tooltip } from '@sqi-ui/web';

const content = 'This is a tooltip';

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
        <Tooltip showArrow={showArrow} placement="top-start" content={content}>
          <Button variant="outline" style={styles.topStart}>
            top-start
          </Button>
        </Tooltip>
        <Tooltip showArrow={showArrow} placement="top" content={content}>
          <Button variant="outline" style={styles.top}>
            top
          </Button>
        </Tooltip>
        <Tooltip showArrow={showArrow} placement="top-end" content={content}>
          <Button variant="outline" style={styles.topEnd}>
            top-end
          </Button>
        </Tooltip>
        <Tooltip showArrow={showArrow} placement="left-start" content={content}>
          <Button variant="outline" style={styles.leftStart}>
            left-start
          </Button>
        </Tooltip>
        <Tooltip showArrow={showArrow} placement="left" content={content}>
          <Button variant="outline" style={styles.left}>
            left
          </Button>
        </Tooltip>
        <Tooltip showArrow={showArrow} placement="left-end" content={content}>
          <Button variant="outline" style={styles.leftEnd}>
            left-end
          </Button>
        </Tooltip>
        <Tooltip showArrow={showArrow} placement="right-start" content={content}>
          <Button variant="outline" style={styles.rightStart}>
            right-start
          </Button>
        </Tooltip>
        <Tooltip showArrow={showArrow} placement="right" content={content}>
          <Button variant="outline" style={styles.right}>
            right
          </Button>
        </Tooltip>
        <Tooltip showArrow={showArrow} placement="right-end" content={content}>
          <Button variant="outline" style={styles.rightEnd}>
            right-end
          </Button>
        </Tooltip>
        <Tooltip showArrow={showArrow} placement="bottom-start" content={content}>
          <Button variant="outline" style={styles.bottomStart}>
            bottom-start
          </Button>
        </Tooltip>
        <Tooltip showArrow={showArrow} placement="bottom" content={content}>
          <Button variant="outline" style={styles.bottom}>
            bottom
          </Button>
        </Tooltip>
        <Tooltip showArrow={showArrow} placement="bottom-end" content={content}>
          <Button variant="outline" style={styles.bottomEnd}>
            bottom-end
          </Button>
        </Tooltip>
      </div>
    </>
  );
}

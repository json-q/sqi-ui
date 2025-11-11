import * as React from 'react';
import { Button, Checkbox, Space } from '@sqi-ui/web';
import CSSMotionList, { type CSSMotionListInstance } from '../CSSMotionList';
import './motion-list.css';

export default function Demo() {
  const motionRef = React.useRef<CSSMotionListInstance>(null);
  const [list, setList] = React.useState<string[]>([]);
  const [autoClose, setAutoClose] = React.useState(false);

  const add = () => {
    const newItem = `ListItem${list.length + 1}`;
    const newList = [...list, newItem];
    setList(newList);

    requestAnimationFrame(() => {
      motionRef.current?.toggle(newItem, true);
    });
    if (autoClose) {
      setTimeout(() => {
        motionRef.current?.toggle(newItem, false);
      }, 2000);
    }
  };
  const clear = () => {
    // setList([]);
    motionRef.current?.toggleAll(false);
  };

  return (
    <>
      <Space>
        <Button type="primary" onClick={add}>
          Add
        </Button>
        <Button type="primary" onClick={clear}>
          Clear
        </Button>
        <Checkbox checked={autoClose} onChange={(e) => setAutoClose(e.target.checked)}>
          Auto Close
        </Checkbox>
      </Space>
      <div className="list-item-container">
        <CSSMotionList ref={motionRef} name="demo-list" mountOnEnter preEnter unmountOnExit timeout={250} allowMultiple>
          {list.map((item) => (
            <div className="list-item" key={item}>
              {item}
            </div>
          ))}
        </CSSMotionList>
      </div>
    </>
  );
}

import React from 'react';
import { Trigger } from '@sqi-ui/web';
import { Component } from './_wrapper';

export default function Demo() {
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useLayoutEffect(() => {
    containerRef.current?.scrollTo(containerRef.current.clientWidth + 115, containerRef.current.clientHeight);
  }, [containerRef]);

  return (
    <div
      ref={containerRef}
      className="element-popper-container"
      style={{
        margin: 'auto',
        backgroundColor: 'whitesmoke',
        height: '400px',
        width: '80%',
        maxWidth: '600px',
        overflow: 'auto',
        position: 'relative',
        borderRadius: '5px',
        boxShadow: 'inset 0 0 6px 0 #888',
        scrollbarWidth: 'thin',
      }}
    >
      <div
        style={{
          width: '350%',
          height: '300%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Trigger
          popup={
            <Component size={110} backgroundColor="white">
              Popper Element
            </Component>
          }
        >
          <Component size={80} backgroundColor="red">
            Reference Element
          </Component>
        </Trigger>
      </div>
    </div>
  );
}

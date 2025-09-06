import React from 'react';
import { Tag, Input, Space } from '@sqi-ui/web';
import { AddIcon } from '@sqi-ui/icons';

export default function Demo() {
  const [tags, setTags] = React.useState(['Tag 1', 'Tag 2', 'Tag 3']);
  const [showInput, setShowInput] = React.useState(false);
  const [inputValue, setInputValue] = React.useState('');

  function addTag() {
    if (inputValue) {
      tags.push(inputValue);
      setTags(tags);
      setInputValue('');
    }

    setShowInput(false);
  }

  function removeTag(removeTag: string) {
    const newTags = tags.filter((tag) => tag !== removeTag);
    setTags(newTags);
  }

  return (
    <Space size={20}>
      {tags.map((tag, index) => {
        return (
          <Tag key={tag} closable={index !== 0} onClose={() => removeTag(tag)}>
            {tag}
          </Tag>
        );
      })}
      {showInput ? (
        <Input
          autoFocus
          size="sm"
          value={inputValue}
          style={{ width: 84 }}
          onBlur={addTag}
          onChange={setInputValue}
          onEnter={addTag}
        />
      ) : (
        <Tag icon={<AddIcon />} className="add-tag" tabIndex={0} onClick={() => setShowInput(true)}>
          Add Tag
        </Tag>
      )}
    </Space>
  );
}

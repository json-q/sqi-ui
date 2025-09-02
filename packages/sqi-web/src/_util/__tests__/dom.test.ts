import { describe, it, expect, vi } from 'vitest';
import { isDOM, getDOM, getRefDom, getReactNodeRef } from '../dom';
import React from 'react';

describe('dom utilities', () => {
  describe('isDOM', () => {
    it('should return true for HTMLElement', () => {
      const div = document.createElement('div');
      expect(isDOM(div)).toBe(true);
    });

    it('should return true for SVGElement', () => {
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      expect(isDOM(svg)).toBe(true);
    });

    it('should return false for non-DOM objects', () => {
      expect(isDOM(null)).toBe(false);
      expect(isDOM(undefined)).toBe(false);
      expect(isDOM({})).toBe(false);
      expect(isDOM('string')).toBe(false);
      expect(isDOM(123)).toBe(false);
    });
  });

  describe('getDOM', () => {
    it('should return currentElement for ref objects', () => {
      const div = document.createElement('div');
      const refObject = { currentElement: div };
      expect(getDOM(refObject)).toBe(div);
    });

    it('should return the node itself if it is a DOM element', () => {
      const div = document.createElement('div');
      expect(getDOM(div)).toBe(div);
    });

    it('should return null for non-DOM objects', () => {
      expect(getDOM(null)).toBe(null);
      expect(getDOM(undefined)).toBe(null);
      expect(getDOM({})).toBe(null);
      expect(getDOM('string')).toBe(null);
    });

    it('should return null for objects without currentElement', () => {
      const obj = { foo: 'bar' };
      expect(getDOM(obj)).toBe(null);
    });
  });

  describe('getRefDom', () => {
    it('should return undefined for falsy input', () => {
      expect(getRefDom(null as any)).toBeUndefined();
      expect(getRefDom(undefined as any)).toBeUndefined();
    });

    it('should return currentElement.currentElement for special refs', () => {
      const div = document.createElement('div');
      const ref = { current: { currentElement: div } };
      expect(getRefDom(ref)).toBe(div);
    });

    it('should return current property for regular refs', () => {
      const div = document.createElement('div');
      const ref = { current: div };
      expect(getRefDom(ref)).toBe(div);
    });

    it('should return undefined when current is falsy', () => {
      const ref = { current: null };
      expect(getRefDom(ref)).toBeNull();
    });
  });

  describe('getReactNodeRef', () => {
    it('should return null for non-elements', () => {
      expect(getReactNodeRef(null)).toBe(null);
      expect(getReactNodeRef(undefined)).toBe(null);
      expect(getReactNodeRef('string')).toBe(null);
      expect(getReactNodeRef(123)).toBe(null);
    });

    it('should return ref based on React version', () => {
      // Mock React version
      const versionSpy = vi.spyOn(React, 'version', 'get');

      // Test React 19+ behavior (ref in props)
      versionSpy.mockReturnValue('19.0.0');
      const divWithRefProp = React.createElement('div', { ref: 'test-ref' });
      expect(getReactNodeRef(divWithRefProp)).toBe('test-ref');

      // Test pre-React 19 behavior (ref as property)
      versionSpy.mockReturnValue('18.2.0');
      const divWithRefProperty = React.createElement('div', {});
      expect(getReactNodeRef(divWithRefProperty)).toBeNull();

      versionSpy.mockRestore();
    });

    it('should return null when element has no ref', () => {
      const versionSpy = vi.spyOn(React, 'version', 'get');
      versionSpy.mockReturnValue('19.0.0');

      const divWithoutRef = React.createElement('div', {});
      expect(getReactNodeRef(divWithoutRef)).toBe(null);

      versionSpy.mockRestore();
    });
  });
});

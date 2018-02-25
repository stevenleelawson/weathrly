import React from 'react';
import { shallow, mount } from 'enzyme';
import Card from '../lib/Card';
import data from '../lib/mock.js';
import { DataCleaner } from '../lib/DataCleaner';

describe( 'Card', () => {
  let wrapper;

  const props = {
    weather: data
  }

  beforeEach(() => {
    wrapper = mount(<Card weather={DataCleaner(data)}/>);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render an h2, img and two p elements', () => {
    expect(wrapper.find('h2').length).toEqual(1);
    expect(wrapper.find('img').length).toEqual(1);
    expect(wrapper.find('p').length).toEqual(2);
  })
})
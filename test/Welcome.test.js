import React from 'react';
import { shallow, mount } from 'enzyme';
import Welcome from '../lib/Welcome';
import data from '../lib/mock.js';
import { DataCleaner } from '../lib/DataCleaner';

describe( 'Welcome', () => {
  let wrapper;

  const props = {
    weather: data
  }

  beforeEach(() => {
    wrapper = mount(<Welcome weather={DataCleaner(data)}/>);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render an h1, Search and h2 elements', () => {
    expect(wrapper.find('h1').length).toEqual(1);
    expect(wrapper.find('Search').length).toEqual(1);
    expect(wrapper.find('h2').length).toEqual(1);
  })


})
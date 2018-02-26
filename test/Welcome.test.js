import React from 'react';
import { shallow, mount } from 'enzyme';
import Welcome from '../lib/Welcome';
import data from '../lib/mockData/mock.js';
import { dataCleaner } from '../lib/dataCleaner';

describe( 'Welcome', () => {
  let wrapper;

  const props = {
    weather: data
  }

  beforeEach(() => {
    wrapper = mount(<Welcome weather={dataCleaner(data)}/>);
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
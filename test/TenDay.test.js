import React from 'react';
import { shallow, mount } from 'enzyme';
import TenDay from '../lib/TenDay';
import data from '../lib/mock.js';
import { DataCleaner } from '../lib/DataCleaner';

describe( 'TenDay', () => {
  let wrapper;

  const props = {
    weather: data
  }

  beforeEach(() => {
    wrapper = mount(<TenDay weather={DataCleaner(data)}/>);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should return ten cards', () => {   
  expect(wrapper.find('Card').length).toEqual(10)
  })
})
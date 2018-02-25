import React from 'react';
import { shallow, mount } from 'enzyme';
import HourCard from '../lib/HourCard';
import data from '../lib/mock.js';
import { DataCleaner } from '../lib/DataCleaner';

describe( 'HourCard', () => {
  let wrapper;

  const props = {
    weather: data
  }

  beforeEach(() => {
    wrapper = mount(<HourCard weather={DataCleaner(data)}/>);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });
})
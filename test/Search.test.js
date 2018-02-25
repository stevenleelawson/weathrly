import React from 'react';
import { shallow, mount } from 'enzyme';
import Search from '../lib/Search';
import data from '../lib/mock.js';
import { DataCleaner } from '../lib/DataCleaner';

describe( 'Search', () => {
  let wrapper;

  const props = {
    weather: data
  }

  beforeEach(() => {
    wrapper = mount(<Search weather={DataCleaner(data)}/>);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });


})
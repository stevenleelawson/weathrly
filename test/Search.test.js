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

  it('should have a state with the property of weatherResults set to null', () => {
    expect(wrapper.state().input).toEqual('');
  })

  it('should have a state with the property of location set to an empty string', () => {
    expect(wrapper.state().location).toEqual('')
  })

  it('should have a state with the property of suggestions set to an empty array', () => {
    expect(wrapper.state().suggestions.length).toEqual(0)
  })
})

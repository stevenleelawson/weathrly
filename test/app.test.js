import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../lib/App';

describe( 'App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
    // localStorage.clear();
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should have a state with the property of weatherResults set to null', () => {
    expect(wrapper.state().weatherResults).toEqual(null);
  })

  it('should have a state with the property of location set to an empty string', () => {
    expect(wrapper.state().location).toEqual('')
  })

  
})
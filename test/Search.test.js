import React from 'react';
import { shallow, mount } from 'enzyme';
import Search from '../lib/Search';
import data from '../lib/mockData/mock.js';
import { DataCleaner } from '../lib/DataCleaner';

describe( 'Search', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Search handleSearch={jest.fn()}/>);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should have a state with the property of weatherResults set to null', () => {
    expect(wrapper.state().input).toEqual('');
  });

  it('should have a state with the property of location set to an empty string', () => {
    expect(wrapper.state().location).toEqual('')
  });

  it('should have a state with the property of suggestions set to an empty array', () => {
    expect(wrapper.state().suggestions.length).toEqual(0)
  });

  it('should update input state when user types in search bar', () => {
    expect(wrapper.state().input).toEqual('');
    wrapper.find('.search-bar').simulate('change', { target: { value: 'Las' } });
    expect(wrapper.state().input).toEqual('Las');
  });

  it('should update suggestions state array when user types in search bar', () => {
    expect(wrapper.state().suggestions).toEqual([]);
    wrapper.find('.search-bar').simulate('change', { target: { value: 'Las' } });
    expect(wrapper.state().suggestions).toEqual(['Las Vegas, NV', 'Las Cruces, NM']);
  });

  it('should update datalist with suggested locations', () => {
    expect(wrapper.find('option').length).toEqual(0);
    wrapper.find('.search-bar').simulate('change', {target: {value: 'Las'}});
    expect(wrapper.find('option').length).toEqual(2);
  });

  it('should set location on click', () => {
    wrapper.find('button').simulate('click')
    expect(wrapper.props().handleSearch).toHaveBeenCalledTimes(1);
  });

})

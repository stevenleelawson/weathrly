import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from '../lib/Header';

describe('Header', () => {
  let wrapper;

  const props = {
    weather: 'sunny'
  }

  beforeEach(() => {
    wrapper = shallow(<Header {...props}/>)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it('props are being passed down to children', () => {
    wrapper = mount(<Header props='success' excludedProps='not included'/>);
    expect(wrapper.props().props).toEqual('success');
    expect(wrapper.props().excludedProps).toEqual('not included');
  })

  it('should render a nav element', () => {
    expect(wrapper.find('nav').length).toEqual(1);
  })

  it('should render a paragraph element', () => {
    expect(wrapper.find('p').length).toEqual(1);
  })

  it('should render a search component', () => {
    expect(wrapper.find('Search').length).toEqual(1);
  })


})

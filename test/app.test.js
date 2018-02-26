import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../lib/App';

describe( 'App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
    localStorage.clear();
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

  it('should render the Welcome Component', () => {
    expect(wrapper.find('Welcome').length).toEqual(1)
  })

  it('should render the Header Component', () => {
    wrapper.setState({ weatherResults: {taco: 'taco'}})
    expect(wrapper.find('Header').length).toEqual(1)
  })

  it('should render the CurrentWeather Component if there is data in the state', () => {
    wrapper.setState({ weatherResults: {taco: 'taco'}})
    expect(wrapper.find('CurrentWeather').length).toEqual(1)
  })

  it('should render the SevenHour Component if there is data in the state', () => {
    wrapper.setState({ weatherResults: {taco: 'taco'}})
    expect(wrapper.find('SevenHour').length).toEqual(1)
  })

  it('should render the TenDay Component if there is data in the state', () => {
    wrapper.setState({ weatherResults: {taco: 'taco'}})
    expect(wrapper.find('TenDay').length).toEqual(1)
  })

  it('should NOT render the TenDay Component if there is no data in the state', () => {
    expect(wrapper.find('TenDay').length).toEqual(0)
  })

  it('should NOT render the Header Component if there is no data in the state', () => {
    expect(wrapper.find('Header').length).toEqual(0)
  })

  it('should NOT render the CurrentWeather Component if there is no data in the state', () => {

    expect(wrapper.find('CurrentWeather').length).toEqual(0)
  })
  it('should NOT render the TenDay Component if there is no data in the state', () => {

    expect(wrapper.find('TenDay').length).toEqual(0)
  })

  it('should NOT render the Welcome Component if there is no data in the state', () => {
    wrapper.setState({ weatherResults: {taco: 'taco'}})
    expect(wrapper.find('Welcome').length).toEqual(0)
  })

  it('should have setWeather, setToLocal, setLocation and ComponentDidMount methods', () => {
    expect(typeof wrapper.instance().setWeather).toEqual('function');
    expect(typeof wrapper.instance().setToLocal).toEqual('function');
    expect(typeof wrapper.instance().setLocation).toEqual('function');
    expect(typeof wrapper.instance().componentDidMount).toEqual('function')
  })
  it('should set location to local storage', () => {
    setTimeout(() => {
      wrapper.instance().setToLocal();
      wrapper = shallow(<App />);
      wrapper.setState({location: 'taco'})
      let itemsInStorage = localStorage.getItem('location').length;
      expect(itemsInStorage).toEqual(1)
    },500)
  })
})

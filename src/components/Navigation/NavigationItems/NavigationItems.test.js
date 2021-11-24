import React from "react";
import {configure, shallow} from 'enzyme';
import ReactSeventeenAdapter from "@wojtekmaj/enzyme-adapter-react-17";

import NavigationItems from "../NavigationItems/NavigationItems";
import NavigationItem from "./NavigationItem/NavigationItem";


configure({adapter: new ReactSeventeenAdapter()});

describe('<NavigationItems/>', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<NavigationItems/>);
    });

    it('should render two <NavigationItem/> elements if not authenticated', () => {
        // eslint-disable-next-line jest/valid-expect
        expect(wrapper.find(NavigationItem)).toHaveLength(2);
    });

    it('should render three <NavigationItem/> elements if  authenticated', () => {
        wrapper.setProps({isAuthenticated: true});
        // eslint-disable-next-line jest/valid-expect
        expect(wrapper.find(NavigationItem)).toHaveLength(3);
    });

    // eslint-disable-next-line jest/no-identical-title
    it('should render three <NavigationItem/> elements if  authenticated', () => {
        wrapper.setProps({isAuthenticated: true})
        expect(wrapper.contains(<NavigationItem link="/logout">Logout</NavigationItem>)).toEqual(true);
    });
});
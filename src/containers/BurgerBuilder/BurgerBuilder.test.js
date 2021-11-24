import React from "react";
import {configure, shallow} from 'enzyme';
import ReactSeventeenAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import {BurgerBuilder} from "./BurgerBuilder";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import NavigationItem from "../../components/Navigation/NavigationItems/NavigationItem/NavigationItem";


configure({adapter: new ReactSeventeenAdapter()});
describe('<BurgerBuilder/>', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<BurgerBuilder onInitIngredients={() => {
        }}/>);
    });
    it('should render <BuildControls/> when receiving', () => {
        wrapper.setProps({ings: {salad: 0}});
        // eslint-disable-next-line jest/valid-expect
        expect(wrapper.find(BuildControls)).toHaveLength(1);
    });
});
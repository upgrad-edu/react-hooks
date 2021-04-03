/**
 * @jest-environment jsdom
 */
import React from "react";
import AddSubscriber from "../AddSubscriber";


import Adapter from 'enzyme-adapter-react-16';
import Enzyme, {mount} from 'enzyme';
import {createMemoryHistory} from "history";
import {Router} from "react-router-dom";
import {TextValidator} from "react-material-ui-form-validator";
import {useLocationDetail} from "../customhook"


Enzyme.configure({adapter: new Adapter()})

jest.mock("../customhook",()=>({

    useLocationDetail:()=>{
        return {"city":"mock-city","region":"mock-region","country_name":"mock_country"}
    }

}))

test(" AddSubscriber Component  should render two TextValidator",async ()=>{

    const history = createMemoryHistory();

   let  container = mount(<Router history={history}>
        <AddSubscriber/>
    </Router>);


   console.log(container.html())
    const actualValue = container.find(TextValidator).length
    const expectedValue = 2;
    expect(actualValue).toBe(expectedValue);
})

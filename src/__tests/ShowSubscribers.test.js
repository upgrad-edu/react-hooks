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
import {Provider} from "react-redux";
import ShowSubscribers from "../ShowSubscribers";
import configureStore from "redux-mock-store"

Enzyme.configure({adapter: new Adapter()})

jest.mock("../customhook",()=>({

    useLocationDetail:()=>{
        return {"city":"mock-city","region":"mock-region","country_name":"mock_country"}
    }

}))


function getMockedReduxStore(){

    const store = configureStore([])
    return store({
        "subscribers":[ {
            "id": 1,
            "name": "Shilpa Bhat",
            "phone": "9999999999"
        },
            {
                "id": 2,
                "name": "user",
                "phone": "4545455"
            }]
    })
}

test("Test ShowSubscriber component rendering with Redux",async ()=>{

    let history = createMemoryHistory();
    const container = mount(<Provider store={getMockedReduxStore()}>
        <Router history={history}>
            <ShowSubscribers></ShowSubscribers>
        </Router>
        </Provider>)

        console.log(container.html());

    const actualResult= container.find(".row-container").length
    const expectedResult = 2;
    expect(actualResult).toBe(expectedResult)

})

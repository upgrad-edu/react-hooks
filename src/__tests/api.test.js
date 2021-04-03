/*
@jest-environment jsdom
 */
import {downloadLocationDetail} from "../customhook";


test("Location Detail should not be empty for valid api response",async ()=>{

    const actualResponse = await downloadLocationDetail();
    console.log(actualResponse);
    expect(actualResponse).not.toBeNull();
})

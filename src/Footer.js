import React, {useContext} from "react";
import {SubscriberCountContext} from "./SubscriberCountContext";


export default function Footer(){

    const  count= useContext(SubscriberCountContext);
    return <h4> &nbsp; &nbsp; Number of Entries : {count}</h4>
}

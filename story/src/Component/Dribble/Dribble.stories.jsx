import React from "react";
import Dribble from "./Dribble"

export default{
    title:"Components/Dribble",
    component:Dribble,
};
const Template=(args)=><Dribble {...args}/>
export const dribble=Template.bind();
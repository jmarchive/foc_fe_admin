import { Component as Cp, ReactNode } from "react";

type Props = {
    ATFailCallBack :(message?: string)=>void;
};

type State = {

};

export default class Utils extends Cp<Props, State>{
    constructor(props :Props){
        super(props);
        this.state = {

        };
    }
    render() :ReactNode{
        return(<div>

        </div>);
    }
}
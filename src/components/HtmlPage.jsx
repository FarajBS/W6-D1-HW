import Contant from "./Contant";
import HtmlImg from "../assets/html.jpg";

export default function HtmlPage() {
    return (
        <>
            <Contant 
                img={HtmlImg} 
                info="HTML stands for Hyper Text Markup Language, HTML is the standard markup language for Web pages, 
                    HTML elements are the building blocks of HTML pages, HTML elements are represented by <> tags." 
            />
        </>
    )
};

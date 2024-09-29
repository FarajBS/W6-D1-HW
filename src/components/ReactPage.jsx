import Contant from "./Contant";
import ReactImg from "../assets/react.jpg";

export default function ReactPage() {
    return (
        <>
            <Contant 
                img={ReactImg} 
                info="React is a JavaScript library for building user interfaces, React is used to build single-page applications, 
                    React allows us to create reusable UI components."
            />
        </>
    )
};

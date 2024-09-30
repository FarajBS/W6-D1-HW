import { Link } from "react-router-dom";

export default function Contant(props) {
    return (
        <>
            <div>
                <div className="absolute top-0 left-0 bg-black w-screen h-screen opacity-85 flex items-start sm:justify-center sm:items-center">
                    <p className="text-white font-medium text-xl lg:text-2xl mt-5 mx-10 sm:w-1/2 sm:mx-0 sm:mt-0 text-center">{props.info}</p>
                </div>

                <img className="w-screen h-screen" src={props.img} alt="BG-Img" />
            </div>

            <div className="w-screen flex flex-row flex-wrap gap-4 absolute pb-5 bottom-0 left-0 justify-center items-center">
                <Link to="/html">
                    <div className="bg-gray-800 p-5 rounded-2xl hover:bg-gray-900">
                        <h3 className="text-white font-bold text-xl md:text-3xl lg:text-5xl">HTML</h3>
                    </div>
                </Link>

                <Link to="/css">
                    <div className="bg-gray-800 p-5 rounded-2xl hover:bg-gray-900">
                        <h3 className="text-white font-bold text-xl md:text-3xl lg:text-5xl">CSS</h3>
                    </div>
                </Link>

                <Link to="/js">
                    <div className="bg-gray-800 p-5 rounded-2xl hover:bg-gray-900">
                        <h3 className="text-white font-bold text-xl md:text-3xl lg:text-5xl">JS</h3>
                    </div>
                </Link>

                <Link to="/react">
                    <div className="bg-gray-800 p-5 rounded-2xl hover:bg-gray-900">
                        <h3 className="text-white font-bold text-xl md:text-3xl lg:text-5xl">REACT</h3>
                    </div>
                </Link>

                <Link to="/node">
                    <div className="bg-gray-800 p-5 rounded-2xl hover:bg-gray-900">
                        <h3 className="text-white font-bold text-xl md:text-3xl lg:text-5xl">NODE JS</h3>
                    </div>
                </Link>
            </div>
        </>
    )
}

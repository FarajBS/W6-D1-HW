import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  
    return (
    <div id="error-page">

        <div className="flex flex-col w-screen h-screen justify-center items-center">
            <h1 className="mb-10 text-5xl text-red-500 font-bold">... خطأ ...</h1>

            <p className="mb-10 text-4xl text-red-500 font-bold">! هذي الصفحة غير موجودة !</p>

            <p>
                <i className="text-3xl text-red-500 font-bold">(((( {error.statusText || error.message} ))))</i>
            </p>
        </div>
            
    </div>
    );
}
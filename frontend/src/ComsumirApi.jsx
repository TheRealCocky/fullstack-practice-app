import { useEffect, useState } from 'react';
import * as string_decoder from "node:string_decoder";
const ComsumirApi = () => {
   const [carregando, setCarregando]= useState(true);
   const [post, setPost]= useState([]);


   useEffect(()=>{
      const ConsumirApi=async ()=>{

          try{
              const response= await fetch('http://localhost:3000/pegar');
              const data= await response.json();
              setPost(data);
              setCarregando(true)
          }catch(err){
              console.log("erro ao chamar a api", err);
          }finally {
              setCarregando(false);
          }
       }
       ConsumirApi();
   },[])

    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center px-4">
            {carregando && (
                <div className="absolute inset-0 flex justify-center items-center bg-white/80 z-50">
                    <span className="font-semibold text-blue-600 text-xl">Carregando...</span>
                </div>
            )}

            {!carregando && (
                <>
                    <h2 className="text-3xl font-bold text-blue-600 mb-6">Posts:</h2>
                    <ul className="space-y-4 w-full max-w-2xl">
                        {post.map((item) => (
                            <li key={item.id} className="bg-white p-4 shadow rounded-lg">
                                <strong className="block text-lg text-blue-800">{item.title}</strong>
                                <p className="text-gray-700">{item.body}</p>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>

    );
};

export default ComsumirApi;
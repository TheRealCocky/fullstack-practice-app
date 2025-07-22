const buscardados= async (req,res)=>{
    try {
        const resposta= await fetch('https://jsonplaceholder.typicode.com/posts\n');
        const dados= await resposta.json();

        const filtrar = dados.map(post => ({
            userId: post.userId,
                id:post.id,
                title:post.title,
                body:post.body
        }));

        res.status(200).json(filtrar);
    }catch (err) {
        console.log("Erro ao ir buscar os dados",err);
        res.status(500).json({message:'erro no servidor'})
    }
}
module.exports = buscardados;
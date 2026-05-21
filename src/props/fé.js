import { useParams } from "react-router-dom";

function Feed() {
const { id } = useParams();

const dados = {
1: { titulo: "Post 1", conteudo: "Conteúdo A" },
2: { titulo: "Post 2", conteudo: "Conteúdo B" },
3: { titulo: "Post 3", conteudo: "Conteúdo C" }
};

const post = dados[id];

return (
<div>
<h2>{post.titulo}</h2>
<p>{post.conteudo}</p>
</div>
);
}

export default Feed;